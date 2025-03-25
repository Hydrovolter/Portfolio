var lichessUsername = "NaturalQuilt"
var repoName = 'Hydrovolter/Portfolio';

var apiDiscordStatusEndpoint = 'https://status.hydrovolter.com';
var apiCloudflareEndpoint = 'https://api.hydrovolter.com';
var apiJsonSpotifyEndpoint = 'https://json.spotify.hydrovolter.com';
var blogRSSFeedEndpoint = 'https://blog.hydrovolter.com/rss.xml';

let currentSong = 0;


if (window.location.hostname === 'hydrovolter.pages.dev' || window.location.hostname === 'localhost') {
    apiDiscordStatusEndpoint = 'https://status-boh2.onrender.com'; 
    apiCloudflareEndpoint = 'https://api.hydrovolter.workers.dev';
    apiJsonSpotifyEndpoint = 'https://json-spotify-hydro.vercel.app';
    blogRSSFeedEndpoint = 'https://blog-hydro.pages.dev/rss.xml';
  }

const linkReplacements = {
    "movies.hydrovolter.com": "movies-hydro.pages.dev",
    "proxy.hydrovolter.com": "proxy-hydro.vercel.app",
    "tools.hydrovolter.com": "tools-hydro.pages.dev",
    "ddpe.hydrovolter.com": "ddpe.vercel.app",
    "blog.hydrovolter.com": "blog-hydro.pages.dev",
};
const statusIconMap = {
    online: "/assets/status/online.svg",
    dnd: "/assets/status/dnd.svg",
    idle: "/assets/status/idle.svg",
    invisible: "/assets/status/offline.svg",
    offline: "/assets/status/offline.svg",
};
const blogRGBAs = [
    "rgba(255, 0, 0, 0.25)",    // Red
    "rgba(0, 255, 0, 0.25)",    // Green
    "rgba(0, 0, 255, 0.25)",    // Blue
    "rgba(255, 255, 0, 0.25)",  // Yellow
    "rgba(255, 0, 255, 0.25)",  // Magenta
    "rgba(0, 255, 255, 0.25)",  // Cyan
    "rgba(128, 128, 128, 0.25)", // Gray
    "rgba(255, 165, 0, 0.25)",  // Orange
    "rgba(128, 0, 128, 0.25)",  // Purple
    "rgba(255, 192, 203, 0.25)" // Pink
];
const songs = [
    { title: "Visionary - Hydrovolter", src: "visionary.mp3" },
    { title: "Cascade - Hydrovolter", src: "cascade.mp3" },
    { title: "Evanescent - Hydrovolter", src: "evanescent.mp3" }

];

const l = {
    Up: "up",
    Down: "down",
    Left: "left",
    Right: "right"
}
  , t = {
    Center: "center",
    Top: "top",
    Bottom: "bottom",
    Left: "left",
    Right: "right"
}
  , i = {
    Center: [0, 0],
    Top: [0, -100],
    Bottom: [0, 100],
    Left: [-100, 0],
    Right: [100, 0]
};
let n = "center"
  , e = !0
  , r = !1
  , s = null;
function y(e) {
    e.style.display = null
}
function b(e) {
    e.style.display = "none"
}
function o(e) {
    return Promise.all(e.map(([e,[t,n]])=>{
        const o = document.getElementById(e);
        let a = !1;
        return t === i.Center[0] && n === i.Center[1] ? o.style.visibility = null : a = !0,
        o.style.left = t + "%",
        o.style.top = n + "%",
        new Promise(e=>setTimeout(()=>{
            a && (o.style.visibility = "hidden"),
            e()
        }
        , 500))
    }
    ))
}
function getRandomRGBAWithOpacity(opacity) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
function getRandomRGBAFromList(rgbaList) {
    const randomIndex = Math.floor(Math.random() * rgbaList.length);
    return rgbaList[randomIndex];
}
function initMusic() {
    const audio = document.getElementById("music-src");
    const play = document.getElementById("music");
    const skip = document.getElementById("music-skip");
    const info = document.getElementById("music-info");
    const art = document.getElementById("music-cover");
  
    currentSong = Math.floor(Math.random() * songs.length);
  
    function updateart() {
      art.src = `/assets/music/img/${songs[currentSong].src.replace('.mp3', '.png')}`;
      art.style.display = 'block';
    }
  
    function music() {
      if (audio.paused) {
        audio.play();
        play.classList.add("paused");
        skip.style.display = "block";
        info.textContent = songs[currentSong].title;
        updateart();
      } else {
        audio.pause();
        play.classList.remove("paused");
        skip.style.display = "none";
        info.textContent = "";
        art.style.display = 'none';
      }
    }
  
    function musicSkip() {
      currentSong = (currentSong + 1) % songs.length;
      audio.src = `/assets/music/audio/${songs[currentSong].src}`;
      audio.play();
      play.classList.add("paused");
      skip.style.display = "block";
      info.textContent = songs[currentSong].title;
      updateart();
    }
  
    function musicEnd() {
      musicSkip();
    }
  
    // init first source
    audio.src = `/assets/music/audio/${songs[currentSong].src}`;
    art.style.display = 'none';
  
    play.addEventListener("click", music);
    skip.addEventListener("click", musicSkip);
    audio.volume = 0.1;
    audio.addEventListener("ended", musicEnd);
}
function linkReplacement() {
    if (window.location.hostname === "hydrovolter.pages.dev" || window.location.hostname === "localhost") {

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
                    console.error("Invalid URL: ", href);
                }
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    initMusic();
    updateGitHubStats();
    addSwipeToDismiss();
    linkReplacement();
    updateLichessRatings();

    updateProfileStatus();
    setInterval(updateProfileStatus, 60000);

    await fetchRSSFeed(blogRSSFeedEndpoint);
    linkReplacement();
});
  

  // fetch user presence and update profile
async function updateProfileStatus() {
    // Get elements
    const statusContainer = document.getElementById("profile-avatar-status-container");
    const statusIcon = document.getElementById("profile-avatar-status");
    const activityContainer = document.getElementById("profile-activity");
    const activityContainerTotal = document.getElementById("profile-activity-container");
    const activityImage = document.getElementById("profile-activity-large-image");
    const activityImageContainer = document.getElementById("profile-activity-image-container");
    const activityName = document.getElementById("profile-activity-name");
    const activityDetails = document.getElementById("profile-activity-details");
    const activityState = document.getElementById("profile-activity-state");
    const gridContainer = document.querySelector('.grid-container');

    function hideActivity() {
        if (activityContainer && activityContainerTotal) {
            activityContainer.style.display = "none";
            activityContainerTotal.style.display = "none";
        }
    }

    try {
        const response = await fetch(`${apiDiscordStatusEndpoint}/api/presence`);
        if (!response.ok) throw new Error("Discord API fetch failed");
        const data = await response.json();

        if (data.status && statusContainer && statusIcon) {
            statusContainer.style.display = "block";
            statusIcon.src = statusIconMap[data.status] || statusIconMap["offline"];
        } else if (statusContainer) {
            statusContainer.style.display = "none";
        }

        if (data.activityType && (data.activityText || data.activityDetails)) {
            if (activityContainerTotal && activityContainer) {
                activityContainerTotal.style.display = "flex";
                activityContainer.style.display = "block";
            }

            const hasImage = !!data.activityImage;
            if (activityImage && activityImageContainer) {
                activityImage.style.display = hasImage ? "block" : "none";
                activityImageContainer.style.display = hasImage ? "block" : "none";
                activityImage.src = hasImage ? data.activityImage : "";
            }

            if (gridContainer) {
                hasImage ? gridContainer.classList.remove('single-column') : gridContainer.classList.add('single-column');
            }

            if (activityName) activityName.textContent = data.activityType;
            if (activityDetails) {
                activityDetails.style.display = data.activityDetails ? "block" : "none";
                activityDetails.textContent = data.activityDetails || "";
            }
            if (activityState) {
                activityState.style.display = data.activityText ? "block" : "none";
                activityState.textContent = data.activityText || "";
            }

            return; // Stop execution if Discord API succeeds
        }
    } catch (error) {
        console.warn("Discord API error:", error);
    }

    try {
        const response2 = await fetch(`${apiJsonSpotifyEndpoint}/api/spotify`);
        if (!response2.ok) throw new Error("Spotify API fetch failed");
        const data2 = await response2.json();
        

        if (data2.song) {
            if (activityContainerTotal && activityContainer) {
                activityContainerTotal.style.display = "flex";
                activityContainer.style.display = "block";
            }

            const hasImage = !!data2.album_art;
            if (activityImage && activityImageContainer) {
                activityImage.style.display = hasImage ? "block" : "none";
                activityImageContainer.style.display = hasImage ? "block" : "none";
                activityImage.src = hasImage ? data2.album_art : "";
            }

            if (gridContainer) {
                hasImage ? gridContainer.classList.remove('single-column') : gridContainer.classList.add('single-column');
            }

            if (activityName) activityName.textContent = "Listening to";
            if (activityDetails) {
                activityDetails.style.display = "block";
                activityDetails.textContent = data2.song;
            }
            if (activityState) {
                activityState.style.display = data2.artist ? "block" : "none";
                activityState.textContent = data2.artist || "";
            }

            return; // Stop execution if Spotify API succeeds
        }
    } catch (error) {
        console.warn("Spotify API error:", error);
    }

    try {
        const response3 = await fetch(`https://lichess.org/api/user/${lichessUsername}/current-game`, { headers: { 'Accept': 'application/json' } });
        if (!response3.ok) throw new Error("Lichess API fetch failed");
        const gameData = await response3.json();

        if (gameData && gameData.id && gameData.status === 'started') {
            if (activityContainerTotal && activityContainer) {
                activityContainerTotal.style.display = "flex";
                activityContainer.style.display = "block";
            }

            if (activityImage && activityImageContainer) {
                activityImageContainer.style.display = "block";
                activityImage.style.display = "block";
                activityImage.src = "/assets/status/lichess.png";
            }

            if (activityName) activityName.textContent = `Playing on Lichess (${gameData.clock.initial / 60}+${gameData.clock.increment})`;

            const isWhite = gameData.players.white.user?.name === lichessUsername;
            const opponentColor = isWhite ? 'black' : 'white';
            const myColor = isWhite ? 'white' : 'black';

            if (activityDetails) {
                activityDetails.style.display = "block";
                activityDetails.textContent = `${opponentColor.charAt(0).toUpperCase()}${opponentColor.slice(1)}: ${gameData.players[opponentColor].user?.name ?? 'AI'} (${gameData.players[opponentColor].rating ?? 'N/A'})`;
            }

            if (activityState) {
                activityState.style.display = "block";
                activityState.textContent = `${myColor.charAt(0).toUpperCase()}${myColor.slice(1)} [me]: ${gameData.players[myColor].user.name} (${gameData.players[myColor].rating})`;
            }

            return; // Stop execution if Lichess API succeeds
        }
    } catch (error) {
        console.warn("Lichess API error:", error);
    }

    // If all APIs fail, hide activity
    hideActivity();
}

async function updateLichessRatings() {
    const url = `https://lichess.org/api/user/${lichessUsername}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch Lichess data");
        const data = await response.json();

        const ratings = {
            ultra: data.perfs.ultraBullet?.rating || 1800,
            bullet: data.perfs.bullet?.rating || 2200,
            blitz: data.perfs.blitz?.rating || 1900,
            threeCheck: data.perfs.threeCheck?.rating || 1800
        };

        document.getElementById("ultra-rating").textContent = ratings.ultra;
        document.getElementById("bullet-rating").textContent = ratings.bullet;
        document.getElementById("blitz-rating").textContent = ratings.blitz;
        document.getElementById("threecheck-rating").textContent = ratings.threeCheck;

    } catch (error) {
        console.error("Error fetching Lichess ratings: ", error);
    }
}

async function updateGitHubStats() {
    
    const repoLinkElement = document.querySelector('.repo-name');
    const commitMessageElement = document.querySelector('.commit-message');
  
    fetch(`https://api.github.com/repos/${repoName}/commits?per_page=1`)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          const latestCommit = data[0];
          let commitMessage = latestCommit.commit.message;
          const commitUrl = latestCommit.html_url;

          const maxLength = 50;
          if (commitMessage.length > maxLength) {
            commitMessage = commitMessage.substring(0, maxLength) + "...";
          }

          repoLinkElement.textContent = repoName;
          repoLinkElement.href = `https://github.com/${repoName}`;
          repoLinkElement.target = '_blank';

          commitMessageElement.textContent = commitMessage;
          commitMessageElement.href = commitUrl;
          commitMessageElement.target = '_blank';
        } else {
          //repoLinkElement.textContent = 'Repo not found';
          commitMessageElement.textContent = 'No commits found';
        }
      })
      .catch(error => {
        console.error('Error fetching GitHub data: ', error);
        //repoLinkElement.textContent = 'Error fetching repo data';
        commitMessageElement.textContent = '';
      });
}

async function addSwipeToDismiss() {
    const repoBox = document.getElementById('github-repo-info');
    let startY = 0;
    let currentY = 0;
    let isDragging = false;

    repoBox.addEventListener('touchstart', (event) => {
        startY = event.touches[0].clientY;
        isDragging = true;
    });

    repoBox.addEventListener('touchmove', (event) => {
        if (!isDragging) return;
        currentY = event.touches[0].clientY;
        const deltaY = currentY - startY;

        if (deltaY < 0) {
            repoBox.style.transform = `translateY(${deltaY}px)`;
            repoBox.style.opacity = `${1 + deltaY / 150}`;
        }
    });

    repoBox.addEventListener('touchend', () => {
        if (currentY - startY < -100) { 
            repoBox.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
            repoBox.style.transform = 'translateY(-200%)';
            repoBox.style.opacity = '0';
            setTimeout(() => repoBox.style.display = 'none', 300);
        } else {
            repoBox.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
            repoBox.style.transform = 'translateY(0)';
            repoBox.style.opacity = '0.97';
        }
        isDragging = false;
    });
}

async function fetchRSSFeed(url) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml");

        const items = xml.querySelectorAll("item");
        const posts = [];

        items.forEach(item => {
            const title = item.querySelector("title").textContent;
            const pubDate = item.querySelector("pubDate").textContent;
            const description = item.querySelector("description").textContent;
            const link = item.querySelector("link").textContent;
            
            posts.push({ title, pubDate, description, link });
        });

        renderBlogPosts(posts);
    } catch (error) {
        console.error("Error fetching RSS feed: ", error);
    }
}

async function v(e) {
    if (!r) {
        switch (r = !0,
        e) {
        case l.Up:
            switch (n) {
            case t.Center:
                n = t.Top,
                a("about"),
                await o([[t.Center, i.Bottom], [t.Top, i.Center]]);
                break;
            case t.Bottom:
                n = t.Center,
                a(),
                await o([[t.Center, i.Center], [t.Bottom, i.Bottom]])
            }
            break;
        case l.Down:
            switch (n) {
            case t.Center:
                n = t.Bottom,
                a("contact"),
                await o([[t.Center, i.Top], [t.Bottom, i.Center]]);
                break;
            case t.Top:
                n = t.Center,
                a(),
                await o([[t.Center, i.Center], [t.Top, i.Top]])
            }
            break;
        case l.Left:
            switch (n) {
            case t.Center:
                n = t.Left,
                a("blog"),
                await o([[t.Center, i.Right], [t.Left, i.Center]]);
                break;
            case t.Right:
                n = t.Center,
                a(),
                await o([[t.Center, i.Center], [t.Right, i.Right]])
            }
            break;
        case l.Right:
            switch (n) {
            case t.Center:
                n = t.Right,
                a("dev"),
                await o([[t.Center, i.Left], [t.Right, i.Center]]);
                break;
            case t.Left:
                n = t.Center,
                a(),
                await o([[t.Center, i.Center], [t.Left, i.Left]])
            }
        }
        updateArrows();
        r = !1
    }
}

function renderBlogPosts(posts) {
    const leftSection = document.querySelector("#left .container");
    if (!leftSection) return;
    
    posts.forEach(post => {
        const blogLink = document.createElement("a");
        blogLink.className = "hover card";
        blogLink.href = post.link;
        blogLink.target = "_blank";
        blogLink.rel = "noopener noreferrer";
        blogLink.style.backgroundColor = getRandomRGBAFromList(blogRGBAs)
        blogLink.alt = `${post.title} Blog`;

        const img = document.createElement("img");
        img.className = "circle card-icon";
        img.src = "/assets/projects/BlogIcon.png"; // Default image, replace if needed
        img.alt = `${post.title} Icon`;

        const contentDiv = document.createElement("div");
        contentDiv.className = "card-content";
        
        const titleElem = document.createElement("h3");
        titleElem.textContent = post.title;

        const descElem = document.createElement("p");
        descElem.textContent = post.description;

        contentDiv.appendChild(titleElem);
        contentDiv.appendChild(descElem);
        blogLink.appendChild(img);
        blogLink.appendChild(contentDiv);
        leftSection.appendChild(blogLink);
    });
}
function C(e, t) {
    e.alt = t,
    e.title = t,
    e.ariaLabel = t
}
function L(e, t) {
    if (!t)
        return null;
    if (t.includes(":")) {
        var [n,o] = t.split(":");
        switch (n) {
        case "mp":
            return "https://media.discordapp.net/" + o;
        case "spotify":
            return "https://i.scdn.co/image/" + o;
        case "youtube":
            return `https://i.ytimg.com/vi/${o}/hqdefault_live.jpg`;
        case "twitch":
            return `https://static-cdn.jtvnw.net/previews-ttv/live_user_${o}.png`;
        default:
            return null
        }
    }
    return "https://cdn.discordapp.com/app-assets/" + e + "/" + t
}
const c = new Set(["profile", "profile-avatar-container", "social-desktop"]);
function d(e) {
    return !c.has(e.id) && e.scrollWidth > e.clientWidth
}
function m(e) {
    return !c.has(e.id) && e.scrollHeight > e.clientHeight
}
function a(e) {
    e ? (document.title = "Hydrovolter | " + e,
    window.history.replaceState({}, "", "#" + e)) : (document.title = "Hydrovolter",
    window.history.replaceState({}, "", window.location.pathname))
}
function f(e) {
    return e === document.body || e === document.documentElement
}
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function updateArrows() {
    const arrowLeft = document.getElementById("arrow-left");
    const arrowRight = document.getElementById("arrow-right");
    const arrowUp = document.getElementById("arrow-up");
    const arrowDown = document.getElementById("arrow-down");

    function toggleArrow(arrow, shouldShow) {
        if (shouldShow) {
            arrow.classList.remove("hidden");
        } else {
            arrow.classList.add("hidden");
        }
    }

    toggleArrow(arrowLeft, n === t.Right || n === t.Center);
    toggleArrow(arrowRight, n === t.Left || n === t.Center);
    toggleArrow(arrowUp, n === t.Bottom || n === t.Center);
    toggleArrow(arrowDown, n === t.Top || n === t.Center);
}

console.log(
    "%cSource Code is over at my Github - @hydrovolter",
    "background: #222; color: #bada55; padding: 5px; border-radius: 3px;",
    "https://github.com/hydrovolter/portfolio"
);
console.log(
    "%c------------------------------------------",
    "color: #888;"
);
  


window.addEventListener("load", ()=>{
    const e = document.getElementById("guide");
    
    

    if ("ontouchstart" in window) {
        e.innerText = "Swipe left, right, up, or down to navigate";
    } else {
        e.innerText = "Use your arrow keys to navigate";
    }

    
    document.getElementById("arrow-left").onclick = () => v(l.Left);
    document.getElementById("arrow-right").onclick = () => v(l.Right);
    document.getElementById("arrow-up").onclick = () => v(l.Up);
    document.getElementById("arrow-down").onclick = () => v(l.Down);

    updateArrows();

    switch (window.location.hash) {
        case "#about":
            v(l.Up);
            break;
        case "#contact":
            v(l.Down);
            break;
        case "#blog":
            v(l.Left);
            break;
        case "#dev":
            v(l.Right);
            break;
        default:
            break;
    }

    // set alt, title, and aria-label for images
    for (const a of document.querySelectorAll("[alt]")) {
        const altText = a.getAttribute("alt");
        a.title = altText;
        a.ariaLabel = altText;
    }

    // forms, api etc.
    const submitButton = document.getElementById("form-submit");

submitButton.onclick = () => {
  submitButton.style.backgroundColor = null;
  submitButton.style.color = null;

  const email = document.getElementById("form-email").value;
  const subject = document.getElementById("form-subject").value;
  const content = document.getElementById("form-content").value;

  if (!email || !subject || !content) {
    //alert('All fields are required!');
    submitButton.style.backgroundColor = "#ed4444";
    submitButton.style.color = "white";
    submitButton.innerText = "All fields are required";
    submitButton.disabled = false;

    setTimeout(() => {
        submitButton.style.backgroundColor = null;
        submitButton.style.color = null;
        submitButton.innerText = "Submit!";
      }, 2000);
    return;
  }

  if (!validateEmail(email)) {
    //alert('Please enter a valid email address!');
    submitButton.style.backgroundColor = "#ed4444";
    submitButton.style.color = "white";
    submitButton.innerText = "Invalid email address";
    submitButton.disabled = false;

    setTimeout(() => {
        submitButton.style.backgroundColor = null;
        submitButton.style.color = null;
        submitButton.innerText = "Submit!";
      }, 2000);
    return;
    return;
  }

  submitButton.innerText = "Sending...";
  submitButton.disabled = true;

  

  fetch(`${apiCloudflareEndpoint}/contact/`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      subject: subject,
      content: content
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    if (response.ok) {
      document.getElementById("form-email").value = "";
      document.getElementById("form-subject").value = "";
      document.getElementById("form-content").value = "";

      submitButton.style.backgroundColor = "#439543";
      submitButton.style.color = "white";
      submitButton.innerText = "Message Sent!";
      submitButton.disabled = false;

      setTimeout(() => {
        submitButton.style.backgroundColor = null;
        submitButton.style.color = null;
        submitButton.innerText = "Submit!";
      }, 2000);
    } else {
      response.text().then(errorMessage => {
        submitButton.style.backgroundColor = "#ed4444";
        submitButton.style.color = "white";
        submitButton.innerText = errorMessage;
        submitButton.disabled = false;
      });
    }
  }).catch(() => {
    submitButton.style.backgroundColor = "#ed4444";
    submitButton.style.color = "white";
    submitButton.innerText = "Unknown Error";
    submitButton.disabled = false;
  });
};
    

}
),


window.addEventListener("wheel", e=>{
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        for (const t of e.path || e.composedPath()) {
            if (f(t))
                break;
            if (d(t))
                return
        }
        10 < e.deltaX ? v(l.Right) : e.deltaX < -10 && v(l.Left)
    } else {
        for (const n of e.path || e.composedPath()) {
            if (f(n))
                break;
            if (m(n))
                return
        }
        10 < e.deltaY ? v(l.Down) : e.deltaY < -10 && v(l.Up)
    }
}
),
window.addEventListener("keydown", e=>{
    if (e.target === document.body || e.target === document.body)
        switch (e.key) {
        case "ArrowUp":
        case "w":
        case "w":
            e.preventDefault(),
            v(l.Up);
            break;
        case "ArrowDown":
        case "S":
        case "s":
            e.preventDefault(),
            v(l.Down);
            break;
        case "ArrowLeft":
        case "A":
        case "a":
            e.preventDefault(),
            v(l.Left);
            break;
        case "ArrowRight":
        case "D":
        case "d":
            e.preventDefault(),
            v(l.Right);
            break;
        }
}
),
window.addEventListener("touchstart", n=>{
    if (!s) {
        var [o] = n.touches;
        let e, t;
        for (const a of n.path || n.composedPath()) {
            if (f(a))
                break;
            if (d(a) && (t = a.scrollLeft,
            e))
                break;
            if (m(a)) {
                e = a.scrollTop;
                break
            }
        }
        s = {
            x: o.clientX,
            y: o.clientY,
            scrollTop: e,
            scrollLeft: t,
            initialScrollTop: e,
            initialScrollLeft: t
        }
    }
}
),
window.addEventListener("touchmove", e=>{
    if (e.preventDefault(),
    s)
        for (const n of e.path || e.composedPath()) {
            if (f(n))
                break;
            if (d(n)) {
                var t = s.x - e.touches[0].clientX;
                n.scrollLeft = s.scrollLeft + t;
                break
            }
            if (m(n)) {
                t = s.y - e.touches[0].clientY;
                n.scrollTop = s.scrollTop + t;
                break
            }
        }
}
, {
    passive: !1
}),
window.addEventListener("touchend", e=>{
    if (s) {
        var [t] = e.changedTouches
          , n = t.clientX - s.x
          , t = t.clientY - s.y;
        if (Math.abs(n) > Math.abs(t)) {
            for (const o of e.path || e.composedPath()) {
                if (f(o))
                    break;
                if (d(o))
                    return 0 === s.initalScrollLeft && 0 === o.scrollTop && v(l.Left),
                    s.initalScrollLeft === o.scrollWidth - o.clientWidth && o.initalScrollLeft === o.scrollWidth - o.clientWidth && v(l.Right),
                    void (s = null)
            }
            0 < n ? v(l.Left) : n < 0 && v(l.Right)
        } else {
            for (const a of e.path || e.composedPath()) {
                if (f(a))
                    break;
                if (m(a))
                    return 0 === s.initialScrollTop && 0 === a.scrollTop && v(l.Up),
                    s.initialScrollTop === a.scrollHeight - a.clientHeight && a.scrollTop === a.scrollHeight - a.clientHeight && v(l.Down),
                    void (s = null)
            }
            0 < t ? v(l.Up) : t < 0 && v(l.Down)
        }
        s = null
    }
},

/* here */




)