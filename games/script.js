document.addEventListener("DOMContentLoaded", function () {
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
});

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const gameCards = document.querySelectorAll(".game-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            gameCards.forEach(card => {
                const category = card.getAttribute("data-category");

                if (filter === "all" || category === filter) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});