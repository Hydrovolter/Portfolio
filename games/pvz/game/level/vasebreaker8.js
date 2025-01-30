// VaseKiller4
oS.Init(
	{
		PName: [
			oCherryBomb,
			oSeedRepeater2,
			oSeedPuffShroom,
			oSeedTallNut,
			oSeedSquash,
		],
		ZName: [
			oZombie,
			oZombie2,
			oZombie3,
			oPoleVaultingZombie,
			oJackinTheBoxZombie,
		],
		PicArr: [
			"images/interface/background2.jpg",
			"images/interface/trophy.png",
			"images/interface/PointerDown.gif",
			"images/interface/Stripe.png",
		],
		backgroundImage: "images/interface/background2.jpg",
		DKind: 0,
		ShowScroll: false,
		ProduceSun: false,
		LevelName: "Another Chain Reaction",
		LvlEName: "vasebreaker8",
		CanSelectCard: 0,
		StartGameMusic: "Cerebrawl",
		SunNum: 0,
		RiddleAutoGrow: function () {
			var P = oS.VaseArP,
				L = P.Left,
				R = P.Right,
				GNum = P.GreenNum,
				VaseList = [],
				GroundList = [];

			// 生成罐子列表
			for (var O in P.ZombieP)
				VaseList.push({
					Type: "Zombie",
					Value: oS.ZName[P.ZombieP[O]],
				});
			for (var O in P.PlantP)
				VaseList.push({ Type: "Plants", Value: oS.PName[P.PlantP[O]] });
			for (var O in P.SunP)
				VaseList.push({ Type: "SunNum", Value: P.SunP[O] });

			// 生成格子列表
			for (; L <= R; ++L)
				for (var Q = 1; Q <= oS.R; ++Q) GroundList.push([Q, L]);

			// 打乱两者
			VaseList.sort(function () {
				return Math.random() - 0.5;
			});
			GroundList.sort(function () {
				return Math.random() - 0.5;
			});

			// 生成罐子
			while (VaseList.length && GroundList.length) {
				var Top = VaseList[VaseList.length - 1],
					Pos = GroundList[GroundList.length - 1];

				oFlowerVase.prototype.SpecialBirth(
					Pos[0],
					Pos[1],
					Top.Type == "Plants" ? GNum-- > 0 : 0,
					Top
				); // 生成罐子

				--VaseList.length, --GroundList.length;
			}
		},
		StartGame: function () {
			oP.Monitor(), SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
			StopMusic(), PlayMusic((oS.LoadMusic = oS.StartGameMusic));
			for (var i in ArCard) DoCoolTimer(i, 0);
			var f = function () {
				// 检测这一部分是否结束
				if (oFlowerVase.prototype.GetLevelStatus()) oP.FlagToEnd();
				else oSym.addTask(100, f, []);
			};

			oS.RiddleAutoGrow(), f(); // f 的调用一定要在生成罐子后面
		},

		VaseArP: {
			GreenNum: 2,
			Left: 3,
			Right: 9,
			ZombieP: [0, 0, 1, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4],
			PlantP: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3],
			SunP: [],
		},
	},
	0,
	{
		AutoSelectCard: function () {
			// 只选择樱桃炸弹
			SelectCard(oCherryBomb.prototype.EName);
		},
	}
);
