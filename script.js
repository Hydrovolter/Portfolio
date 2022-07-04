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
console.log("hi kiddos that inspected this page lol. uh "),
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
    const o = document.getElementById("form-submit")
      , t = (o.onclick = ()=>{
        o.style.backgroundColor = null,
        o.style.color = null,
        o.innerText = "Sending...",
        o.disabled = !0;
        var e = document.getElementById("form-emails").value
          , t = document.getElementById("form-subjects").value
          , n = document.getElementById("form-contents").value;
        fetch("/contact", {
            method: "POST",
            body: JSON.stringify({
                email: e,
                subject: t,
                content: n
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(e=>{
            e.ok ? (document.getElementById("form-emails").value = "",
            document.getElementById("form-subjects").value = "",
            document.getElementById("form-contents").value = "",
            o.style.backgroundColor = "#439543",
            o.style.color = "white",
            o.innerText = "Message Sent!",
            o.disabled = !1) : e.text().then(e=>{
                o.style.backgroundColor = "#ed4444",
                o.style.color = "white",
                o.innerText = e,
                o.disabled = !1
            }
            )
        }
        ).catch(()=>{
            o.style.backgroundColor = "#ed4444",
            o.style.color = "white",
            o.innerText = "Unknown Error",
            o.disabled = !1
        }
        )
    }
    ,
    document.getElementById("profile-avatar-status-container"))
      , n = document.getElementById("profile-avatar-status")
      , r = document.getElementById("profile-activity")
      , c = document.getElementById("profile-activity-large-image")
      , u = document.getElementById("profile-activity-small-image-container")
      , p = document.getElementById("profile-activity-small-image")
      , d = document.getElementById("profile-activity-name")
      , m = document.getElementById("profile-activity-details")
      , f = document.getElementById("profile-activity-state")
      , h = document.getElementById("profile-activity-bar-container")
      , g = document.getElementById("profile-activity-bar")
      , s = new WebSocket("wss://" + window.location.host);
    let w;
    setInterval(()=>s.send(""), 5e3),
    s.onmessage = i=>{
        const e = JSON.parse(i.data);
        if (e.activities.some(e=>e.type === k.Streaming))
            n.src = "assets/status/streaming.svg",
            C(t, "Streaming"),
            y(t);
        else
            switch (e.status) {
            case "online":
                n.src = "assets/status/online.svg",
                C(n, "Online"),
                y(t);
                break;
            case "dnd":
                n.src = "assets/status/dnd.svg",
                C(n, "Do Not Disturb"),
                y(t);
                break;
            case "idle":
                n.src = "assets/status/idle.svg",
                C(n, "Idle"),
                y(t);
                break;
            case "offline":
                n.src = "assets/status/offline.svg",
                C(n, "Offline"),
                y(t)
            }
        var s, l, i = e.activities.find(e=>e.type !== k.Custom);
        if (i) {
            let {name: e, details: t, state: n} = i, o, a;
            "spotify:1" === i.id ? (r.setAttribute("href", "https://open.spotify.com/track/" + i.sync_id),
            i.details && (e = i.details),
            i.state && (t = "by " + i.state),
            i.assets.large_text && (n = "on " + i.assets.large_text),
            i.timestamps && (o = Date.now() - i.timestamps.start,
            a = i.timestamps.end - i.timestamps.start,
            clearInterval(w),
            w = setInterval(()=>{
                o += 1e3,
                g.style.width = o / a * 100 + "%"
            }
            , 1e3))) : r.removeAttribute("href"),
            i.party?.size && ([s,l] = i.party.size,
            n ? n += " (" + s + " of " + l + ")" : n = "(" + s + " of " + l + ")"),
            e ? (d.innerText = e,
            y(d)) : b(d),
            t ? (m.innerText = t,
            y(m)) : b(m),
            n ? (f.innerText = n,
            y(f)) : b(f),
            o && a ? (g.style.width = o / a * 100 + "%",
            y(h)) : b(h),
            i.assets.large_image ? (c.src = L(i.application_id, i.assets.large_image),
            i.assets.large_text && C(c, i.assets.large_text),
            y(c)) : b(c),
            i.assets.large_image && i.assets.small_image ? (p.src = L(i.application_id, i.assets.small_image),
            i.assets.small_text && C(p, i.assets.small_text),
            y(u)) : b(u),
            y(r)
        } else
            b(r)
    }
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
}
)