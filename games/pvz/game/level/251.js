oS.Init({
	PicArr: (function () {
		a = "images/interface/";
		return [ShadowPNG, a + "TAWIN.png"];
	})(),
	LevelName: "胜利界面",
	LevelEName: 251,
	ShowScroll: 1,
	LoadMusic: "pvzs",
	StartGameMusic: "pvzs",
	AudioArr: ["pvzs"],
	backgroundImage: "images/interface/TAWIN.png",
	LoadAccess: function (a) {
		NewImg(
			"imgSF",
			"images/interface/TAUI1.png",
			"left:380px;top:360px",
			EDAll,
			{
				onclick: function () {
					SelectModal(150);
				},
			}
		);
	},
});
