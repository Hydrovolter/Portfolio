"use strict";
(self.webpackChunkcrazygames_gameframe = self.webpackChunkcrazygames_gameframe || []).push([[3358], {
    86604: (t,e,r)=>{
        r.d(e, {
            Z: ()=>d
        });
        r(47313);
        var s = r(9172)
          , i = r(99187)
          , n = r(46604)
          , a = r(69121)
          , o = r(40889)
          , c = r(46417);
        const d = t=>{
            let {warning: e, close: r, showCrazyLogo: d=!0} = t;
            const {countryCode: h} = (0,
            a.bG)()
              , l = (0,
            a.I)(h) && n.Z.isEmbeddedExternally();
            return (0,
            c.jsxs)(i.Z, {
                showCrazyLogo: d,
                showGDPRNotice: l,
                children: [(0,
                c.jsx)(s.Z, {
                    close: r,
                    warning: e
                }), (0,
                c.jsx)(o.Z, {
                    hasFooter: !1,
                    disableMove: !0
                })]
            })
        }
    }
    ,
    95681: (t,e,r)=>{
        r.d(e, {
            Z: ()=>c
        });
        var s = r(22870)
          , i = r(20505);
        const n = class {
            constructor() {
                this.loadStartedSent = void 0,
                this.firstQuarterSent = void 0,
                this.secondQuarterSent = void 0,
                this.thirdQuarterSent = void 0,
                this.ninetyPercentSent = void 0,
                this.loadFinishedSent = void 0,
                this.ga = void 0,
                this.ga = i.Z.Instance,
                this.loadStartedSent = !1,
                this.firstQuarterSent = !1,
                this.secondQuarterSent = !1,
                this.thirdQuarterSent = !1,
                this.ninetyPercentSent = !1,
                this.loadFinishedSent = !1
            }
            trackLoadStarted() {
                this.loadStartedSent ? s.kg.warn("trackLoadStarted called multiple times") : (this.loadStartedSent = !0,
                this.ga.trackLoadStarted())
            }
            trackProgress(t) {
                !this.firstQuarterSent && t >= .25 && (this.ga.trackFirstQuarterLoaded(),
                this.firstQuarterSent = !0),
                !this.secondQuarterSent && t >= .5 && (this.ga.trackSecondQuarterLoaded(),
                this.secondQuarterSent = !0),
                !this.thirdQuarterSent && t >= .75 && (this.ga.trackThirdQuarterLoaded(),
                this.thirdQuarterSent = !0),
                !this.ninetyPercentSent && t >= .9 && (this.ga.trackNinetyPercentLoaded(),
                this.ninetyPercentSent = !0)
            }
            trackLoadFinished() {
                this.loadStartedSent ? this.loadFinishedSent ? s.kg.warn("trackLoadFinished called multiple times") : (this.loadFinishedSent = !0,
                this.ga.trackLoadFinished()) : s.kg.warn("trackLoadFinished called before trackLoadStart was called")
            }
        }
        ;
        var a = r(96607)
          , o = r(82838);
        const c = class {
            constructor() {
                this.lastReportedProgress = void 0,
                this.currentProgress = 0,
                this.tracker = void 0,
                this.tracker = new n
            }
            reset() {
                this.lastReportedProgress = void 0,
                this.currentProgress = 0,
                this.tracker = new n
            }
            trackLoadStarted() {
                a.Z.trackProgress(0),
                this.lastReportedProgress = 0,
                a.Z.gameStartLoad(),
                (0,
                o.hO)("gameLoadStart"),
                this.tracker.trackLoadStarted()
            }
            trackProgress(t) {
                if (t <= this.currentProgress)
                    return this.currentProgress;
                this.currentProgress = t,
                this.tracker.trackProgress(t);
                const e = Math.floor(10 * t) / 10;
                return 1 !== e && (!this.lastReportedProgress || t > this.lastReportedProgress + .1) && (a.Z.trackProgress(e),
                this.lastReportedProgress = t),
                t
            }
            trackLoadFinished() {
                1 !== this.lastReportedProgress && (this.lastReportedProgress = 1,
                this.tracker.trackLoadFinished(),
                a.Z.trackProgress(1),
                a.Z.loadFinished())
            }
        }
    }
    ,
    80338: (t,e,r)=>{
        r.d(e, {
            Z: ()=>k
        });
        var s = r(47313)
          , i = r(52797)
          , n = r(73477)
          , a = r(49558)
          , o = r(66382)
          , c = r(71235)
          , d = r(5448)
          , h = r(77626)
          , l = r(46417);
        const u = t=>{
            let {stuck: e, onWait: r, onRetry: s} = t;
            return e ? (0,
            l.jsxs)(a.Z, {
                open: !0,
                onClose: r,
                children: [(0,
                l.jsx)(d.Z, {
                    children: (0,
                    l.jsx)(h.Z, {
                        id: "stuck.title"
                    })
                }), (0,
                l.jsx)(c.Z, {
                    children: (0,
                    l.jsxs)(o.Z, {
                        children: [(0,
                        l.jsx)(n.Z, {
                            onClick: r,
                            color: "primary",
                            children: (0,
                            l.jsx)(h.Z, {
                                id: "stuck.waitBtn"
                            })
                        }), (0,
                        l.jsx)(n.Z, {
                            onClick: s,
                            color: "primary",
                            variant: "contained",
                            children: (0,
                            l.jsx)(h.Z, {
                                id: "stuck.retryBtn"
                            })
                        })]
                    })
                })]
            }) : (0,
            l.jsx)(l.Fragment, {})
        }
        ;
        var g, m;
        const p = (null === (g = window.navigator) || void 0 === g || null === (m = g.connection) || void 0 === m ? void 0 : m.downlink) < 3 ? 2e4 : 1e4;
        class C extends s.Component {
            constructor(t) {
                super(t),
                this.timeoutLoop = void 0,
                this.previousProgress = void 0,
                this.loadStuckTimeout = void 0,
                this.handleStuckWait = ()=>{
                    i.GA.Instance.trackStuckWait(),
                    this.setState({
                        stuck: !1
                    })
                }
                ,
                this.handleStuckRetry = ()=>{
                    i.GA.Instance.trackStuckRetry(),
                    this.setState({
                        stuck: !1
                    }),
                    this.previousProgress = 0,
                    this.props.onStuckRetry()
                }
                ,
                this.onStuck = ()=>{
                    console.log("--fx--onStuck--");
                    return;
                    const {progress: t} = this.props;
                    i.GA.Instance.trackStuck(t),
                    this.setState({
                        stuck: !0
                    }),
                    this.loadStuckTimeout *= 3
                }
                ,
                this.state = {
                    stuck: !1
                },
                this.timeoutLoop = null,
                this.previousProgress = 0,
                this.loadStuckTimeout = p
            }
            componentDidMount() {
                this.previousProgress = 0,
                this.checkForBeingStuck()
            }
            componentWillUnmount() {
                this.timeoutLoop && window.clearTimeout(this.timeoutLoop)
            }
            render() {
                const {stuck: t} = this.state;
                return (0,
                l.jsx)(u, {
                    stuck: t,
                    onWait: this.handleStuckWait,
                    onRetry: this.handleStuckRetry
                })
            }
            checkForBeingStuck() {
                let t = (new Date).getTime();
                const e = ()=>{
                    this.props.progress > .5 ? this.timeoutLoop = null : this.timeoutLoop = window.setTimeout((()=>{
                        const {progress: r} = this.props
                          , s = (new Date).getTime()
                          , i = s - t;
                        this.previousProgress !== r ? (this.previousProgress = r,
                        t = s,
                        e()) : i > this.loadStuckTimeout ? (this.onStuck(),
                        e()) : e()
                    }
                    ), 1e3)
                }
                ;
                e()
            }
        }
        const k = C
    }
    ,
    43358: (t,e,r)=>{
        r.r(e),
        r.d(e, {
            default: ()=>b
        });
        var s = r(47313)
          , i = r(18763)
          , n = r(90831)
          , a = r(22870)
          , o = r(50009)
          , c = r(48300)
          , d = r(73411)
          , h = r(86604)
          , l = r(80338)
          , u = r(46504)
          , g = r(23236);
        const m = class {
            constructor(t) {
                this.missingRequirements = void 0,
                this.graphicsAPI = void 0,
                this.graphicsAPI = t.graphicsAPI || [],
                this.missingRequirements = !t.graphicsAPI
            }
            canUseWebGL1() {
                return this.graphicsAPI.indexOf("WebGL 1.0") >= 0
            }
            canUseWebGL2() {
                return this.graphicsAPI.indexOf("WebGL 2.0") >= 0
            }
        }
        ;
        var p = r(25831)
          , C = r(6689)
          , k = r(1316)
          , y = r(20503)
          , S = r(96607)
          , w = r(87308)
          , L = r(1247)
          , f = r(71534)
          , v = r(46417);
        class x extends s.Component {
            constructor(t) {
                super(t),
                this.config = void 0,
                this.progressTracker = void 0,
                this.cacheDisabled = void 0,
                this.options = void 0,
                this.gameInstance = void 0,
                this.disableGame = async()=>{
                    this.gameInstance && this.gameInstance.Quit && this.gameInstance.Quit((()=>{}
                    ))
                }
                ,
                this.restartGame = ()=>{
                    window.location.reload()
                }
                ,
                this.processMessage = t=>{
                    const {type: e} = t.data
                      , r = document.getElementById("#canvas");
                    e === y.p && r && (0,
                    y.a)(r)
                }
                ,
                this.onFullscreenClose = async()=>{
                    await this.props.requestFullscreen(),
                    this.setState({
                        state: "loaded"
                    }),
                    this.props.onLoadFinished()
                }
                ,
                this.onStuckRetry = ()=>{
                    this.setState({
                        state: "loading",
                        progress: 0
                    }),
                    this.progressTracker.reset(),
                    this.cacheDisabled = !0,
                    this.gameInstance && this.gameInstance.Quit ? this.gameInstance.Quit((()=>this.load())) : this.load()
                }
                ,
                this.startLoading = async()=>{
                    this.setState({
                        state: "loading"
                    }),
                    this.progressTracker.trackLoadStarted();
                    try {
                        await C.Z.Instance.waitForAPS()
                    } catch (t) {} finally {
                        await this.load()
                    }
                }
                ,
                this.trackProgress = (t,e)=>{
                    const r = this.progressTracker.trackProgress(e);
                    this.setState({
                        progress: r
                    })
                }
                ,
                this.loadHasFinished = ()=>{
                    const t = (0,
                    w.uo)();
                    this.progressTracker.trackLoadFinished(),
                    S.Z.sendDelayedMemoryUsage(),
                    "REQUIRED" !== this.config.fullscreen || t || this.props.isFullscreen ? (this.setState({
                        state: "loaded"
                    }),
                    this.props.onLoadFinished()) : this.setState({
                        state: "fullscreen"
                    })
                }
                ,
                this.adFinished = ()=>{
                    window.focus()
                }
                ,
                this.onBlur = async()=>{
                    await L.n.Instance.autoSyncUnityData()
                }
                ,
                this.state = {
                    progress: 0,
                    error: null,
                    state: "checking"
                },
                this.config = (0,
                n.NI)(),
                this.progressTracker = new u.Z,
                this.cacheDisabled = !1,
                this.options = this.config.loaderOptions,
                this.gameInstance = null
            }
            async componentDidMount() {
                window.addEventListener("blur", this.onBlur);
                const t = await this.hasLoaderError();
                t ? this.setState({
                    error: t,
                    state: "error"
                }) : (await this.startLoading(),
                (0,
                i.Q)().addAdFinishedListener(this.adFinished),
                window.addEventListener("message", this.processMessage))
            }
            componentWillUnmount() {
                window.removeEventListener("blur", this.onBlur),
                (0,
                i.Q)().removeAdFinishedListener(this.adFinished),
                window.removeEventListener("message", this.processMessage)
            }
            componentDidUpdate(t) {
                !t.isGameDisabled && this.props.isGameDisabled ? this.disableGame() : t.isGameDisabled && !this.props.isGameDisabled && this.restartGame()
            }
            render() {
                return (0,
                v.jsxs)(v.Fragment, {
                    children: [this.renderState(), (0,
                    v.jsx)(k.Z, {})]
                })
            }
            renderState() {
                const {state: t} = this.state;
                switch (t) {
                case "checking":
                    return this.renderChecking();
                case "error":
                    return this.renderError();
                case "loading":
                    return this.renderLoading();
                case "fullscreen":
                    return this.renderFullscreenOverlay();
                case "loaded":
                    return this.renderLoaded();
                default:
                    throw new Error(`[Unity56Loader] unexpected state ${t}`)
                }
            }
            renderChecking() {
                return (0,
                v.jsx)(d.Z, {
                    progress: 0,
                    showProgress: !0
                })
            }
            renderError() {
                const {error: t} = this.state;
                return t ? (0,
                v.jsx)(h.Z, {
                    warning: t
                }) : null
            }
            renderLoading() {
                const {progress: t} = this.state;
                return (0,
                v.jsxs)(v.Fragment, {
                    children: [(0,
                    v.jsx)(d.Z, {
                        progress: t,
                        showProgress: !0
                    }), (0,
                    v.jsx)(l.Z, {
                        progress: t,
                        onStuckRetry: this.onStuckRetry
                    })]
                })
            }
            renderFullscreenOverlay() {
                return (0,
                v.jsx)(h.Z, {
                    warning: "force-fullscreen",
                    close: this.onFullscreenClose
                })
            }
            renderLoaded() {
                return null
            }
            async load() {
                if (this.props.isGameDisabled)
                    return;
                const {moduleJsonUrl: t, unityLoaderUrl: e} = this.options
                  , r = this.cacheDisabled ? {} : {
                    default: "immutable"
                };
                await (0,
                c.ve)(e),
                this.gameInstance = window.UnityLoader.instantiate("game-container", t, {
                    onProgress: this.trackProgress,
                    Module: {
                        errorhandler: (t,e,r)=>!0,
                        cacheControl: r,
                        companyName: "CrazyGames",
                        productName: (0,
                        o.Z)(),
                        onRuntimeInitialized: this.loadHasFinished
                    }
                }),
                (0,
                i.Q)().setUnityInstance(this.gameInstance)
            }
            async hasLoaderError() {
                const t = await this.fetchModuleJson();
                return t.missingRequirements || t.canUseWebGL1() ? this.isWebGLSupported() : t.canUseWebGL2() ? this.isWebGL2Supported() : (a.kg.warn("unknown graphics API", t),
                this.isWebGLSupported())
            }
            isWebGLSupported() {
                return (0,
                g.H)() ? null : "unity-unavailable"
            }
            isWebGL2Supported() {
                return (0,
                g.W)() ? null : "unity-unavailable"
            }
            async fetchModuleJson() {
                try {
                    const t = await fetch(this.options.moduleJsonUrl)
                      , e = await t.json();
                    return new m(e)
                } catch (t) {
                    return a.kg.err(t),
                    new m({})
                }
            }
        }
        const b = (0,
        p.Z)((0,
        f.q)((0,
        f.T)(x)))
    }
    ,
    1316: (t,e,r)=>{
        r.d(e, {
            Z: ()=>g
        });
        var s = r(85541)
          , i = r(47313)
          , n = r(46417);
        const a = t=>(0,
        n.jsxs)(s.Z, {
            ...t,
            viewBox: "0 0 194 218",
            fill: "none",
            children: [(0,
            n.jsxs)("g", {
                clipPath: "url(#clip0_11_913)",
                children: [(0,
                n.jsx)("path", {
                    d: "M187.633 58.3368C187.983 39.5888 186.254 15.3036 176.167 3.815C173.957 1.308 171.003 0 167.545 0C161.659 0 154.285 4.0548 145.073 12.3606C131.726 6.649 115.927 3.8586 96.9562 3.8586C77.9851 3.8586 62.2087 6.649 48.8829 12.3388C39.7146 4.0548 32.3406 0 26.4545 0C23.0192 0 20.0433 1.308 17.8771 3.7932C7.81164 15.2818 6.06113 39.5016 6.41123 58.2278C2.16625 70.2832 0 84.3224 0 99.953C0 134.375 10.0873 160.099 29.9993 176.406C39.3864 184.057 50.6115 189.42 64.0029 192.581L61.2896 193.911H61.224L61.1584 193.976C60.1737 194.5 59.189 194.979 58.2044 195.481C58.0074 195.59 57.8105 195.677 57.5917 195.786C54.5283 197.312 51.3774 198.881 47.9639 200.952L47.0011 201.454L46.6291 201.65L46.279 201.89C44.6379 203.067 43.5439 204.833 43.2375 206.773C42.9312 208.67 43.3907 210.675 44.5285 212.223C45.6882 213.814 47.4825 214.904 49.43 215.166C50.6115 215.34 51.8588 215.558 53.0841 215.755C53.2592 215.776 53.4124 215.82 53.5874 215.842C56.3882 216.3 59.2547 216.757 62.2305 216.997L65.3158 217.346C66.4974 217.477 67.6352 217.586 68.7949 217.629L75.1405 217.978H75.3812C76.4097 218 77.4381 218 78.4446 218C86.6064 218 94.5055 217.411 101.901 216.256C110.632 214.948 119.407 212.506 127.984 208.997C136.561 205.465 144.526 200.931 151.725 195.524C166.276 184.254 177.545 169.386 184.372 152.447C186.735 146.649 188.617 140.392 189.974 133.874C192.621 123.737 193.934 112.314 193.934 99.9748C193.934 84.3878 191.79 70.3922 187.567 58.3586L187.633 58.3368ZM184.307 132.566C183.081 138.604 181.309 144.556 178.989 150.311C172.622 166.138 161.878 180.351 148.224 190.924C141.332 196.113 133.739 200.386 125.774 203.656C117.787 206.926 109.472 209.28 101.004 210.566C93.5209 211.743 85.9718 212.245 78.4665 212.245C77.4818 212.245 76.4972 212.245 75.5125 212.223L69.1669 211.874C68.0947 211.809 67.0444 211.722 65.9941 211.613L62.8213 211.264C59.9111 211.024 57.0447 210.544 54.1782 210.087C52.8872 209.869 51.5743 209.651 50.2833 209.476C49.4518 209.345 48.8829 208.561 49.0361 207.732C49.1017 207.296 49.3862 206.904 49.7144 206.664L50.8522 206.075C54.1344 204.07 57.2416 202.522 60.2831 201.018C61.4866 200.407 62.6901 199.819 63.8716 199.208L68.1385 197.137L75.6438 193.475C77.3068 192.625 78.926 191.84 80.5233 191.055C81.4205 190.619 82.2957 190.205 83.1491 189.769C62.4275 188.025 46.1696 182.161 33.7192 171.98C15.2294 156.851 5.84232 132.675 5.84232 100.04C5.84232 84.4968 8.00857 70.9154 12.2754 59.2742C11.9253 44.3848 12.8225 18.53 22.2752 7.7172C23.3912 6.4528 24.8134 5.9078 26.4545 5.9078C32.5157 5.9078 41.487 13.3198 47.767 19.3584C60.9833 12.9492 77.2411 9.7882 96.9781 9.7882C116.715 9.7882 132.995 12.9492 146.211 19.3802C152.491 13.3416 161.462 5.9296 167.545 5.9296V5.8642C169.208 5.8642 170.631 6.4092 171.747 7.6736C181.221 18.4864 182.097 44.4284 181.746 59.3178C185.991 70.9372 188.136 84.5186 188.136 99.9966C188.136 112.03 186.845 122.887 184.328 132.588L184.307 132.566Z",
                    fill: "#F9FAFF"
                }), (0,
                n.jsx)("path", {
                    d: "M139.275 53.3664C130.238 45.9762 116.387 42.3356 96.9781 42.3356C77.5694 42.3356 63.7185 45.9326 54.6815 53.3664C43.9815 62.13 38.7957 77.39 38.7957 99.953C38.7957 147.782 62.0555 157.57 96.9781 157.57C131.901 157.57 155.161 147.782 155.161 99.953C155.161 77.3682 149.931 62.13 139.275 53.3664ZM66.9569 98.8412C65.9285 98.8412 64.9001 98.4488 64.1124 97.664C62.5369 96.0944 62.5369 93.5438 64.1124 91.9742L68.8606 87.2436L64.1124 82.513C62.5369 80.9434 62.5369 78.3928 64.1124 76.8232C65.6878 75.2536 68.2479 75.2536 69.8234 76.8232L74.5717 81.5538L79.3199 76.8232C80.8954 75.2536 83.4555 75.2536 85.0309 76.8232C86.6064 78.3928 86.6064 80.9434 85.0309 82.513L80.2827 87.2436L85.0309 91.9742C86.6064 93.5438 86.6064 96.0944 85.0309 97.664C84.2432 98.4488 83.2148 98.8412 82.1864 98.8412C81.1579 98.8412 80.1295 98.4488 79.3418 97.664L74.5935 92.9334L69.8453 97.664C69.0576 98.4488 68.0291 98.8412 67.0007 98.8412H66.9569ZM120.479 127.966H118.75V132.348C118.75 138.692 114.396 143.88 109.057 143.88C103.718 143.88 99.3632 138.692 99.3632 132.348V127.966H73.6745C71.9678 127.966 70.5674 126.593 70.5674 124.87C70.5674 123.148 71.9459 121.775 73.6745 121.775H120.457C122.164 121.775 123.564 123.148 123.564 124.87C123.564 126.593 122.185 127.966 120.457 127.966H120.479ZM129.888 91.9742C131.463 93.5438 131.463 96.0944 129.888 97.664C129.1 98.4488 128.072 98.8412 127.043 98.8412C126.015 98.8412 124.986 98.4488 124.199 97.664L119.45 92.9334L114.702 97.664C113.914 98.4488 112.886 98.8412 111.857 98.8412C110.829 98.8412 109.801 98.4488 109.013 97.664C107.437 96.0944 107.437 93.5438 109.013 91.9742L113.761 87.2436L109.013 82.513C107.437 80.9434 107.437 78.3928 109.013 76.8232C110.588 75.2536 113.148 75.2536 114.724 76.8232L119.472 81.5538L124.22 76.8232C125.796 75.2536 128.356 75.2536 129.931 76.8232C131.507 78.3928 131.507 80.9434 129.931 82.513L125.183 87.2436L129.931 91.9742H129.888Z",
                    fill: "#F9FAFF"
                })]
            }), (0,
            n.jsx)("defs", {
                children: (0,
                n.jsx)("clipPath", {
                    id: "clip0_11_913",
                    children: (0,
                    n.jsx)("rect", {
                        width: "194",
                        height: "218",
                        fill: "white"
                    })
                })
            })]
        });
        var o = r(58684)
          , c = r(82259)
          , d = r(77626)
          , h = r(32606)
          , l = r(43063);
        const u = [["exception handling has been disabled", "noExceptionSupport"], ["The browser could not allocate enough memory", "failedToAllocateMemory"], ["Out of memory", "outOfMemory"], ["out of memory", "outOfMemory"], ["abort", "AbortedError"], ["NotAllowedError", "NotAllowedError"], ["TypeError", "TypeError"], ["ScriptError", "ScriptError"], ["NotSupportedError", "NotSupportedError"], ["RuntimeError", "RuntimeError"], ["RangeError", "RangeError"], ["InvalidStateError", "InvalidStateError"], ["SDK Not initialized", "SDKNotInitializedError"], ["NetworkError", "NetworkError"], ["DataCloneError", "DataCloneError"], ["ReferenceError", "ReferenceError"], ["SecurityError", "SecurityError"], ["InvalidAccessError", "InvalidAccessError"], ["ChunkLoadError", "ChunkLoadError"], ["QuotaExceededError", "QuotaExceededError"], ["TimeoutError", "TimeoutError"], ["NotFoundError", "NotFoundError"], ["NS_ERROR_", "NSError"], ["An error occurred running the Unity content on this page", "unknown"]]
          , g = ()=>{
            const t = i.useRef(!1)
              , [e,r] = i.useState(!1)
              , s = (e,r)=>{
                if (t.current)
                    return !0;
                let s;
                if (t.current = !0,
                "string" !== typeof e)
                    return t.current = !1,
                    !1;
                for (let t of u)
                    if (e.includes(t[0])) {
                        s = t[1];
                        break
                    }
                return s ? (l.Z.getInstance().sendEvent({
                    type: "unityCrash",
                    error: s,
                    errorMessage: `${e}`,
                    origin: r
                }),
                !0) : (t.current = !1,
                !1)
            }
            ;
            return i.useEffect((()=>{
                var t;
                t = window.alert,
                window.alert = function() {
                    const e = s(arguments[0] || "", "alert");
                    if (!e)
                        return t.apply(this, arguments);
                    r(!0)
                }
                ,
                function(t) {
                    console.error = function() {
                        return s(arguments[0] || "", "console"),
                        t.apply(this, arguments)
                    }
                }(console.error)
            }
            ), []),
            e ? (0,
            n.jsx)(o.u_, {
                hideBackdrop: !0,
                children: (0,
                n.jsxs)(o.hz, {
                    sx: {
                        backgroundColor: h.D.black[70],
                        width: "min(100vh,400px)",
                        pb: 2.5
                    },
                    children: [(0,
                    n.jsx)(a, {
                        style: {
                            width: 93,
                            height: 107,
                            marginTop: 32
                        }
                    }), (0,
                    n.jsx)("h2", {
                        style: {
                            fontSize: 27,
                            marginBlockEnd: 0,
                            marginBlockStart: 8
                        },
                        children: (0,
                        n.jsx)(d.Z, {
                            id: "error.unity.crashed.title"
                        })
                    }), (0,
                    n.jsx)("p", {
                        style: {
                            fontWeight: 400,
                            fontSize: 16,
                            color: h.D.white[50],
                            marginBottom: 20,
                            marginBlockStart: 8
                        },
                        children: (0,
                        n.jsx)(d.Z, {
                            id: "error.unity.crashed.text"
                        })
                    }), (0,
                    n.jsx)(c.S, {
                        variant: "contained",
                        color: "purple",
                        style: {
                            width: "100%"
                        },
                        height: 45,
                        onClick: ()=>window.location.reload(),
                        children: (0,
                        n.jsx)(d.Z, {
                            id: "error.unity.crashed.button"
                        })
                    })]
                })
            }) : null
        }
    }
    ,
    23236: (t,e,r)=>{
        r.d(e, {
            H: ()=>n,
            W: ()=>i
        });
        var s = r(87308);
        function i() {
            if ((0,
            s.w1)())
                return !1;
            try {
                const t = document.createElement("canvas");
                return "WebGLRenderingContext"in window && !!t.getContext("webgl2")
            } catch (t) {
                return !1
            }
        }
        function n() {
            if ((0,
            s.w1)())
                return !1;
            try {
                const t = document.createElement("canvas");
                return "WebGLRenderingContext"in window && (!!t.getContext("webgl") || !!t.getContext("experimental-webgl"))
            } catch (t) {
                return !1
            }
        }
    }
    ,
    46504: (t,e,r)=>{
        r.d(e, {
            Z: ()=>n
        });
        var s = r(95681);
        class i extends s.Z {
            trackProgress(t) {
                const e = Math.min(t + .1, 1);
                return super.trackProgress(e)
            }
        }
        const n = i
    }
    ,
    73411: (t,e,r)=>{
        r.d(e, {
            Z: ()=>v
        });
        var s = r(7136)
          , i = (r(47313),
        r(90831))
          , n = r(42379)
          , a = r(30686)
          , o = r(32606);
        const c = (0,
        n.ZP)("div")((t=>{
            let {theme: e} = t;
            return {
                fontSize: "14px",
                color: "#FFFFFF",
                display: "flex",
                gap: e.spacing(.5),
                height: 40
            }
        }
        ))
          , d = (0,
        n.ZP)("div")({
            fontWeight: 700
        })
          , h = (0,
        n.ZP)("div")({
            fontWeight: 400
        })
          , l = (0,
        n.ZP)("div")({
            height: 12,
            borderRadius: 6,
            backgroundColor: "black",
            position: "relative"
        })
          , u = (0,
        n.ZP)("div", {
            shouldForwardProp: t=>"percentage" !== t
        })((t=>{
            let {percentage: e} = t;
            return {
                position: "absolute",
                backgroundColor: o.D.brand[100],
                left: 0,
                top: 0,
                bottom: 0,
                borderRadius: 6,
                width: 100 * e + "%"
            }
        }
        ))
          , g = a.F4`
  0% { width: 5%; }
  100% { width: 100%; }
`
          , m = (0,
        n.ZP)("div")({
            backgroundColor: "#ffffff",
            position: "absolute",
            borderRadius: 6,
            top: 0,
            height: "100%",
            left: 0,
            right: 0,
            opacity: .3,
            animation: `${g} 1s infinite`
        })
          , p = a.F4`
  0% {
    left:0%;
    right:100%;
    width:0%;
  }
  10% {
    left:0%;
    right:75%;
    width:25%;
  }
  90% {
    right:0%;
    left:75%;
    width:25%;
  }
  100% {
    left:100%;
    right:0%;
    width:0%;
  }
`
          , C = (0,
        n.ZP)("div")({
            position: "absolute",
            backgroundColor: o.D.brand[100],
            borderRadius: 6,
            top: 0,
            right: "100%",
            bottom: 0,
            left: 0,
            width: 0,
            animation: `${p} 2s linear infinite`
        })
          , k = a.F4`
  0% {
    opacity:0;
  }
  17% {
    opacity:1;
  }
  83% {
   opacity:1;
  }
  100% {
    opacity: 0;
  }
`
          , y = a.F4`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`
          , S = (0,
        n.ZP)("div")({
            "& div": {
                position: "absolute",
                left: "50%",
                transform: "translate(-50%)",
                opacity: 0,
                animation: `${k} 3s linear 1`
            },
            "& .msg0": {
                animation: `${k} 3s linear 1`
            },
            "& .msg1": {
                animationDelay: "3s"
            },
            "& .msg2": {
                animationDelay: "6s"
            },
            "& .msg3": {
                animationDelay: "9s"
            },
            "& .msg4": {
                animationDelay: "12s"
            },
            "& .msg5": {
                animationDelay: "15s"
            },
            "& .msg6": {
                animationDelay: "18s"
            },
            "& .msg7": {
                animationDelay: "21s"
            },
            "& .msg8": {
                animationDelay: "24s"
            },
            "& .msg9": {
                animationDelay: "27s"
            },
            "& .msg10": {
                animationDelay: "30s"
            },
            "& .msg11": {
                animationDelay: "33s"
            },
            "& .msg12": {
                animationDelay: "36s"
            },
            "& .msg13": {
                animationDelay: "39s"
            },
            "& .msg14": {
                animationDelay: "42s"
            },
            "& .msg15": {
                animationDelay: "45s"
            },
            "& .msg16": {
                animationDelay: "48s"
            },
            "& .msg17": {
                animationDelay: "51s"
            },
            "& .msg18": {
                animationDelay: "54s"
            },
            "& .msg19": {
                animationDelay: "57s"
            },
            "& .msg20": {
                animationDelay: "60s"
            },
            "& .msg21": {
                animationDelay: "63s"
            },
            "& .msg22": {
                animationDelay: "66s"
            },
            "& .msg23": {
                animation: `${y} 2s linear 1`,
                animationDelay: "69s",
                animationFillMode: "forwards"
            }
        });
        var w = r(46417);
        const L = ()=>{
            const t = [s.ag._("loadingBarScreen.message1"), s.ag._("loadingBarScreen.message2"), s.ag._("loadingBarScreen.message3"), s.ag._("loadingBarScreen.message4"), s.ag._("loadingBarScreen.message5"), s.ag._("loadingBarScreen.message6"), s.ag._("loadingBarScreen.message7"), s.ag._("loadingBarScreen.message8")]
              , e = [...t, ...t, ...t];
            return (0,
            w.jsx)(S, {
                children: e.map(((t,e)=>(0,
                w.jsx)("div", {
                    className: `msg${e}`,
                    children: t
                }, e)))
            })
        }
        ;
        var f = r(93458);
        const v = t=>{
            let {progress: e, showProgress: r} = t;
            const n = (0,
            i.NI)()
              , a = e <= .95
              , g = r && !a || !r;
            return (0,
            w.jsx)("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    zIndex: 2,
                    background: o.D.black[90]
                },
                children: (0,
                w.jsx)(f.Z, {
                    children: r ? (()=>{
                        const t = n.totalSizeBytes ? Math.round(1e-6 * n.totalSizeBytes) : null;
                        return (0,
                        w.jsxs)(w.Fragment, {
                            children: [(0,
                            w.jsx)(l, {
                                sx: {
                                    width: "80%"
                                },
                                children: (0,
                                w.jsx)(u, {
                                    percentage: e,
                                    children: (0,
                                    w.jsx)(m, {})
                                })
                            }), (0,
                            w.jsxs)(c, {
                                children: [(0,
                                w.jsx)(d, {
                                    children: a ? `${Math.round(100 * e)}%` : g ? (0,
                                    w.jsx)(L, {}) : s.ag._("loadingBarScreen.message1")
                                }), a && t && (0,
                                w.jsxs)(h, {
                                    children: ["(", Math.round(e * t), " / ", t, " MB)"]
                                })]
                            })]
                        })
                    }
                    )() : (0,
                    w.jsxs)(w.Fragment, {
                        children: [(0,
                        w.jsx)(l, {
                            sx: {
                                width: "80%"
                            },
                            children: (0,
                            w.jsx)(C, {})
                        }), (0,
                        w.jsx)(d, {
                            children: g ? (0,
                            w.jsx)(L, {}) : s.ag._("loadingBarScreen.message1")
                        })]
                    })
                })
            })
        }
    }
}]);
