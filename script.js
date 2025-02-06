const k = {
    Game: 0,
    Streaming: 1,
    Listening: 2,
    Watching: 3,
    Custom: 4,
    Competing: 5
}
  , l = {
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

const apiEndpoint = 'https://status-boh2.onrender.com/api/presence';

const statusIconMap = {
    online: "/assets/status/online.svg",
    dnd: "/assets/status/dnd.svg",
    idle: "/assets/status/idle.svg",
    invisible: "/assets/status/offline.svg",
    offline: "/assets/status/offline.svg",
  };
  
  // fetch user presence and update profile
  async function updateProfileStatus() {
    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      
      // update profile avatar status
      const statusContainer = document.getElementById(
        "profile-avatar-status-container"
      );
      
      const statusIcon = document.getElementById("profile-avatar-status");
  
      if (data.status) {
        // show status icon
        statusContainer.style.display = "block";
        statusIcon.src = statusIconMap[data.status] || statusIconMap["offline"];
        
      } else {
        // hide status if no status available
        statusContainer.style.display = "none";
      }
  
      // update activity details
      const activityContainer = document.getElementById("profile-activity");
      const activityContainerTotal = document.getElementById("profile-activity-container")
      const activityImage = document.getElementById("profile-activity-large-image");
      const activityName = document.getElementById("profile-activity-name");
      const activityDetails = document.getElementById("profile-activity-details");
      const activityState = document.getElementById("profile-activity-state");
      
      if (data.activityType && data.activityText) {
        activityContainerTotal.style.display = "flex";
        activityContainer.style.display = "block";
        activityImage.style.display = data.activityImage ? "block" : "none";
        activityImage.src = data.activityImage || "";
  
        activityName.textContent = data.activityType;
        activityDetails.textContent = data.activityDetails || "";
        activityState.textContent = data.activityText || "";
      } else {
        // Hide activity container if no activity
        activityContainer.style.display = "none";
        activityContainerTotal.style.display = "none";
      }
    } catch (error) {
      console.error("Error fetching or updating profile status:", error);
    }
  }
  
  updateProfileStatus();
  
  // status refresh period
  setInterval(updateProfileStatus, 60000);
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
        r = !1
    }
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

console.log("Source Code is over at my Github - @hydrovolter "),

window.addEventListener("load", ()=>{
    const e = document.getElementById("guide");
    switch ("ontouchstart"in window ? e.innerText = "Swipe left, right, up, or down to navigate" : e.innerText = "Use your arrow keys to navigate",
    window.location.hash) {
    case "top":
        v(l.Up);
        break;
    case "contact":
        v(l.Down);
        break;
    case "about":
        v(l.Left);
        break;
    case "dev":
        v(l.Right)
    }
    for (const a of document.querySelectorAll("[alt]")) {
        var i = a.getAttribute("alt");
        a.title = i,
        a.ariaLabel = i
    }
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

  fetch('https://api.hydrovolter.workers.dev/contact/', {
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