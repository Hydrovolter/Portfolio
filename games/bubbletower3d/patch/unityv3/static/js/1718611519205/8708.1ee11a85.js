"use strict";
(self.webpackChunkcrazygames_gameframe = self.webpackChunkcrazygames_gameframe || []).push([[8708], {
    38563: (e,t,a)=>{
        a.d(t, {
            Z: ()=>o
        });
        var n = a(47313)
          , s = a(85541)
          , r = a(46417);
        const o = n.memo((e=>(0,
        r.jsx)(s.Z, {
            ...e,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: (0,
            r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.40033 4.44945C10.5543 2.43547 13.4458 2.43547 14.5998 4.44945L21.528 16.5411C22.6732 18.5398 21.2493 21.0611 18.9282 21.0611H5.07184C2.75081 21.0611 1.32687 18.5398 2.47213 16.5411L9.40033 4.44945ZM12.8644 5.44375C12.4788 4.7707 11.5213 4.7707 11.1357 5.44375L4.20745 17.5354C3.81311 18.2236 4.31367 19.0611 5.07184 19.0611H18.9282C19.6864 19.0611 20.187 18.2236 19.7926 17.5354L12.8644 5.44375ZM12 8.98477C12.5523 8.98477 13 9.43248 13 9.98477V12C13 12.5523 12.5523 13 12 13C11.4478 13 11 12.5523 11 12V9.98477C11 9.43248 11.4478 8.98477 12 8.98477ZM11 16.0306C11 15.4783 11.4478 15.0306 12 15.0306H12.01C12.5623 15.0306 13.01 15.4783 13.01 16.0306C13.01 16.5829 12.5623 17.0306 12.01 17.0306H12C11.4478 17.0306 11 16.5829 11 16.0306Z"
            })
        })))
    }
    ,
    68708: (e,t,a)=>{
        a.r(t),
        a.d(t, {
            default: ()=>we
        });
        var n = a(47313)
          , s = a(90831)
          , r = a(64819)
          , o = a(91469)
          , i = a(85307)
          , d = a(63779)
          , c = a(23004)
          , l = a(13751)
          , u = a(6689)
          , m = a(22870)
          , h = a(71534)
          , g = a(1247)
          , f = a(13869)
          , p = a(68988)
          , w = a(72071)
          , v = a(74309)
          , x = a(2022);
        class y extends Error {
        }
        var D = a(76306)
          , S = a(96607)
          , C = a(42379)
          , b = a(85541)
          , I = a(46417);
        const j = n.memo((e=>(0,
        I.jsx)(b.Z, {
            ...e,
            width: "24",
            height: "24",
            viewBox: "0 0 30 30",
            children: (0,
            I.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5 3.75C5.69036 3.75 6.25 4.30964 6.25 5V7.92873C8.31173 5.38058 11.4646 3.75 15 3.75C20.7379 3.75 25.4709 8.04455 26.163 13.5953C26.2485 14.2804 25.7624 14.905 25.0773 14.9904C24.3923 15.0758 23.7677 14.5897 23.6822 13.9047C23.1442 9.58967 19.4611 6.25 15 6.25C12.0279 6.25 9.39998 7.73208 7.81803 10H11.25C11.9404 10 12.5 10.5596 12.5 11.25C12.5 11.9404 11.9404 12.5 11.25 12.5H5C4.30964 12.5 3.75 11.9404 3.75 11.25V5C3.75 4.30964 4.30964 3.75 5 3.75ZM4.92269 15.0096C5.60774 14.9242 6.23234 15.4103 6.31776 16.0953C6.85583 20.4103 10.5389 23.75 15 23.75C17.9721 23.75 20.6 22.2679 22.182 20H18.75C18.0596 20 17.5 19.4404 17.5 18.75C17.5 18.0596 18.0596 17.5 18.75 17.5H25C25.6904 17.5 26.25 18.0596 26.25 18.75V25C26.25 25.6904 25.6904 26.25 25 26.25C24.3096 26.25 23.75 25.6904 23.75 25V22.0713C21.6883 24.6194 18.5354 26.25 15 26.25C9.26209 26.25 4.52915 21.9555 3.83697 16.4047C3.75155 15.7196 4.23764 15.095 4.92269 15.0096Z"
            })
        })));
        var P = a(82259)
          , Z = a(32606)
          , E = a(38563);
        const T = (0,
        C.ZP)("div")({
            opacity: .9,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            position: "absolute",
            left: 0,
            top: 0,
            height: "100vh",
            width: "100vw",
            zIndex: 1
        })
          , k = (0,
        C.ZP)("div")({
            backgroundColor: Z.D.brand[200],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            left: 0,
            top: 0,
            height: "100vh",
            width: "100vw",
            zIndex: 3
        })
          , G = (0,
        C.ZP)("div")((e=>{
            let {theme: {typography: t}} = e;
            return {
                alignItems: "center",
                alignSelf: "center",
                backgroundColor: Z.D.black[70],
                borderRadius: 20,
                boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.3)",
                display: "flex",
                flexDirection: "column",
                fontFamily: t.fontFamily,
                justifyContent: "center",
                padding: 32,
                position: "relative",
                maxWidth: "100%",
                width: 600
            }
        }
        ))
          , L = (0,
        C.ZP)(j)({
            fill: Z.D.brand[60],
            height: 48,
            width: 48
        })
          , A = (0,
        C.ZP)(E.Z)({
            fill: Z.D.white[100],
            height: 64,
            width: 64
        })
          , R = (0,
        C.ZP)("div")((e=>{
            let {theme: {spacing: t}} = e;
            return {
                color: Z.D.white[100],
                fontSize: 20,
                fontWeight: 700,
                textAlign: "center",
                margin: `${t(2)} 0 ${t()}`
            }
        }
        ))
          , N = (0,
        C.ZP)("div")((e=>{
            let {theme: t} = e;
            return {
                color: Z.D.white[60],
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "22px",
                textAlign: "center",
                marginBottom: t.spacing(3)
            }
        }
        ))
          , U = (0,
        C.ZP)("span")({
            color: Z.D.brand[60]
        })
          , M = (0,
        C.ZP)("span")({
            fontWeight: 700
        })
          , F = (0,
        C.ZP)(P.S)((e=>{
            let {theme: t} = e;
            return {
                fontFamily: t.typography.fontFamily,
                fontSize: "16px",
                fontWeight: 800,
                height: 50,
                width: "100%"
            }
        }
        ))
          , O = (0,
        C.ZP)("div")({
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            width: "100%"
        });
        var H = a(77626);
        const B = e=>{
            let {onReload: t} = e;
            return (0,
            I.jsxs)(I.Fragment, {
                children: [(0,
                I.jsx)(T, {}), (0,
                I.jsx)(k, {
                    onClick: t,
                    children: (0,
                    I.jsxs)(G, {
                        onClick: e=>{
                            e.stopPropagation(),
                            e.preventDefault()
                        }
                        ,
                        children: [(0,
                        I.jsx)(L, {}), (0,
                        I.jsx)(R, {
                            children: (0,
                            I.jsx)(H.Z, {
                                id: "aps.reload.title"
                            })
                        }), (0,
                        I.jsx)(N, {
                            children: (0,
                            I.jsx)(H.Z, {
                                id: "aps.reload.text",
                                values: {
                                    highlight: (0,
                                    I.jsx)(U, {
                                        children: (0,
                                        I.jsx)(H.Z, {
                                            id: "aps.reload.textHighlight"
                                        })
                                    })
                                }
                            })
                        }), (0,
                        I.jsx)(F, {
                            onClick: t,
                            variant: "contained",
                            children: (0,
                            I.jsx)(H.Z, {
                                id: "aps.reload.title"
                            })
                        })]
                    })
                })]
            })
        }
        ;
        var V = a(43063)
          , $ = a(69121);
        function z(e) {
            V.Z.getInstance().sendEvent({
                type: "notificationAction",
                notificationSource: "user-load-failed",
                action: e
            })
        }
        const _ = e=>{
            let {onReload: t, onContinue: a} = e;
            // e.onContinue();
            a();
            return;
            console.log("--fx--", "onReload", t, "onContinue", a);
            const s = (0,
            $.Tb)();
            return (0,
            n.useEffect)((()=>{
                z("shown")
            }
            ), []),
            (0,
            I.jsxs)(I.Fragment, {
                children: [(0,
                I.jsx)(T, {}), (0,
                I.jsx)(k, {
                    children: (0,
                    I.jsxs)(G, {
                        onClick: e=>{
                            e.stopPropagation(),
                            e.preventDefault()
                        }
                        ,
                        children: [(0,
                        I.jsx)(A, {}), (0,
                        I.jsx)(R, {
                            children: (0,
                            I.jsx)(H.Z, {
                                id: "aps.notLoaded.title"
                            })
                        }), (0,
                        I.jsxs)(N, {
                            children: [(0,
                            I.jsx)(H.Z, {
                                id: "aps.notLoaded.text"
                            }), s.isIos && s.isSafari && (0,
                            I.jsx)(H.Z, {
                                id: "aps.notLoaded.textIosSafari"
                            })]
                        }), (0,
                        I.jsxs)(O, {
                            children: [(0,
                            I.jsx)(F, {
                                onClick: ()=>{
                                    z("continue"),
                                    a()
                                }
                                ,
                                variant: "outlined",
                                color: "white",
                                children: (0,
                                I.jsx)(H.Z, {
                                    id: "aps.notLoaded.continue"
                                })
                            }), (0,
                            I.jsx)(F, {
                                onClick: ()=>{
                                    z("reload"),
                                    t()
                                }
                                ,
                                variant: "contained",
                                color: "purple",
                                children: (0,
                                I.jsx)(H.Z, {
                                    id: "aps.notLoaded.reload"
                                })
                            })]
                        })]
                    })
                })]
            })
        }
        ;
        var K = a(80387);
        class W extends D.W {
            constructor(e, t) {
                super("GameDataTimeout", e),
                this.fetchState = void 0,
                this.fetchState = t
            }
        }
        const q = e=>{
            let {handleGameData: t, handleEmptyGameData: a, loadApsInterjector: r, handleStateChange: o, logger: i} = e;
            const {gameLoadStatus: c} = n.useContext(w.r)
              , {setIsGameDisabled: u} = n.useContext(p.F)
              , {hasUserLoaded: m, userId: h} = n.useContext(d.NL)
              , {gfInit: C} = n.useContext(f.R4)
              , {adState: b} = n.useContext(K.g)
              , j = n.useRef()
              , P = n.useRef()
              , Z = n.useRef("initial")
              , E = n.useRef(null)
              , T = n.useRef(null)
              , k = n.useRef(!1)
              , G = n.useRef(b)
              , L = n.useRef(m)
              , [A,R] = n.useState(!1)
              , [N,U] = n.useState(!1)
              , M = n.useCallback((e=>{
                if (k.current)
                    return;
                const t = Z.current;
                if (Z.current = "failed",
                o("failed"),
                k.current = !0,
                i.err(new Error("GameDataFailure"), JSON.stringify(e)),
                (0,
                l.zg)(),
                e)
                    if (e instanceof y)
                        S.Z.trackAPSIssue("apsInterjectorLoadError", (0,
                        s.NI)().loader, m, !1);
                    else if (e instanceof W) {
                        const a = (0,
                        l.ZZ)(e.fetchState, !h || !m);
                        S.Z.trackAPSIssue(a, (0,
                        s.NI)().loader, m, !1, {
                            timer: e.timer,
                            userStatus: t
                        })
                    } else if (e instanceof D.W && "UPGFConnector" === e.source)
                        S.Z.trackAPSIssue("gfconnector-timeout", (0,
                        s.NI)().loader, m, !1, {
                            userStatus: t
                        });
                    else {
                        if (e instanceof g.J) {
                            return e.errors.find((e=>e && e.extensions && "NOT_AUTHENTICATED" === e.extensions.code)) ? void S.Z.trackAPSIssue("getGameData-notAuthenticated-error", "iframe", m, !1, {
                                userStatus: t
                            }) : void S.Z.trackAPSIssue("getGameData-error", "iframe", m, !1, {
                                userStatus: t
                            })
                        }
                        e instanceof v.k ? S.Z.trackAPSIssue("fetch-error-signed-url", "iframe", m, !1, {
                            userStatus: t,
                            originalError: e.originalError,
                            fetchResolved: e.fetchResolved,
                            statusCode: e.statusCode
                        }) : e instanceof x.K ? S.Z.trackAPSIssue("getGameData-install-error", "iframe", m, !1, {
                            userStatus: t
                        }) : S.Z.trackAPSIssue("fetch-error", (0,
                        s.NI)().loader, m, !1, {
                            userStatus: t
                        })
                    }
            }
            ), [o, m, i, h])
              , F = n.useCallback((async()=>{
                if (k.current || void 0 !== j.current)
                    return;
                const e = (0,
                l.i2)();
                i.debug(`game data timeout started for ${e}ms`),
                j.current = window.setTimeout((()=>{
                    k.current || (i.debug("data timeout triggered"),
                    M(new W(e,E.current)))
                }
                ), e)
            }
            ), [i, M]);
            n.useEffect((()=>{
                var e;
                if (m || void 0 !== P.current)
                    return;
                const t = (0,
                l.$s)(!(null === C || void 0 === C || null === (e = C.data) || void 0 === e || !e.userExpected));
                i.debug(`user timeout started for ${t}ms`),
                P.current = window.setTimeout((()=>{
                    if (!L.current) {
                        if (i.debug("user timeout triggered"),
                        "playing" === G.current.state)
                            return i.debug("waiting for preroll to finish before showing user timeout popup"),
                            void (Z.current = "userTimeoutPopupWaitForPreroll");
                        Z.current = "userTimeoutPopup",
                        U(!0)
                    }
                }
                ), t)
            }
            ), [C, i, m]),
            n.useEffect((()=>{
                G.current = b,
                "userTimeoutPopupWaitForPreroll" === Z.current && "playing" !== b.state && (i.debug("preroll finished, showing user timeout popup"),
                Z.current = "userTimeoutPopup",
                U(!0))
            }
            ), [b, i]),
            n.useEffect((()=>{
                L.current = m
            }
            ), [m]),
            n.useEffect((()=>{
                r && r().catch((e=>{
                    M(e)
                }
                ))
            }
            ), [r, M]),
            n.useEffect((()=>{
                const e = async e=>{
                    i.debug("has user: "),
                    F();
                    try {
                        const n = await (async()=>{
                            var e;
                            E.current = "waitingForGameDataUrlFromUP";
                            const t = await g.n.Instance.getGameData();
                            if (t.errors || !t.resultData)
                                throw new g.J(t.errors);
                            if (null === (e = t.resultData.gameData) || void 0 === e || !e.dataUrl)
                                return {
                                    result: "empty"
                                };
                            E.current = "fetchingGameDataFromSignedUrl";
                            const a = await (0,
                            l.vz)(t.resultData.gameData.dataUrl);
                            return "empty" === a.result ? {
                                result: "empty"
                            } : "aborted" === a.result ? {
                                result: "aborted"
                            } : {
                                result: "ok",
                                gameData: {
                                    data: a.gameData,
                                    metadata: t.resultData.gameData.metadata,
                                    version: t.resultData.gameData.version
                                }
                            }
                        }
                        )();
                        if ("aborted" === n.result || "failed" === Z.current)
                            return;
                        if (n.gameData) {
                            if (e)
                                return u(!0),
                                R(!0),
                                Z.current = "reloadPopup",
                                void (T.current = n.gameData);
                            E.current = "installing-gameData",
                            await t(n.gameData)
                        } else
                            a();
                        E.current = "resolved",
                        Z.current = "resolvedGameData",
                        o("resolvedGameData"),
                        k.current = !0,
                        window.clearTimeout(j.current)
                    } catch (n) {
                        M(n)
                    }
                }
                ;
                if (m)
                    switch (N && U(!1),
                    Z.current) {
                    case "resolvedGameData":
                    case "resolvingGameData":
                    case "failed":
                        break;
                    case "noUser":
                        if (h) {
                            const t = "NOT_STARTED" !== c;
                            Z.current = "resolvingGameData",
                            e(t)
                        }
                        break;
                    case "userTimeoutPopup":
                    case "initial":
                        h ? (Z.current = "resolvingGameData",
                        e(!1)) : (Z.current = "noUser",
                        o("noUser"),
                        k.current = !0,
                        window.clearTimeout(j.current))
                    }
            }
            ), [m, h, a, t, c, u, i, o, M, F, U, N]);
            const O = ()=>{
                window.location.reload()
            }
            ;
            return (0,
            I.jsxs)(I.Fragment, {
                children: [A && (0,
                I.jsx)(B, {
                    onReload: O
                }), N && (0,
                I.jsx)(_, {
                    onReload: O,
                    onContinue: ()=>{
                        U(!1),
                        M()
                    }
                })]
            })
        }
        ;
        let J = !1
          , Q = null
          , Y = [];
        const X = e=>{
            var t, a;
            let {type: n, data: s} = e;
            null === (t = Q) || void 0 === t || null === (a = t.contentWindow) || void 0 === a || a.postMessage({
                type: n,
                data: s
            }, "*")
        }
          , ee = (e,t)=>{
            J ? X({
                type: e,
                data: t
            }) : Y.push({
                type: e,
                data: t
            })
        }
        ;
        const te = class {
            constructor(e) {
                this.onBroadCastDisable = void 0,
                this.state = "inactive",
                this.broadcastChannel = void 0,
                this.onBroadcastMessage = e=>{
                    if ("inactive" === this.state)
                        return;
                    const {key: t} = e.data;
                    if ("joined" === t)
                        this.disableState()
                }
                ,
                this.disableState = ()=>{
                    "disabled" !== this.state && (this.state = "disabled",
                    this.onBroadCastDisable())
                }
                ,
                this.onBroadCastDisable = e;
                const t = `broadcast_channel_gf_${(0,
                s.NI)().gameSlug}`;
                this.broadcastChannel = new BroadcastChannel(t),
                this.broadcastChannel.onmessage = this.onBroadcastMessage
            }
            sendJoinedMessage() {
                this.state = "enabled";
                this.broadcastChannel.postMessage({
                    key: "joined",
                    keyData: {}
                })
            }
        }
          , ae = n.memo((e=>(0,
        I.jsxs)(b.Z, {
            ...e,
            width: "192",
            height: "70",
            viewBox: "0 0 192 70",
            children: [(0,
            I.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M55.4166 17.5001H14.5833C12.9725 17.5001 11.6666 18.8059 11.6666 20.4167V49.5834C11.6666 51.1942 12.9725 52.5001 14.5833 52.5001H55.4166C57.0275 52.5001 58.3333 51.1942 58.3333 49.5834V20.4167C58.3333 18.8059 57.0275 17.5001 55.4166 17.5001ZM14.5833 11.6667C9.75082 11.6667 5.83331 15.5843 5.83331 20.4167V49.5834C5.83331 54.4159 9.75082 58.3334 14.5833 58.3334H55.4166C60.2491 58.3334 64.1666 54.4159 64.1666 49.5834V20.4167C64.1666 15.5843 60.2491 11.6667 55.4166 11.6667H14.5833Z",
                fill: "white"
            }), (0,
            I.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.5 26.2499C17.5 24.6391 18.8058 23.3333 20.4167 23.3333H43.75C45.3608 23.3333 46.6667 24.6391 46.6667 26.2499V29.1666C46.6667 30.7774 45.3608 32.0833 43.75 32.0833H20.4167C18.8058 32.0833 17.5 30.7774 17.5 29.1666V26.2499Z",
                fill: "white"
            }), (0,
            I.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M106.884 27.8661C107.372 28.3543 107.372 29.1457 106.884 29.6339L101.884 34.6339C101.396 35.122 100.604 35.122 100.116 34.6339C99.628 34.1457 99.628 33.3543 100.116 32.8661L102.982 30L91 30C90.3096 30 89.75 29.4404 89.75 28.75C89.75 28.0596 90.3096 27.5 91 27.5L102.982 27.5L100.116 24.6339C99.628 24.1457 99.628 23.3543 100.116 22.8661C100.604 22.378 101.396 22.378 101.884 22.8661L106.884 27.8661ZM89.0178 40L101 40C101.69 40 102.25 40.5596 102.25 41.25C102.25 41.9404 101.69 42.5 101 42.5L89.0178 42.5L91.8839 45.3661C92.372 45.8543 92.372 46.6457 91.8839 47.1339C91.3957 47.622 90.6043 47.622 90.1161 47.1339L85.1161 42.1339C84.628 41.6457 84.628 40.8543 85.1161 40.3661L90.1161 35.3661C90.6043 34.878 91.3957 34.878 91.8839 35.3661C92.372 35.8543 92.372 36.6457 91.8839 37.1339L89.0178 40Z",
                fill: "#E70D5C"
            }), (0,
            I.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M177.417 17.5001H136.583C134.973 17.5001 133.667 18.8059 133.667 20.4167V49.5834C133.667 51.1942 134.973 52.5001 136.583 52.5001H177.417C179.028 52.5001 180.333 51.1942 180.333 49.5834V20.4167C180.333 18.8059 179.028 17.5001 177.417 17.5001ZM136.583 11.6667C131.751 11.6667 127.833 15.5843 127.833 20.4167V49.5834C127.833 54.4159 131.751 58.3334 136.583 58.3334H177.417C182.249 58.3334 186.167 54.4159 186.167 49.5834V20.4167C186.167 15.5843 182.249 11.6667 177.417 11.6667H136.583Z",
                fill: "white"
            }), (0,
            I.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M139.5 26.2499C139.5 24.6391 140.806 23.3333 142.417 23.3333H165.75C167.361 23.3333 168.667 24.6391 168.667 26.2499V29.1666C168.667 30.7774 167.361 32.0833 165.75 32.0833H142.417C140.806 32.0833 139.5 30.7774 139.5 29.1666V26.2499Z",
                fill: "white"
            })]
        })))
          , ne = e=>{
            let {onReload: t, onHomepage: a} = e;
            return (0,
            I.jsxs)(I.Fragment, {
                children: [(0,
                I.jsx)(T, {}), (0,
                I.jsx)(k, {
                    onClick: t,
                    children: (0,
                    I.jsxs)(G, {
                        onClick: e=>{
                            e.stopPropagation(),
                            e.preventDefault()
                        }
                        ,
                        children: [(0,
                        I.jsx)(ae, {
                            sx: {
                                width: 192,
                                height: 70
                            }
                        }), (0,
                        I.jsx)(R, {
                            children: (0,
                            I.jsx)(H.Z, {
                                id: "aps.newTab.title"
                            })
                        }), (0,
                        I.jsx)(N, {
                            children: (0,
                            I.jsx)(H.Z, {
                                id: "aps.newTab.text",
                                values: {
                                    secondaryButton: (0,
                                    I.jsx)(M, {
                                        children: (0,
                                        I.jsx)(H.Z, {
                                            id: "aps.newTab.secondaryButton"
                                        })
                                    })
                                }
                            })
                        }), (0,
                        I.jsxs)(O, {
                            children: [(0,
                            I.jsx)(F, {
                                onClick: t,
                                variant: "outlined",
                                color: "white",
                                children: (0,
                                I.jsx)(H.Z, {
                                    id: "aps.newTab.secondaryButton"
                                })
                            }), (0,
                            I.jsx)(F, {
                                onClick: a,
                                variant: "contained",
                                color: "purple",
                                children: (0,
                                I.jsx)(H.Z, {
                                    id: "aps.newTab.primaryButton"
                                })
                            })]
                        })]
                    })
                })]
            })
        }
          , se = e=>{
            let {children: t} = e;
            const [a,s] = n.useState(!1)
              , {setIsGameDisabled: r} = n.useContext(p.F)
              , o = n.useRef(null);
            n.useEffect((()=>{
                o.current = new te((()=>{
                    r(!0),
                    s(!0),
                    u.Z.Instance.setState("disabled")
                }
                )),
                o.current.sendJoinedMessage()
            }
            ), [r]);
            const i = ()=>{
                window.location.reload()
            }
              , d = ()=>{
                S.Z.redirectToHomepage()
            }
            ;
            return a ? (0,
            I.jsx)(ne, {
                onReload: i,
                onHomepage: d
            }) : (0,
            I.jsx)(I.Fragment, {
                children: t
            })
        }
          , re = ()=>(n.useEffect((()=>{
            const e = async e=>{
                try {
                    const {type: t} = e.data;
                    switch (t) {
                    case "replaceGameData":
                        await g.n.Instance.throttledReplaceGameData(e.data.data);
                        break;
                    case "clearGameData":
                        await g.n.Instance.throttledClearGameData(e.data.data)
                    }
                } catch (t) {
                    console.error("message error: ", t)
                }
            }
            ;
            return window.addEventListener("message", e),
            ()=>{
                window.removeEventListener("message", e)
            }
        }
        ), []),
        null);
        class oe extends n.PureComponent {
            constructor(e) {
                super(e),
                this.context = void 0,
                this.logger = (0,
                m.fq)((0,
                l.Qg)()).withPrefix("[APS-Iframe]"),
                this.processAPSInterjectorGameDataInitMessage = async e=>{
                    const {type: t} = e.data;
                    "replaceInitGameData" === t && await g.n.Instance.throttledReplaceGameData(e.data.data)
                }
                ,
                this.loadApsInterjector = ()=>(async e=>new Promise(((t,a)=>{
                    const n = document.createElement("iframe");
                    n.src = (0,
                    l.z6)((0,
                    s.NI)().gameSlug, e, (0,
                    l.VB)()),
                    n.style.display = "none",
                    n.onload = ()=>{
                        J = !0,
                        Y.length > 0 && (Y.forEach(X),
                        Y = []),
                        t()
                    }
                    ,
                    n.onerror = e=>{
                        a(new y("APSInterjector failed to load"))
                    }
                    ,
                    document.body.appendChild(n),
                    Q = n
                }
                )))(this.props.loader),
                this.handleStateChange = e=>{
                    var t, a, n;
                    switch (e) {
                    case "failed":
                        this.setState({
                            userStatus: "failed"
                        }),
                        null === (t = u.Z.Instance.getDeferred()) || void 0 === t || t.resolve();
                        break;
                    case "noUser":
                        this.logger.debug("has no user: "),
                        this.setState({
                            userStatus: "none"
                        }),
                        null === (a = u.Z.Instance.getDeferred()) || void 0 === a || a.resolve();
                        break;
                    case "resolvedGameData":
                        this.setState({
                            userStatus: "normal"
                        }),
                        u.Z.Instance.gameDataInit(),
                        null === (n = u.Z.Instance.getDeferred()) || void 0 === n || n.resolve()
                    }
                }
                ,
                this.handleEmptyGameData = ()=>{
                    ee("requestGameDataResponse")
                }
                ,
                this.handleGameData = async e=>{
                    const t = (0,
                    i.Z)(e.metadata.updatedAt, "yyyy-MM-dd HH:mm:ss", new Date)
                      , a = (0,
                    r.Z)((0,
                    o.Z)(t, -t.getTimezoneOffset()), "T")
                      , n = {
                        ...e,
                        metadata: {
                            ...e.metadata,
                            updatedAtTz: a
                        }
                    };
                    return ee("requestGameDataResponse", n),
                    new Promise((e=>{
                        const t = a=>{
                            const {type: n} = a.data;
                            "loadGame" === n && (window.removeEventListener("message", t),
                            e())
                        }
                        ;
                        window.addEventListener("message", t)
                    }
                    ))
                }
                ,
                this.onPreloadGame = async()=>{
                    const e = (0,
                    c.PQ)();
                    u.Z.Instance.setDeferred(e),
                    await e.promise
                }
                ,
                this.logger.debug(`enabled version ${l.bs}`),
                this.state = {
                    userStatus: "pending"
                }
            }
            componentDidMount() {
                u.Z.Instance.setType("IFRAME"),
                this.onPreloadGame(),
                window.addEventListener("message", this.processAPSInterjectorGameDataInitMessage)
            }
            componentWillUnmount() {
                window.removeEventListener("message", this.processAPSInterjectorGameDataInitMessage)
            }
            render() {
                const {userStatus: e} = this.state
                  , t = "NOT_STARTED" !== this.props.gameLoadStatus;
                return (0,
                I.jsxs)(I.Fragment, {
                    children: [(0,
                    I.jsx)(q, {
                        handleEmptyGameData: this.handleEmptyGameData,
                        handleGameData: this.handleGameData,
                        handleStateChange: this.handleStateChange,
                        loadApsInterjector: this.loadApsInterjector,
                        logger: this.logger
                    }), "normal" === e && t && (0,
                    I.jsx)(se, {
                        children: (0,
                        I.jsx)(re, {})
                    })]
                })
            }
        }
        oe.contextType = d.NL;
        const ie = (0,
        h.T)((0,
        h.q)((0,
        f.xf)(oe)));
        var de = a(52012);
        const ce = ()=>(n.useEffect((()=>{
            let e = window.setInterval((async()=>{
                g.n.Instance.syncUnityData(!0)
            }
            ), (0,
            de.getSyncTimerMs)());
            return ()=>{
                window.clearInterval(e)
            }
        }
        ), []),
        null)
          , le = e=>{
            let {logger: t} = e;
            const a = n.useRef(!1)
              , s = n.useRef(!1)
              , r = n.useRef(0);
            return n.useEffect((()=>{
                const e = ()=>{
                    s.current ? a.current = !0 : (s.current = !0,
                    a.current = !1,
                    g.n.Instance.syncUnityData(!0),
                    r.current = window.setTimeout((()=>{
                        s.current = !1,
                        a.current && e()
                    }
                    ), (0,
                    l.VB)()))
                }
                  , n = async n=>{
                    try {
                        const {type: a} = n.data;
                        if ("syncUnityGameData" === a)
                            t.debug("syncUnityGameData requested"),
                            e()
                    } catch (r) {
                        a.current = !1,
                        s.current = !1,
                        t.err(new Error("message err: "), r)
                    }
                }
                ;
                return window.addEventListener("message", n),
                ()=>{
                    window.removeEventListener("message", n),
                    r.current && window.clearTimeout(r.current),
                    a.current = !1,
                    s.current = !1
                }
            }
            ), [t]),
            null
        }
          , ue = e=>{
            let {logger: t} = e;
            return (0,
            I.jsxs)(I.Fragment, {
                children: [(0,
                I.jsx)(ce, {}), (0,
                I.jsx)(le, {
                    logger: t
                })]
            })
        }
        ;
        class me extends n.PureComponent {
            constructor(e) {
                super(e),
                this.context = void 0,
                this.logger = (0,
                m.fq)((0,
                l.Qg)()).withPrefix("[APS-Unity]"),
                this.handleStateChange = e=>{
                    var t, a, n;
                    switch (e) {
                    case "failed":
                        this.setState({
                            userStatus: "failed"
                        }),
                        null === (t = u.Z.Instance.getDeferred()) || void 0 === t || t.resolve();
                        break;
                    case "noUser":
                        this.setState({
                            userStatus: "none"
                        }),
                        this.logger.debug("has no user: "),
                        null === (a = u.Z.Instance.getDeferred()) || void 0 === a || a.resolve();
                        break;
                    case "resolvedGameData":
                        u.Z.Instance.gameDataInit(),
                        null === (n = u.Z.Instance.getDeferred()) || void 0 === n || n.resolve(),
                        this.setState({
                            userStatus: "normal"
                        })
                    }
                }
                ,
                this.handleEmptyGameData = ()=>{
                    g.n.Instance.syncUnityData(!1)
                }
                ,
                this.handleGameData = async e=>{
                    const t = (0,
                    i.Z)(e.metadata.updatedAt, "yyyy-MM-dd HH:mm:ss", new Date)
                      , a = parseInt((0,
                    r.Z)((0,
                    o.Z)(t, -t.getTimezoneOffset()), "T"));
                    let n;
                    try {
                        n = await (0,
                        de.getExistingPlayerPrefUpdatedAtTz)()
                    } catch (s) {
                        this.logger.debug("Existing data err: ", s)
                    }
                    return n ? n === a ? (this.logger.debug("same"),
                    void (0,
                    de.setSyncTimeOfIndexDb)(n)) : n > a && n - a < (0,
                    de.getSyncTimerMs)() ? (this.logger.debug("choosing LS", n, a),
                    void g.n.Instance.syncUnityData(!1)) : (this.logger.debug("choosing API"),
                    void await (0,
                    de.setAPIDataToIDB)(e, a)) : (this.logger.debug("no local"),
                    void await (0,
                    de.setAPIDataToIDB)(e, a))
                }
                ,
                this.onPreloadGame = async()=>{
                    const e = (0,
                    c.PQ)();
                    u.Z.Instance.setDeferred(e),
                    await e.promise
                }
                ,
                u.Z.Instance.setType("UNITY"),
                this.logger.debug("enabled"),
                this.state = {
                    userStatus: "pending"
                }
            }
            componentDidMount() {
                (0,
                l.VO)("Loading Unity loader"),
                this.onPreloadGame()
            }
            render() {
                const {userStatus: e} = this.state
                  , t = "NOT_STARTED" !== this.props.gameLoadStatus;
                return (0,
                I.jsxs)(I.Fragment, {
                    children: [(0,
                    I.jsx)(q, {
                        handleEmptyGameData: this.handleEmptyGameData,
                        handleGameData: this.handleGameData,
                        handleStateChange: this.handleStateChange,
                        logger: this.logger
                    }), "normal" === e && t && (0,
                    I.jsx)(se, {
                        children: (0,
                        I.jsx)(ue, {
                            logger: this.logger
                        })
                    })]
                })
            }
        }
        me.contextType = d.NL;
        const he = (0,
        h.T)((0,
        h.q)((0,
        f.xf)(me)))
          , ge = ()=>(n.useEffect((()=>{
            const e = e=>{
                var t;
                try {
                    const {type: a} = e.data;
                    if ("saveSdkGameData" === a)
                        (async e=>{
                            try {
                                await g.n.Instance.throttledSaveSdkGameData(e)
                            } catch (t) {
                                S.Z.sendSDKError({
                                    errorName: "gf-save-fail",
                                    module: "data",
                                    specificValues: {}
                                })
                            }
                        }
                        )(null === (t = e.data) || void 0 === t ? void 0 : t.data)
                } catch (a) {
                    console.error(a)
                }
            }
            ;
            return window.addEventListener("message", e),
            ()=>{
                window.removeEventListener("message", e)
            }
        }
        ), []),
        null)
          , fe = (0,
        m.fq)((0,
        l.Qg)()).withPrefix("[APS-SDKPS]")
          , pe = ()=>{
            const {gameLoadStatus: e} = n.useContext(w.r)
              , t = "NOT_STARTED" !== e;
            return n.useEffect((()=>{
                const e = {
                    status: "loading"
                };
                let t = [];
                const a = async t=>{
                    try {
                        const a = await fetch(t, {
                            signal: AbortSignal.timeout(1e4)
                        });
                        if (!a.ok)
                            throw new Error("Response not ok");
                        const s = await a.json();
                        e.data = s,
                        e.hasData = !0,
                        e.status = "loaded",
                        fe.debug("Loaded SDKPS data", s)
                    } catch (a) {
                        S.Z.sendSDKError({
                            errorName: "gf-preload-data-fail",
                            module: "data",
                            specificValues: {}
                        }),
                        fe.error("Failed to load SDKPS data JSON", a),
                        e.status = "failed"
                    } finally {
                        n()
                    }
                }
                  , n = ()=>{
                    t.forEach((e=>s(e))),
                    t = []
                }
                  , s = async a=>{
                    "loaded" === e.status || "failed" === e.status ? (a.postMessage({
                        type: "sdkGameDataResponseNew",
                        data: e
                    }, "*"),
                    fe.debug("Sending game data to SDK", e)) : t.push(a)
                }
                  , r = e=>{
                    try {
                        const {type: t} = e.data;
                        if ("requestSdkGameDataNew" === t)
                            s(e.source)
                    } catch (t) {
                        fe.error("Failed to handle requestSdkGameDataNew", t)
                    }
                }
                ;
                return (async()=>{
                    try {
                        const t = await g.n.Instance.fetchSdkGameData();
                        fe.debug("Loaded SDKPS data URL", t),
                        null !== t && void 0 !== t && t.hasData && t.url ? a(t.url) : (e.hasData = !1,
                        e.status = "loaded",
                        n())
                    } catch (t) {
                        S.Z.sendSDKError({
                            errorName: "gf-preload-url-fail",
                            module: "data",
                            specificValues: {}
                        }),
                        fe.error("Failed to load SDKPS data URL", t),
                        e.status = "failed",
                        n()
                    }
                }
                )(),
                window.addEventListener("message", r),
                ()=>{
                    window.removeEventListener("message", r)
                }
            }
            ), []),
            t ? (0,
            I.jsx)(I.Fragment, {
                children: (0,
                I.jsx)(se, {
                    children: (0,
                    I.jsx)(ge, {})
                })
            }) : null
        }
          , we = ()=>{
            const {hasUserLoaded: e} = n.useContext(d.NL)
              , {gameLoadStatus: t} = n.useContext(w.r);
            if ("NOT_STARTED" === t && !e)
                return null;
            const a = (0,
            s.NI)().loader;
            return "sdkps" === (0,
            s.NI)().aps && e ? (0,
            I.jsx)(pe, {}) : "iframe" === a && (0,
            l.x3)() ? (0,
            I.jsx)(ie, {
                loader: "iframe"
            }) : "ruffle" === a && (0,
            l.o5)() ? (0,
            I.jsx)(ie, {
                loader: "ruffle"
            }) : s.Fw.includes(a) && (0,
            l.v9)() ? (0,
            I.jsx)(he, {}) : null
        }
    }
    ,
    13751: (e,t,a)=>{
        a.d(t, {
            $s: ()=>h,
            Qg: ()=>P,
            VB: ()=>p,
            VO: ()=>j,
            ZZ: ()=>Z,
            bs: ()=>g,
            i2: ()=>m,
            o5: ()=>y,
            v9: ()=>D,
            vz: ()=>S,
            x3: ()=>x,
            z6: ()=>f,
            zg: ()=>b
        });
        var n = a(90831)
          , s = a(74082)
          , r = a(19314)
          , o = a(46604)
          , i = a(22870)
          , d = a(74309);
        const c = window.location.search.indexOf("aps_debug=true") >= 0
          , l = new i.Yd(P()).withPrefix("[APS]")
          , u = "game-files.crazygames.com"
          , m = ()=>3e4
          , h = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return e ? 1e4 : 7e3
        }
          , g = "1.4.11";
        function f(e, t, a) {
            const s = function(e) {
                const t = (0,
                n.NI)();
                if ("ruffle" === e)
                    return `https://${t.gameSlug}.${u}`;
                {
                    const e = t.loaderOptions.url;
                    return new URL(e).origin
                }
            }(t);
            let r = `${`${s}/gameframe/up-aps/aps-script-${g}.html`}?game_slug=${e}`;
            return a && (r += `&sync_timer_ms=${a}`),
            c && (r += "&debug=true"),
            r
        }
        function p() {
            const {apsSyncTimerMs: e, categoryEnSlug: t} = (0,
            n.NI)();
            return e || ("clicker" === t ? 3e4 : 1e3)
        }
        function w(e) {
            const t = ["files.crazygames.com", "files.dev-crazygames.be", u].some((t=>e.includes(t)));
            return !!(v() && s.m.Instance.hasWorkingLocalStorage() && t)
        }
        function v() {
            const e = (0,
            n.NI)()
              , t = e.aps;
            return !!((!t || "yes" === t) && !e.forceDisableAPS && !(0,
            r.U)() && !o.Z.isEmbeddedExternally())
        }
        function x() {
            return w((0,
            n.NI)().loaderOptions.url)
        }
        function y() {
            return w((0,
            n.NI)().loaderOptions.swfLocation)
        }
        function D() {
            const e = window.hasOwnProperty("indexedDB");
            return !!(v() && e)
        }
        async function S(e) {
            let t = null;
            for (let n = 0; n < 3; n++)
                try {
                    return await I(e)
                } catch (a) {
                    t = a
                }
            throw t
        }
        let C = null;
        function b() {
            var e;
            null === (e = C) || void 0 === e || e.abort()
        }
        async function I(e) {
            try {
                C = new AbortController;
                const a = await fetch(e, {
                    method: "GET",
                    signal: C.signal
                })
                  , n = await a.text();
                if (!a.ok) {
                    if (n && 404 === a.status) {
                        var t;
                        const e = (new window.DOMParser).parseFromString(n, "application/xml");
                        if ("NoSuchKey" === (null === (t = e.getElementsByTagName("Code")[0]) || void 0 === t ? void 0 : t.textContent))
                            return {
                                result: "empty"
                            }
                    }
                    throw new d.k(n,!0,a.status)
                }
                return {
                    gameData: n,
                    result: "ok"
                }
            } catch (a) {
                if ("AbortError" === (null === a || void 0 === a ? void 0 : a.name))
                    return {
                        result: "aborted"
                    };
                const e = (null === a || void 0 === a ? void 0 : a.message) || "unknown error";
                throw new d.k(e,!1)
            }
        }
        function j(e) {
            P() && l.debug(`${e}`)
        }
        function P() {
            return c
        }
        function Z(e, t) {
            return t ? "firebase-timeout" : "waitingForGameDataUrlFromUP" === e ? "up-timeout" : "fetchingGameDataFromSignedUrl" === e ? "fetch-timeout" : "timeout"
        }
    }
    ,
    52012: (e,t,a)=>{
        a.r(t),
        a.d(t, {
            getExistingIndexedData: ()=>D,
            getExistingPlayerPrefUpdatedAtTz: ()=>y,
            getLastSyncTimeOfIDBTz: ()=>I,
            getPlayedTimeInLS: ()=>C,
            getSyncTimerMs: ()=>g,
            savePlayedTimeInLS: ()=>S,
            setAPIDataToIDB: ()=>P,
            setSyncTimeOfIndexDb: ()=>b
        });
        var n = a(41989)
          , s = a.n(n)
          , r = a(94845)
          , o = a(90831)
          , i = a(22870)
          , d = a(74082)
          , c = a(2022);
        const l = "/idbfs"
          , u = "FILE_DATA";
        let m;
        const h = e=>+new Date(e)
          , g = ()=>{
            const {apsSyncTimerMs: e} = (0,
            o.NI)();
            return e || 3e4
        }
          , f = ()=>window.indexedDB
          , p = ()=>{
            const e = window.location.origin + window.location.pathname
              , t = e.substring(0, e.lastIndexOf("/"));
            return s()(t)
        }
          , w = ()=>{
            const e = p()
              , t = `/idbfs/${e}/PlayerPrefs`;
            const a = (0,
            o.NI)().loaderOptions
              , n = a.unitySaveFileNames ? a.unitySaveFileNames[0] : void 0
              , s = [`/idbfs/${e}`, t];
            return n && s.push(`/idbfs/${e}/${n}`),
            s
        }
          , v = e=>{
            const t = e.target.result
              , a = e.target.transaction;
            let n;
            n = t.objectStoreNames.contains(u) ? a.objectStore(u) : t.createObjectStore(u),
            n.indexNames.contains("timestamp") || n.createIndex("timestamp", "timestamp", {
                unique: !1
            })
        }
          , x = (e,t)=>new Promise(((a,n)=>{
            e.transaction(u).objectStore(u).get(t).onsuccess = e=>{
                try {
                    const n = e.target.result;
                    if (!n)
                        return a(null);
                    if (!n.timestamp)
                        return console.error("[APS-U] IDB data incomplete: " + t + n),
                        a(null);
                    const s = new Date(n.timestamp).setMilliseconds(0);
                    a(s)
                } catch (n) {
                    i.kg.debug("[APS-U] Error:", n)
                }
            }
        }
        ))
          , y = ()=>{
            const e = f().open(l, 21);
            return new Promise(((t,a)=>{
                e.onupgradeneeded = v,
                e.onsuccess = async()=>{
                    const a = e.result;
                    a.objectStoreNames.contains(u) || a.createObjectStore(u);
                    const n = w();
                    let s = await x(a, n[1]);
                    s || (s = await x(a, n[0])),
                    t(s)
                }
                ,
                e.onerror = e=>{
                    i.kg.debug("[APS-U] Error:", e),
                    a()
                }
            }
            ))
        }
          , D = ()=>{
            const e = f().open(l, 21);
            return new Promise(((t,a)=>{
                e.onupgradeneeded = v,
                e.onsuccess = ()=>{
                    const n = e.result
                      , s = w()
                      , o = n.transaction(u)
                      , i = o.objectStore(u)
                      , d = {};
                    let c;
                    s.forEach((e=>{
                        i.get(e).onsuccess = t=>{
                            const n = t.target.result;
                            if (n) {
                                var s;
                                n.timestamp || a("[APS-U] IDB data incomplete: " + e + n);
                                const t = new Date(n.timestamp);
                                t.getTime() > ((null === (s = c) || void 0 === s ? void 0 : s.getTime()) || 0) && (c = t);
                                const i = {
                                    ...n,
                                    timestamp: h(n.timestamp)
                                };
                                n.contents && (i.contents = (o = n.contents,
                                (0,
                                r.hd)(o))),
                                d[e] = i
                            }
                            var o
                        }
                    }
                    )),
                    o.oncomplete = ()=>{
                        Object.keys(d).length > 0 ? t({
                            data: d,
                            updatedAtTz: h(c)
                        }) : t({
                            data: null
                        })
                    }
                    ,
                    o.onerror = e=>{
                        a(e)
                    }
                }
            }
            ))
        }
          , S = e=>{
            const {gameSlug: t} = (0,
            o.NI)();
            d.m.Instance.setItem(`_czy_${t}_pt`, `${e}`)
        }
          , C = ()=>{
            const {gameSlug: e} = (0,
            o.NI)()
              , t = d.m.Instance.getItem(`_czy_${e}_pt`) || "0";
            return JSON.parse(t)
        }
          , b = e=>{
            m = e
        }
          , I = ()=>m
          , j = e=>{
            const t = f().open(l, 21);
            return new Promise(((a,n)=>{
                t.onupgradeneeded = v,
                t.onsuccess = ()=>{
                    const s = t.result.transaction(u, "readwrite")
                      , o = p();
                    e && Object.entries(e).forEach((t=>{
                        let[a,i] = t;
                        const d = a.split("/")[3]
                          , c = `/idbfs/${o}` + (d ? "/" + d : "");
                        i.timestamp || n("[APS-U] API data incomplete: " + e);
                        const l = {
                            ...i,
                            timestamp: new Date(i.timestamp)
                        };
                        var m;
                        l.contents && (l.contents = (m = l.contents,
                        new Uint8Array((0,
                        r.fJ)(m)))),
                        s.objectStore(u).put(l, c)
                    }
                    )),
                    s.oncomplete = ()=>{
                        a(null)
                    }
                    ,
                    s.onerror = ()=>{
                        n(null)
                    }
                }
            }
            ))
        }
          , P = async(e,t)=>{
            try {
                const a = JSON.parse(e.data);
                await j(a),
                m = t
            } catch (a) {
                throw new c.K("setAPIDataToIDB",a)
            }
        }
    }
    ,
    74309: (e,t,a)=>{
        a.d(t, {
            k: ()=>n
        });
        class n extends Error {
            constructor(e, t, a) {
                super(`Fetch error:${a}`),
                this.originalError = void 0,
                this.fetchResolved = void 0,
                this.statusCode = void 0,
                this.originalError = e.slice(0, 100),
                this.fetchResolved = t,
                this.statusCode = a,
                Object.setPrototypeOf(this, n.prototype)
            }
        }
    }
    ,
    2022: (e,t,a)=>{
        a.d(t, {
            K: ()=>n
        });
        class n extends Error {
            constructor(e, t) {
                super(`IdbError:${e}`),
                this.originalError = void 0,
                this.source = void 0,
                this.originalError = t,
                this.source = e,
                Object.setPrototypeOf(this, n.prototype)
            }
        }
    }
}]);
