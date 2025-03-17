function linkReplacement() {
    const linkReplacements = {
        "10minutestilldawn.hydrovolter.com": "10minutestilldawn-hydro.vercel.app",
        "finalearth.hydrovolter.com": "finalearth.pages.dev",
        "connections.hydrovolter.com": "connections-hydro.vercel.app",
        "crossyroad.hydrovolter.com": "crossyroad-hydro.pages.dev",
        "glitchdash.hydrovolter.com": "glitch-dash.vercel.app",
        "infiltratingtheairship.hydrovolter.com": "infiltratingtheairship-hydro.vercel.app",
        "slingdrift.hydrovolter.com": "slingdrift-hydro.vercel.app",
        "stack.hydrovolter.com": "tower-stack.pages.dev",
        "superstarcar.hydrovolter.com": "superstarcar-hydro.vercel.app",

    };

    if (window.location.hostname === "hydrovolter.pages.dev" || window.location.hostname === "localhost") {
        document.querySelectorAll(".game-card").forEach(card => {
            let currentLink = card.getAttribute("onclick");
            if (currentLink) {
                let urlMatch = currentLink.match(/'([^']+)'/);
                if (urlMatch) {
                    let urlString = urlMatch[1];
                    
                    try {
                        let url = new URL(urlString, window.location.origin); // Handle relative URLs
                        let hostname = url.hostname;
                        
                        if (linkReplacements.hasOwnProperty(hostname)) {
                            let newUrl = url.href.replace(hostname, linkReplacements[hostname]);
                            card.setAttribute("onclick", `location.href='${newUrl}';`);
                        }
                    } catch (error) {
                        console.error("Invalid URL:", urlString);
                    }
                }
            }
        });
    }
}

//document.addEventListener("DOMContentLoaded", function () {
    /* AD VOTE SCRIPT

    if (localStorage.getItem("ads_vote_completed")) return;

    const popup = document.createElement("div");
    popup.innerHTML = `
    <div id="adsPopup" style="
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
        background: rgba(0, 0, 0, 0.7); 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        z-index: 1000;
    ">
        <div style="
            background: var(--secondary); 
            padding: 20px; 
            border-radius: 15px; 
            text-align: center;
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
            color: var(--primary-accent);
            max-width: 400px;
        ">
        <p style="margin-bottom: 15px;">
        <span style="font-size: 1.2em; font-weight: bold; text-decoration: underline;">Vote</span>:<br>Would you continue to use the site IF there were non-obtrusive ads displayed?
        </p>
    
            <button id="voteYes" style="
                margin-right: 10px; 
                padding: 10px 20px;
                border-radius: 8px;
                background: var(--primary);
                color: var(--primary-accent);
                border: none;
                cursor: pointer;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            ">✅</button>
            <button id="voteNo" style=" 
                padding: 10px 20px;
                border-radius: 8px;
                background: var(--primary);
                color: var(--primary-accent);
                border: none;
                cursor: pointer;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            ">❌</button>
        </div>
    </div>
    `;
    document.body.appendChild(popup);

    function hoverEffect() {
        this.style.transform = "scale(1.1)";
        this.style.boxShadow = "4px 4px 12px rgba(0, 0, 0, 0.5)";
    }

    const voteButtons = document.querySelectorAll("#voteYes, #voteNo");
    voteButtons.forEach(button => {
        button.addEventListener("mouseover", hoverEffect);
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
            button.style.boxShadow = "none";
        });
    });

    function sendVote(vote) {
        const voteYesButton = document.getElementById("voteYes");
        const voteNoButton = document.getElementById("voteNo");

        voteYesButton.disabled = true;
        voteNoButton.disabled = true;
        voteYesButton.style.background = "#555555";
        voteYesButton.style.cursor = "not-allowed";
        voteNoButton.style.background = "#555555";
        voteNoButton.style.cursor = "not-allowed";
        voteButtons.forEach(button => {
            button.removeEventListener("mouseover", hoverEffect);
            button.removeEventListener("mouseout", () => {
                button.style.transform = "scale(1)";
                button.style.boxShadow = "none";
            });
        });

        const popupDiv = document.getElementById("adsPopup");
        popupDiv.innerHTML = `<p style='color: var(--primary-accent); text-align: center;'>Processing...</p>`;

        fetch("https://api.hydrovolter.com/ads/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ vote })
        })
        .then(response => {
            if (response.ok) {
                closePopup("Thank you for your vote!");
            } else {
                closePopup("Error submitting vote. Try again later.");
            }
        })
        .catch(() => closePopup("Error submitting vote. Try again later."));
    }

    function closePopup(message) {
        const popupDiv = document.getElementById("adsPopup");
        popupDiv.innerHTML = `<p style='color: var(--primary-accent); text-align: center;'>${message}</p>`;
        setTimeout(() => popupDiv.remove(), 1000);
    }

    document.getElementById("voteYes").addEventListener("click", function () {
        localStorage.setItem("ads_vote_completed", "true");
        sendVote("yes");
    });

    document.getElementById("voteNo").addEventListener("click", function () {
        localStorage.setItem("ads_vote_completed", "true");
        sendVote("no");
    });
    */
//});

async function updateGitHubStats() {
    const repoName = 'Hydrovolter/Portfolio';
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

const carouselGames = [
    {
        title: "Gladihoppers",
        description: "Control a gladiator and use unpredictable physics and various weapons to defeat opponents.",
        image: "/games/covers/gladihoppers.png",
        link: "/games/gladihoppers/",
        popularText: "Most Popular",
        popularColor: "#FF5733"     
    },
    {
        title: "Gunspin",
        description: "Shoot to propel a spinning gun as far as possible, collecting coins and hitting high scores.",
        image: "/games/covers/gunspin.png",
        link: "/games/gunspin/",
        popularText: "Trending Now",
        popularColor: "#7D33FF"
    },
    {
        title: "Slope",
        description: "Control a ball rolling down a steep slope, avoiding obstacles and drops.",
        image: "/games/covers/slope.png",
        link: "/games/slope/",
        popularText: "Fan Favourite",
        popularColor: "#33FF57" 
    },
    {
        title: "Suika",
        description: "Merge fruits to create bigger ones, combining strategy and charm.",
        image: "/games/covers/suika.png",
        link: "/games/suika/",
        popularText: "Updated Version",
        popularColor: "#FF33A6"
    },
    {
        title: "Drive Mad",
        description: "Navigate tricky tracks, overcoming obstacles and challenges to reach the finish line.",
        image: "/games/covers/drivemad.png",
        link: "/games/drivemad/",
        popularText: "Addictive",
        popularColor: "#FFD733"
    },
    {
        title: "Wordle",
        description: "Guess the 5-letter hidden word in 6 tries - unlimited puzzles.",
        image: "/games/covers/wordle.png",
        link: "/games/wordle/",
        popularText: "Classic",
        popularColor: "#3357FF" 
    },
    {
        title: "Monkey Mart",
        description: "Control a monkey running a supermarket, stocking shelves and serving customers.",
        image: "/games/covers/monkeymart.png",
        link: "/games/monkeymart/",
        popularText: "Up and Coming",
        popularColor: "#00FFFF" 
    }
];

let currentGameIndex = 0;
let carouselInterval;
const transitionTime = 5000;

function updateCarousel() {
    const game = carouselGames[currentGameIndex];

    document.getElementById("carousel-title").textContent = game.title;
    document.getElementById("carousel-description").textContent = game.description;
    document.getElementById("carousel-bg").style.backgroundImage = `url(${game.image})`;

    const popularTextElement = document.getElementById("carousel-popular");
    popularTextElement.textContent = game.popularText;
    popularTextElement.style.color = game.popularColor;

    let progressBar = document.getElementById("carousel-progress-bar");
    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
    setTimeout(() => {
        progressBar.style.transition = `width ${transitionTime}ms linear`;
        progressBar.style.width = "100%";
    }, 50);

    const dotsContainer = document.getElementById("carousel-dots");
    dotsContainer.innerHTML = ""; 
    carouselGames.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("carousel-dot");
        if (index === currentGameIndex) {
            dot.classList.add("active");
            dot.style.animation = "fadeIn 0.5s ease-in-out";
        } else {
            dot.style.animation = "fadeOut 0.5s ease-in-out";
        }
        dotsContainer.appendChild(dot);
    });

    currentGameIndex = (currentGameIndex + 1) % carouselGames.length;
}

function goToGame() {
    window.location.href = carouselGames[(currentGameIndex - 1 + carouselGames.length) % carouselGames.length].link;
}

document.addEventListener("DOMContentLoaded", function () {
    linkReplacement();


    const filterButtons = document.querySelectorAll(".filter-btn");
    const gameCards = document.querySelectorAll(".game-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");

            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            gameCards.forEach(card => {
                const categories = card.getAttribute("data-categories").split(" ");
                
                if (filter === "all" || categories.includes(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });


    document.getElementById("carousel-progress").innerHTML = '<div id="carousel-progress-bar"></div>';
    updateCarousel();
    carouselInterval = setInterval(updateCarousel, transitionTime);
    updateGitHubStats();
    addSwipeToDismiss();

    

    const randomGameButton = document.getElementById('random-game-button');
    let countdownInterval;
    let isCountingDown = false;
    let originalButtonText = "Random Game";
    let targetGameLink = "";

    randomGameButton.addEventListener('click', function() {
        if (isCountingDown) {
            // Cancel the countdown
            clearInterval(countdownInterval);
            isCountingDown = false;
            randomGameButton.textContent = originalButtonText;
            return;
        }

        const validGames = [];
        gameCards.forEach(card => {
            const link = card.getAttribute('onclick');
            const title = card.querySelector('h3').textContent;
            if (link && title) {
                validGames.push({ title: title, link: link.match(/location\.href='(.*?)'/)[1] });
            }
        });

        if (validGames.length > 0) {
            const randomGame = validGames[Math.floor(Math.random() * validGames.length)];
            let countdown = 3;
            randomGameButton.innerHTML = `Playing <span style="color: lightblue;">${randomGame.title}</span> in <span style="color: rgb(247, 96, 96);">${countdown}</span>s...`;
            targetGameLink = randomGame.link;
            isCountingDown = true;

            countdownInterval = setInterval(() => {
                countdown--;
                if (countdown > 0) {
                    randomGameButton.innerHTML = `Playing <span style="color: rgb(96, 174, 247);">${randomGame.title}</span> in <span style="color: red;">${countdown}</span>s...`;
                } else {
                    clearInterval(countdownInterval);
                    isCountingDown = false;
                    window.location.href = targetGameLink;
                }
            }, 1000);
        } else {
            randomGameButton.textContent = 'No games found.';
        }
    });
});


