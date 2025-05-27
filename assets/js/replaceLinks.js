const linkReplacements = {
    "movies.hydrovolter.com": "movies-hydro.pages.dev",
    "proxy.hydrovolter.com": "proxy-hydro.vercel.app",
    "tools.hydrovolter.com": "tools-hydro.pages.dev",
    "ddpe.hydrovolter.com": "ddpe.vercel.app",
    "blog.hydrovolter.com": "blog-hydro.pages.dev",
};

function linkReplacement() {
    if (window.location.hostname !== 'hydrovolter.com') {

        document.querySelectorAll("a").forEach(anchor => {
            let href = anchor.getAttribute("href");
            
            if (href && !href.startsWith("/") && !href.startsWith("#")) {
                try {
                    let url = new URL(href, window.location.origin);
                    let hostname = url.hostname.replace(/^www\./, "");

                    if (linkReplacements.hasOwnProperty(hostname)) {
                        let newUrl = url.href.replace(hostname, linkReplacements[hostname]);
                        anchor.setAttribute("href", newUrl);
                    }
                } catch (e) {
                    console.error("Invalid URL:", href);
                }
            }
        });
    }
}
document.addEventListener("DOMContentLoaded", linkReplacement);