// this.postEvent("adFinished")
// this.postEvent("adCompleted")
// https://games.crazygames.com/en_US/air-toons/index.html
Crazygames= {
  "init": function(option) {
    // console.trace("--init--", option);
    console.log("--init--", option);
    return true;
  },
  "requestAd": async function(p, t) {
    console.log("--fx--requestAd--");
    console.trace("p", p, "t", t);
    return 0;
  },
  "requestBanners": async function(p, t) {
    console.log("--fx--requestBanners--");
    console.trace("p", p, "t", t);
    return 0;
  },
}
