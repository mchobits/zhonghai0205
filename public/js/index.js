var bgw = 640,
	bgh = 1060;
var sfw, sfh;
var mm = 0;

var a11time = 5000;
var a12time = 5000;
var a13time = 5000;
var a21time = 7000;
var a22time = 8000;
var a23time = 7000;
var a31time = 6000;
var a32time = 6000;
var a33time = 6000;
var a41time = 5000;
var a42time = 5000;
var a43time = 5000;
var a51time = 8000;
var a52time = 8000;
var a53time = 8000;

//var ajax = new Ajax("http://172.16.0.98:8080/cy_server/c/",{openid :"1213",nickname:"来自下水道的美人鱼",headimgurl:"aaaaaaaaa",topenid:"bbbb"});
/*var tzstr = "http://172.16.0.66:8080/njbt1128/content.html";*/
var ajax = new Ajax("http://mchobits.s3.natapp.cc/huanyuhui/c/", {
	openid: 40,
	nickname: "aaaa",
	headimgurl: "bbbb",
	tid: 28
});

var title = "戏精,站住！这里有道送分题！";
var namehq = "";
var imgUrl = "http://www.i-orange-xf.com/zhonghai1208/img/fx.jpg";
ajax.send("initMsg", {}, function(data) {
	namehq = data.nickname;
});

function jiazaibiu() {
	window.onload = function() {
		if (mm == 1) {
			return;
		}

		mm = 1;

		var pmw = window.innerWidth;
		var pmh = window.innerHeight;

		sfw = pmw / bgw;
		sfh = pmh / bgh;

		sale(0, 0, "a1001");
		// sale(470, 395, "a1002");
		// sale(440, 395, "a1003");
		sale(180, 580, "a1004");
		sale(180, 320, "a1005");
		sale(20, 15, "a1006");
		sale(120, 200, "a1007");
		sale(40, 40, "a1008");
		sale(40, 540, "a1009");
		sale(40, 700, "a1010");
		sale(400, 840, "a1011");
		// sale(0, 0, "a1012");
		// sale(470, 385, "a1002a");
		// sale(443, 387, "a1003a");
		// sale(467, 385, "a1004a");
		sale(180, 500, "a1013");
		sale(220, 20, "a1014");
		sale(440, 750, "a1015");
		sale(180, 580, "a1016");
		// sale(0, 0, "a1017");
		// sale(466, 402, "a1002b");
		// sale(440, 405, "a1003b");
		// sale(463, 402, "a1004b");
		sale(180, 550, "a1018");
		// sale(500, 500, "a1019");
		// sale(550, 950, "a1020");
		// sale(0, 450, "a1021");
		sale(500, 350, "a1022");

		sale(500, 290, "a1027");
		// sale(469, 387.5, "a1002c");
		// sale(443, 390.5, "a1003c");
		// sale(466, 387.5, "a1004c");
		// sale(0, 580, "a1024");
		// sale(420, 570, "a1025");
		// sale(475, 580, "a1026");
		// sale(25, 780, "a1027");
		// sale(160, 860, "a1028");
		// sale(70, 805, "a1029");
		// sale(340, 630, "a1030");
		// sale(378, 663, "a1031");

		sale(0, 0, "a2001");
		sale(180, 320, "a2002");
		sale(180, 580, "a2002b")
		sale(330, 710, "a2003");

		//题目2
		sale(20, 15, "a1006a");
		sale(120, 210, "a1007a");
		sale(40, 40, "a1008a");
		sale(40, 320, "a1009a");
		sale(40, 630, "a1010a");

		sale(180, 320, "a2004");
		sale(180, 580, "a2005");
		sale(400, 490, "a2006");
        sale(500, 710, "a2006b");
		// sale(480, 650, "a2007");
		// sale(480, 863, "a2008");
		// sale(480, 965, "a2009");
		// sale(460, 674, "a2010");
		// sale(460, 798, "a2011");
		// sale(460, 901, "a2012");
		// sale(440, 674, "a2013");
		// sale(440, 780, "a2014");
		// sale(440, 849, "a2015");

		// sale(405, 675, "a2016");
		// sale(380, 675, "a2017");
		// sale(355, 675, "a2018");
		// sale(330, 675, "a2019");
		// sale(305, 675, "a2020");
		// sale(280, 675, "a2021");
		// sale(255, 675, "a2022");
		// sale(210, 675, "a2023");
		// sale(185, 675, "a2024");
		// sale(160, 675, "a2025");
		// sale(135, 675, "a2026");
		// sale(130, 675, "a2027");
		sale(450, 450, "a2030");

		sale(180, 320, "a2031");
		sale(180, 580, "a2032");
		sale(400, 490, "a2033");
		sale(350, 550, "a2034");

        sale(180, 320, "a2035");
        sale(180, 580, "a2036");

		sale(370, 800, "a2037");
		sale(500, 550, "a2038");

        sale(400, 490, "a2039");
		// rotateScale("a2036", 0, 0, -600, -350, 0.3, 0.3, 0, 0, 0, 0, 0, 0, 0, 4);
		//rotateScale("a2031", 0, 0, -570, -300, 0.3, 0.3, 0, 0, 0, 0, 0, 0, 0, 4);
		// rotateScale("a2005", 0, 0, -400, -300, 0.5, 0.5, 0, 0, 0, 0, 0, 0, 0, 4);


		sale(0, 0, "a3001");
		sale(150, 450, "a3002");
		sale(225, 550, "a3003");
		// sale(330, 135, "a3004");
		// sale(430, 100, "a3005");
		sale(20, 15, "a1006a1");
		sale(120, 108, "a1007a1");
		sale(40, 100, "a1008a1");
		sale(40, 435, "a1009a1");
		sale(40, 750, "a1010a1");

		sale(170, 100, "a3006");
		sale(170, 100, "a3007");
		sale(255, 170, "a3009");
		sale(350, 160, "a3008");
		// sale(550, 750, "a3010");
		// sale(500, 650, "a3011");
		// sale(600, 900, "a3012");
		// sale(450, 900, "a3013");
		// sale(450, 750, "a3014");

        sale(170, 100, "a3015");
        sale(170, 100, "a3016");
        sale(255, 170, "a3017");
        sale(350, 160, "a3018");

		// sale(0, 550, "a3015");
		// sale(450, 600, "a3016");
		// sale(510, 620, "a3017");
		// sale(340, 500, "a3018");

        sale(170, 100, "a3019");
        sale(170, 100, "a3020");
        sale(255, 170, "a3021");
        sale(350, 160, "a3022");

		// sale(0, 550, "a3019");
		// sale(450, 600, "a3020");
		// sale(510, 630, "a3021");
		// sale(450, 960, "a3022");
		// sale(340, 500, "a3023");

		sale(0, 0, "a4001");
		sale(180, 320, "a4002");
		sale(180, 580, "a4003");
		// sale(230, 320, "a4004");
		// sale(250, 100, "a4005");
		sale(20, 15, "a1006a2");
		sale(130, 170, "a1007a2");
		sale(40, 100, "a1008a2");
		sale(40, 450, "a1009a2");
		sale(40, 750, "a1010a2");

		sale(241, 80, "a4006");
		sale(0, 570, "a4007");

		sale(500, 591, "a4008a");
        sale(500, 650, "a4008b");
        sale(500, 708, "a4008c");
        sale(480, 783, "a4008d");
		// sale(530, 950, "a4009");
		sale(241, 80, "a4010");
        sale(500, 591, "a4011a");
        sale(500, 650, "a4011b");
        sale(500, 708, "a4011c");
        sale(500, 783, "a4011d");
		// sale(0, 400, "a4011");
		// sale(420, 500, "a4012");
		// sale(380, 440, "a4013");
		// sale(360, 430, "a4014");
		sale(241, 80, "a4015");
		sale(299, 110, "a4016");
		sale(450, 650, "a4017a");
        sale(450, 650, "a4017b");
        sale(450, 650, "a4017c");
        sale(450, 650, "a4017d");
		// sale(550, 650, "a4018");
		// sale(520, 970, "a4019");

		sale(0, 0, "a5001");
		sale(0, 100, "a5002");
		sale(180, 320, "a5003");
		sale(180, 600, "a5004");
		sale(420, 200, "a5005");

		// sale(420, 450, "a5006");
		// sale(470, 460, "a5007");
		sale(20, 15, "a1006a3");

		sale(150, 350, "a1007a3");
		sale(100, 100, "a1008a3");
		sale(100, 500, "a1009a3");
		sale(45, 100, "a1010a3");
		sale(0, 0, "a5008");
		sale(0, 470, "a5009");
		sale(0, 610, "a5010");
		sale(340, 550, "a5011");
		sale(342, 645, "a5012");
		// sale(361, 590, "a5013");
		// sale(363, 685, "a5014");
		// sale(363, 30, "a5015");
		// sale(395, 50, "a5016");

		sale(0, 0, "a5017");
		sale(0, 390, "a5018");
		sale(0, 200, "a5019");
		sale(420, 260, "a5020");
		sale(320, 370, "a5021");
		sale(330, 515, "a5022");
		sale(270, 870, "a5023");

		sale(0, 0, "a5024");
		sale(0, 450, "a5025");
		sale(0, 590, "a5026");
		sale(400, 330, "a5027");
		sale(450, 340, "a5028");
		sale(270, 10, "a5029");
		sale(320, 20, "a5030");
		sale(220, 660, "a5031");
		sale(300, 730, "a5032");
		sale(340, 590, "a5033");
		sale(270, 870, "a5034");

		salediv(0, 0, "page6");

		sale(70, 300, "a6001");
		sale(340, 310, "a6002");
		sale(410, 600, "a6003");

		sale(0, 0, "b1001");
		sale(0, 0, "b1002");
		sale(520, 25, "b1003");
		sale(120, 85, "b1004");
		sale(420, 900, "b1005");
		sale(50, 900, "b1006");
		sale(20, 220, "b1007");
		sale(20, 620, "b1008");
		/*rotateScale("a2005",-400,-300,-580,-450,0.5,1,0,0,1,1,0,0,0,4);*/
		salekj(0, 0, "kj");

		sale(0, 0, "a7001");
		sale(0, 500, "a7002");
		sale(0, 0, "b8001");
		sale(50, 40, "b8002");
		sale(250, 700, "b8003");
		sale(50, 40, "b8002a");
		sale(250, 700, "b8003a");
		sale(50, 40, "b8002a1");
		sale(250, 700, "b8003a1");
		sale(50, 40, "b8002a2");
		sale(250, 700, "b8003a2");
		sale(50, 40, "b8002a3");
		sale(250, 700, "b8003a3");
		sale(50, 40, "b8002a4");
		sale(250, 700, "b8003a4");
		salefs(-200, 480, "fensunumber");
		sale(10, 200, "b8004");
		sale(0, 500, "b8005");
		sale(10, 610, "b8006");
		sale(10, 610, "b8007");

		sale(0, 0, "b9001");
		sale(20, 300, "b9002");
		sale(55, 520, "b9003");
		sale(140, 630, "b9004");
		sale(440, 450, "b9004a");
		saledjs(440, 460, "yzmdjsdiv");
		saleinput(230, 340, "namestr");
		saleinput(230, 430, "phonestr");
		saleinput(230, 530, "yzmstr");

		sale(0, 0, "b10001");
		sale(0, 30, "b10002");
		saletable(-120, 355, "b10003");

		sale(0, 0, "b11001");
		sale(0, 0, "b11002");
		sale(160, 200, "b11003");
		sale(190, 420, "b11004");


		sale(0, 0, "b12001");
		sale(0, 0, "b12002");
		sale(115, 200, "b12003");
		sale(185, 460, "b12004");
		sale(145, 750, "b12005");

		sale(0, 0, "b13001");
		sale(300, 50, "b13002");

		salemoneynumber(0, 620, "hbnumber");
		sale(570, 30, "logo1");
		sale(30, 30, "logo2");
		sale(30, 30, "logo3");
		/*startdh();*/
		/*paihangbang();*/
		/*dh888(1);*/
		salediv(0, 0, "all");
		/*$("#b8004,#b8005,#b8006,#b8007").fadeOut(500);
		
		$("#b8004,#b8007").fadeIn(500);*/

	}

	/*startdh();*/
}



function paihangbang() {
	ajax.send("randList", {}, function(data) {
		console.log(data.array);

		/*<tr>
			<td style="width: 23%">1</td>
			<td>aaaaaa</td>
			<td style="width: 30%">aaaaaa</td>
		</tr>*/

		var strhtml = "";
		for (var i = 0; i < data.array.length; i++) {
			var namestr = data.array[i].nickname;
			if (namestr.length > 6) {
				namestr = namestr.substr(0, 6) + "...";
			}
			strhtml = strhtml + "<tr>" +
				"<td style='width: 23%'>" + data.array[i].rank + "</td>" +
				"<td style='width: 23%'>" + namestr + "</td>" +
				"<td style='width: 23%'>" + data.array[i].score + "</td>" +
				"<tr>";
		}

		$("#phtable").html(strhtml);
		$("#page10").fadeIn(500);
	});

}

// function orient() {
// 	if (window.orientation == 90 || window.orientation == -90) {
// 		//ipad、iphone竖屏；Andriod横屏
// 		$("#content").fadeOut(500);
// 		$("#jiazai").fadeOut(500);
// 		setTimeout(function() {
// 			alert("请将手机锁定竖屏");
// 		}, 500);
//
// 		return false;
// 	} else if (window.orientation == 0 || window.orientation == 180) {
// 		//ipad、iphone横屏；Andriod竖屏
// 		$("#content").fadeIn(500);
// 		jiazaibiu();
// 		return false;
// 	}
// }



function dh888(typenumber) {
	$("#page8").fadeIn(500);

	if (typenumber == 1) {
		dh8a1();
	} else if (typenumber == 2) {
		dh8a2();
	} else if (typenumber == 3) {
		dh8a3();
	} else if (typenumber == 4) {
		dh8a4();
	} else if (typenumber == 5) {
		dh8a5();
	} else if (typenumber == 6) {
		dh8a6();
	}

	setTimeout(function() {
		$("#andiv").fadeIn(500);
	}, 1500);
}

function dh8a1() {
	$("#page81").fadeIn(500);
	setTimeout(function() {
		rotateScale("b8003", 350, 700, 250, 700, 1.8, 1, 0, 0, 1, 1, 300, 0, 0, 1);
	}, 600);
}

function dh8a2() {
	$("#page82").fadeIn(500);
	setTimeout(function() {
		rotateScale("b8003a", 350, 700, 250, 700, 1.8, 1, 0, 0, 1, 1, 300, 0, 0, 1);
	}, 600);
}

function dh8a3() {
	$("#page83").fadeIn(500);
	setTimeout(function() {
		rotateScale("b8003a1", 350, 700, 250, 700, 1.8, 1, 0, 0, 1, 1, 300, 0, 0, 1);
	}, 600);
}

function dh8a4() {
	$("#page84").fadeIn(500);
	setTimeout(function() {
		rotateScale("b8003a2", 350, 700, 250, 700, 1.8, 1, 0, 0, 1, 1, 300, 0, 0, 1);
	}, 600);
}

function dh8a5() {
	$("#page85").fadeIn(500);
	setTimeout(function() {
		rotateScale("b8003a3", 350, 700, 250, 700, 1.8, 1, 0, 0, 1, 1, 300, 0, 0, 1);
	}, 600);
}

function dh8a6() {
	$("#page86").fadeIn(500);
	setTimeout(function() {
		rotateScale("b8003a4", 350, 700, 250, 700, 1.8, 1, 0, 0, 1, 1, 300, 0, 0, 1);
	}, 600);
}

//留级重考
$("#b8007,#b12005").on("click", function() {
	window.location.replace("http://www.i-orange-xf.com/huanyuhui/c/i");
});

//抽取红包
$("#b8006").on("click", function() {
	ajax.send("getHb", {}, function(data) {
		$("#logo1").fadeIn(500);
		if (data.money > 0) {
			$("#hbnumber").html(data.money / 100 + "元");
			$("#page11").fadeIn(500);
			setTimeout(function() {
				$("#page13").fadeIn(500);
			}, 1500);
		} else {
			$("#page12").fadeIn(500);
		}
	});
});


//关闭排行榜页面
$("#b10004").on("click", function() {
	$("#page10").fadeOut(500);
});

//查看排行版
$("#b8004").on("click", function() {
	paihangbang();
});

//打开信息登记页面
$("#b8005").on("click", function() {
	$("#page9").fadeIn(500);
});

//打开信息登记页面
$("#b1008").on("click", function() {
	paihangbang();

});



$("#b1007").on("click", function() {
	$("#logo1").fadeIn(500);
	$("#age1").fadeOut(500);
	$("#page6").fadeIn(500);
	setTimeout(function() {
		$("#a6002").attr("class", "xz2");
		rotateScale("a6002", 340, 310, 370, 290, 1, 1, 0, 0, 1, 1, 300, 0, 0, 4);
		rotateScale("a6003", 410, 600, 410, 600, 0, 1, 0, 0, 0, 1, 600, 250, 0, 1);
		setTimeout(function() {
			huanchang();
		}, 600);
	}, 1000);
});


//提交注册信息
$("#b9004").on("click", function() {
	var namestr = document.getElementById("namestr").value;
	var phonestr = document.getElementById("phonestr").value;
	var yzmcode = document.getElementById("yzmstr").value;

	if (namestr == "" || phonestr == "") {
		alert("请输入完整的注册信息");
		return;
	}

	if (yzmcode == "") {
		alert("请输入验证码~");
		return;
	}

	var telReg = !! phonestr.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[3678]|18[0-9]|14[57])[0-9]{8}$/);
	//如果手机号码不能通过验证
	if (telReg == false) {
		alert("请输入正确的手机号码");
		return false;
	}


	ajax.send("register", {
		phone: phonestr,
		nickName: namestr,
		authCode: yzmcode
	}, function(data) {
		ajax.send("getHb", {
			phone: phonestr,
			nickName: namestr
		}, function(data) {
			if (data.money > 0) {
				$("#hbnumber").html(data.money / 100 + "元");
				$("#page11").fadeIn(500);
			} else {
				$("#page12").fadeIn(500);
			}
		});
	});
});





function startdh() {
	$("#logo1").fadeOut(500);
	setTimeout(function() {
		changeHeight("kj", 0, 0, 0, 0, 0, 1060, 1000, 500, 4);

		setTimeout(function() {
			rotateScale("b1003", 520, 25, 520, 25, 0, 1, 0, 0, 0, 1, 700, 200, 0, 1);
			rotateScale("b1004", 120, 85, 120, 85, 0, 1, 0, 0, 0, 1, 700, 600, 0, 1);
			rotateScale("b1005", 420, 900, 420, 900, 0, 1, 0, 0, 0, 1, 700, 1000, 0, 1);
			rotateScale("b1006", 50, 900, 50, 900, 0, 1, 0, 0, 0, 1, 700, 1400, 0, 1);
			rotateScale("b1007", 120, 220, 20, 220, 1, 1, 0, 0, 0, 1, 700, 1800, 0, 1);
			rotateScale("b1008", 120, 620, 20, 620, 1, 1, 0, 0, 0, 1, 700, 1800, 0, 1);
		}, 1500);
	}, 1000);
}

var ceshifs = 0;

function cjqihuan(number) {
	if (number == 11) {
		setTimeout(function() {
			$("#page6").fadeIn(500);
			zl();
			stopAll();
			musicmm.pause();
		}, a11time);
		ceshifs = ceshifs + 15;
	} else if (number == 12) {
		setTimeout(function() {
			$("#page6").fadeIn(500);
			zl();
			stopAll();
			musicmm.pause();
		}, a12time);
		ceshifs = ceshifs + 10;
	} else if (number == 13) {
		setTimeout(function() {
			$("#page6").fadeIn(500);
			zl();
			stopAll();
			musicmm.pause();
		}, a13time);
		ceshifs = ceshifs + 20;
	} else if (number == 21) {
		setTimeout(function() {
			$("#page6").fadeIn(500);
			zl();
			stopAll();
		}, a21time);
		ceshifs = ceshifs + 20;
	} else if (number == 22) {
		setTimeout(function() {
			$("#page6").fadeIn(500);
			zl();
			stopAll();
		}, a22time);
		ceshifs = ceshifs + 18;
	} else if (number == 23) {
		setTimeout(function() {
			$("#page6").fadeIn(500);
			zl();
			stopAll();
		}, a23time);
		ceshifs = ceshifs + 18;
	} else if (number == 31) {
		setTimeout(function() {
			$("#page6").fadeIn(500);
			zl();
			stopAll();
		}, a31time);
		ceshifs = ceshifs + 15;
	} else if (number == 32) {
		setTimeout(function() {
			$("#page6").fadeIn(500);
			zl();
			stopAll();
		}, a32time);
		ceshifs = ceshifs + 10;
	} else if (number == 33) {
		setTimeout(function() {
			$("#page6").fadeIn(500);
			zl();
			stopAll();
		}, a33time);
		ceshifs = ceshifs + 20;
	} else if (number == 41) {
		setTimeout(function() {
			$("#page6").fadeIn(500);
			zl();
			stopAll();
		}, a41time);
		ceshifs = ceshifs + 20;
	} else if (number == 42) {
		setTimeout(function() {
			$("#page6").fadeIn(500);
			zl();
			stopAll();
		}, a42time);
		ceshifs = ceshifs + 10;
	} else if (number == 43) {
		setTimeout(function() {
			$("#page6").fadeIn(500);
			zl();
			stopAll();
		}, a43time);
		ceshifs = ceshifs + 15;
	} else if (number == 51) {
		setTimeout(function() {
			$("#page7").fadeIn(500);
			sfs();
		}, a51time);
		ceshifs = ceshifs + 20;
	} else if (number == 52) {
		setTimeout(function() {
			$("#page7").fadeIn(500);
			sfs();
		}, a52time);
		ceshifs = ceshifs + 15;
	} else if (number == 53) {
		setTimeout(function() {
			$("#page7").fadeIn(500);
			sfs();
		}, a53time);
		ceshifs = ceshifs + 10;
	}

	console.log("ceshifs  == " + ceshifs);

}


var zc = 0; //zc=0 跳转到填写注册信息页面  zc=1已经是会员可以直接抽奖
var hbmoney = true; //hbmoney = true还有红包 hbmoney = false没有红包; 
function sfs() {
	var typenumber = 0;
	$("#b8006,#b8005,#b8007").fadeOut(500);
	var ceshifs12 = ceshifs;
	ceshifs12 = 100;
    ceshifs = 100;
	ajax.send("subScore", {
		score: ceshifs
	}, function(data) {
		//isVip=0表示要注册=1表示可以直接抽奖, hasMoney表示还有没有红包
		console.log(data.isVip);
		if (ceshifs12 < 70) {
			$("#b8007").fadeIn(500);
		} else {
			if (data.isVip == 0) {
				//需要注册
				zc = 0;
				$("#b8005").fadeIn(500);
			} else if (data.isVip == 1) {
				//可以直接领取红包
				zc = 1;
				$("#b8006").fadeIn(500);
			}
		}

		if (!data.hasMoney) {
			//没有红包
			hbmoney = false;
		}
	});

	if (ceshifs < 60) {
		ceshifs = ceshifs + "%";
		typenumber = 1;
		title = namehq + "很遗憾,你的戏精指数不及格,职场险恶,建议您回炉重造！";
		imgUrl = "http://www.i-orange-xf.com/zhonghai1208/img3/1002.png";
	} else if (ceshifs >= 60 && ceshifs < 70) {
		ceshifs = ceshifs + "%";
		typenumber = 2;
		title = namehq + "的戏精指数为" + ceshifs + ",龙套中的战斗机,一直配合别人演出,不做演员可惜了";
		imgUrl = "http://www.i-orange-xf.com/zhonghai1208/img3/2002.png";
	} else if (ceshifs >= 70 && ceshifs < 80) {
		ceshifs = ceshifs + "%";
		typenumber = 3;
		title = namehq + "的戏精指数为" + ceshifs + ",恭喜你,可以毕业了！海阔凭鱼跃,天高任你飞";
		imgUrl = "http://www.i-orange-xf.com/zhonghai1208/img3/3002.png";
	} else if (ceshifs >= 80 && ceshifs < 90) {
		ceshifs = ceshifs + "%";
		typenumber = 4;
		title = namehq + " 的戏精指数为" + ceshifs + ",戏精界的闪亮新星,吴x凡,鹿x都红不过你！";
		imgUrl = "http://www.i-orange-xf.com/zhonghai1208/img3/4002.png";
	} else if (ceshifs >= 90 && ceshifs < 100) {
		ceshifs = ceshifs + "%";
		typenumber = 5;
		title = namehq + "的戏精指数为" + ceshifs + ".,戏霸之王就是你,章x怡,梁x伟,还是你的对手吗？";
		imgUrl = "http://www.i-orange-xf.com/zhonghai1208/img3/5002.png";
	} else if (ceshifs >= 100) {
		ceshifs = ceshifs + "%";
		typenumber = 6;
		title = namehq + "的戏精指数为" + ceshifs + ",人民的艺术家,恭喜你收到《戏精的诞生》节目组正式邀约！";
		imgUrl = "http://www.i-orange-xf.com/zhonghai1208/img3/6002.png";
	}

	$("#fensunumber").html(ceshifs);

	setTimeout(function() {
		dh888(typenumber);
	}, 3000);


}

function zl() {
	setTimeout(function() {
		$("#a6002").attr("class", "xz2");
		rotateScale("a6002", 340, 310, 370, 290, 1, 1, 0, 0, 1, 1, 300, 0, 0, 4);
		rotateScale("a6003", 410, 600, 410, 600, 0, 1, 0, 0, 0, 1, 600, 250, 0, 1);
		setTimeout(function() {
			huanchang();
		}, 600);
	}, 1000);
}

var cjcj = 1;

function huanchang() {
	if (cjcj == 1) {
		$("#page5").fadeIn(500);
		dh5();
	} else if (cjcj == 2) {
		$("#page2").fadeIn(500);
		dh2();
	} else if (cjcj == 3) {
		$("#page3").fadeIn(500);
		dh3();
	} else if (cjcj == 4) {
		$("#page4").fadeIn(500);
		dh4();
	} else if (cjcj == 5) {
		$("#page5").fadeIn(500);
		dh5();
	}

	setTimeout(function() {
		$("#page6").fadeOut(500);
	}, 500);

	setTimeout(function() {
		cjcj++;
		if (cjcj == 2) {
			$("#a6001").attr("src", "img1/2.png");
		} else if (cjcj == 3) {
			$("#a6001").attr("src", "img1/3.png");
		} else if (cjcj == 4) {
			$("#a6001").attr("src", "img1/4.png");
		} else if (cjcj == 5) {
			$("#a6001").attr("src", "img1/6a.png");
		}

		$("#a6002").attr("class", "xz1");
		$("#a6003").css("opacity", "0");
		rotateScale("a6002", 340, 310, 340, 310, 1, 1, 0, 0, 1, 1, 300, 0, 0, 4);
	}, 1500);
}


var dj4 = 0;
$(".xzxz4").on("click", function() {

	if (dj4 == 1) {
		return;
	}
	dj4 = 1;
	var idd = $(this).attr("id");
	var alrstr = $(this).attr("alt");

	$("#" + idd).attr("class", "yy");

	if (alrstr == "a1") {
		dh41();
	}
	if (alrstr == "a2") {
		dh42();
	}
	if (alrstr == "a3") {
		dh43();
	}
});

var dj5 = 0;
$(".xzxz5").on("click", function() {
	if (dj5 == 1) {
		return;
	}
	dj5 = 1;
	var idd = $(this).attr("id");
	var alrstr = $(this).attr("alt");

	$("#" + idd).attr("class", "yy");

	if (alrstr == "a1") {
		dh51();
	}
	if (alrstr == "a2") {
		dh52();
	}
	if (alrstr == "a3") {
		dh53();
	}
});

function dh51() {
	$("#page51").fadeIn(500);
	$("#a5003").fadeOut(2000);
    $("#a5004").fadeOut(2000);
    $("#a5005").fadeOut(1500);
    $("#a5002").fadeOut(1500);
    rotateScale("a5008", 180, 320, 180, 375, 1, 1, 0, 0, 0, 1, 800, 500, 0, 4);
    rotateScale("a5010", 180, 600, 180, 525, 1, 1, 0, 0, 0, 1, 800, 500, 0, 4);
	$("#a5009").attr("class",'yy');
    rotateScale("a5009", 0, 320, 150, 320, 1, 1, 0, 0, 0, 1, 800, 800, 0, 4);
    rotateScale("a5011", 310, 335, 310, 335, 1, 1, 0, 0, 0, 1, 800, 800, 0, 4);
    rotateScale("a5012", 270, 650, 270, 650, 1, 1, 0, 0, 0, 1, 800, 800, 0, 4);
    upAndDown('a5011',335, 350, 300);
    upAndDown('a5012',650, 665, 300);
	// setTimeout(function() {
	// 	$("#a5008").attr("class", "xzbj");
	// }, 500);
    //
	// setTimeout(function() {
	// 	rotateScale("a5009", 0, 100, 0, 470, 1, 1, 0, 0, 0, 1, 1600, 300, 0, 4);
	// 	rotateScale("a5010", 0, 300, 0, 610, 1, 1, 0, 0, 0, 1, 1600, 300, 0, 4);
	// 	justOpacity("a5015", 0, 1, 600, 2500, 4);
	// 	justOpacity("a5016", 0, 1, 600, 3000, 4);
	// 	rotateScale("a5011", 300, 550, 340, 550, 1, 1, 0, 0, 0, 1, 300, 3300, 0, 4);
	// 	rotateScale("a5012", 302, 645, 342, 645, 1, 1, 0, 0, 0, 1, 300, 3300, 0, 4);
	// 	rotateScale("a5013", 361, 590, 361, 590, 0, 1, 0, 0, 0, 1, 700, 3600, 0, 1);
	// 	rotateScale("a5014", 363, 685, 363, 685, 0, 1, 0, 0, 0, 1, 700, 3600, 0, 1);
	// }, 1500);
	cjqihuan(51);
}

function dh52() {
	$("#page52").fadeIn(500);
	$("#a5004").fadeOut(4000);
    rotateScale("a5017", 180, 575, 180, 575, 1, 1, 0, 0, 0, 1, 400, 400, 0, 4);
	setTimeout(function () {
        $("#a5003").fadeOut(4000);
        $("#a5002").fadeOut(1800);
        rotateScale("a5018", 545, 420, 515, 420, 1, 1, 0, 0, 0, 1, 400, 800, 0, 1);
        rotateScale("a5020", 180, 320, 180, 320, 1, 1, 0, 0, 0, 1, 1200, 400, 0, 4);
        rotateScale("a5021", 305, 450, 150, 500, 1, 1, 0, 250, 0, 1, 400, 1300, 0, 4);
        rotateScale("a5019", 450, 200, 450, 200, 1, 1, 0, 0, 0, 1, 800, 800, 0, 2);
    },2500);

    rotateScale("a5021", 305, 450, 305, 450, 1, 1, 0, 0, 0, 1, 800, 1300, 0, 4);

	// setTimeout(function() {
	// 	$("#a5017").attr("class", "xzbj");
	// }, 500);
    //
	// setTimeout(function() {
	// 	justOpacity("a5018", 0, 1, 600, 300, 4);
	// 	justOpacity("a5019", 0, 1, 600, 300, 4);
	// 	rotateScale("a5020", 420, 260, 420, 260, 0, 1, 0, 0, 0, 1, 700, 1200, 0, 1);
	// 	rotateScale("a5023", 200, 800, 270, 870, 0, 1, 0, 0, 0, 1, 700, 2000, 0, 1);
	// 	rotateScale("a5021", 320, 370, 320, 370, 1, 1, 0, 0, 0, 1, 700, 2500, 0, 1);
	// 	rotateScale("a5022", 330, 515, 330, 515, 1, 1, 0, 0, 0, 1, 700, 2500, 0, 1);
	// }, 1000);
	cjqihuan(52);
}

function dh53() {
	$("#page53").fadeIn(500);
	setTimeout(function() {
		$("#a5024").attr("class", "xzbj");
	}, 500);
	setTimeout(function () {
        rotateScale("a5026", -640, 530, 0, 530, 1, 1, 0, 0, 0, 1, 500, 400, 0, 4);
        rotateScale("a5025", 640, 0, 216, 0, 1, 1, 0, 0, 0, 1, 900, 800, 0, 4);
        rotateScale("a5029", -424, 530, 216, 530, 1, 1, 0, 0, 0, 1, 900, 800, 0, 4);
    },1000);


	// setTimeout(function() {
	// 	rotateScale("a5025", 0, 350, 0, 450, 1, 1, 0, 0, 0, 1, 700, 200, 0, 4);
	// 	rotateScale("a5026", 0, 490, 0, 590, 1, 1, 0, 0, 0, 1, 700, 200, 0, 4);
	// 	justOpacity("a5032", 0, 1, 300, 1000, 4);
	// 	justOpacity("a5031", 0, 1, 300, 1000, 4);
	// 	justOpacity("a5027", 0, 1, 1000, 1300, 4);
	// 	justOpacity("a5028", 0, 1, 1000, 1800, 4);
	// 	justOpacity("a5029", 0, 1, 1000, 4600, 4);
	// 	justOpacity("a5030", 0, 1, 1000, 5000, 4);
	// 	rotateScale("a5033", 370, 490, 340, 590, 0, 1, 0, 0, 0, 1, 500, 5800, 0, 4);
	// 	rotateScale("a5034", 350, 850, 270, 870, 0, 1, 0, 0, 0, 1, 500, 7000, 0, 1);
	// }, 1500);
	cjqihuan(53);
}


function dh5() {
    rotateScale("a5003", 180, 120, 180, 320, 1, 1, 0, 0, 0, 1, 800, 1300, 0, 4);
    rotateScale("a5004", 180, 800, 180, 600, 1, 1, 0, 0, 0, 1, 800, 800, 0, 4);

    rotateScale("a5002", 305, 250, 305, 450, 1, 1, 0, 0, 0, 1, 800, 1300, 0, 4);

    setTimeout(function() {
        // rotateScale("a5002", 255, 450, 305, 450, 1, 1, 60, 0, 0, 1, 600, 400, 0, 4);
        rotateScale("a5005", 450, 200, 450, 200, 1, 1, 0, 0, 0, 1, 800, 800, 0, 2);
    	$("#timu5").fadeIn(500);
    	rotateScale("a1008a3", 100, 100, 100, 100, 0, 1, 0, 0, 0, 1, 500, 400, 0, 1);
    	rotateScale("a1009a3", 100, 500, 100, 500, 0, 1, 0, 0, 0, 1, 500, 800, 0, 1);
    	rotateScale("a1010a3", 45, 100, 45, 100, 0, 1, 0, 0, 0, 1, 500, 1200, 0, 1);
    }, 3800);
	// rotateScale("a5002", 0, -100, 0, 100, 1, 1, 0, 0, 0, 1, 1600, 300, 0, 4);
	// rotateScale("a5003", 0, 100, 0, 300, 1, 1, 0, 0, 0, 1, 1600, 300, 0, 4);
	// rotateScale("a5004", 420, 300, 420, 300, 0, 1, 0, 0, 0, 1, 600, 2200, 0, 1);
	// rotateScale("a5005", 420, 320, 420, 320, 0, 1, 0, 0, 0, 1, 600, 2300, 0, 1);
	// rotateScale("a5006", 420, 450, 420, 450, 0, 1, 0, 0, 0, 1, 600, 2600, 0, 1);
	// rotateScale("a5007", 470, 460, 470, 460, 0, 1, 0, 0, 0, 1, 600, 2800, 0, 1);
	// setTimeout(function() {
	// 	$("#timu5").fadeIn(500);
	// 	rotateScale("a1008a3", 40, 100, 40, 100, 0, 1, 0, 0, 0, 1, 500, 400, 0, 1);
	// 	rotateScale("a1009a3", 40, 380, 40, 380, 0, 1, 0, 0, 0, 1, 500, 800, 0, 1);
	// 	rotateScale("a1010a3", 40, 750, 40, 750, 0, 1, 0, 0, 0, 1, 500, 1200, 0, 1);
	// }, 3800);
	// playSound("music/bg5.mp3");
}

function dh43() {
	$("#page43").fadeIn(500);
    rotateScale("a4015", 241, 0, 241, 80, 1, 1, 0, 0, 0, 1, 800, 1300, 0, 4);
    $("#a4016").attr("class", "yy");
    rotateScale("a4016", 299, 110, 299, 110, 1, 1, 0, 0, 0, 1, 2100, 1300, 0, 4);

    // justOpacity("a4008a", 0, 1, 300, 1000, 4);
    rotateScale("a4017a", 500, 581, 500, 581, 0, 1, 0, 0, 0, 1, 1300, 800, 0, 1);
    rotateScale("a4017b", 500, 660, 500, 660, 0, 1, 0, 0, 0, 1, 2100, 800, 0, 1);
    rotateScale("a4017c", 500, 728, 500, 728, 0, 1, 0, 0, 0, 1, 2900, 800, 0, 1);
    rotateScale("a4017d", 500, 793, 500, 793, 0, 1, 0, 0, 0, 1, 3700, 800, 0, 1);
	// setTimeout(function() {
	// 	$("#a4015").attr("class", "xzbj");
	// 	justOpacity("a4016", 0, 1, 300, 800, 4);
	// }, 500);
	// justOpacity("a4018", 0, 1, 1000, 1100, 4);
	// justOpacity("a4017", 0, 1, 1000, 2300, 4);
	// rotateScale("a4019", 450, 900, 520, 970, 0, 1, 0, 0, 0, 1, 600, 3600, 0, 1);
	cjqihuan(43);
}

function dh42() {
	$("#page42").fadeIn(500);
    rotateScale("a4010", 241, 0, 241, 80, 1, 1, 0, 0, 0, 1, 800, 1300, 0, 4);
     // justOpacity("a4008a", 0, 1, 300, 1000, 4);
    rotateScale("a4011a", 500, 591, 500, 591, 0, 1, 0, 0, 0, 1, 1300, 800, 0, 1);
    rotateScale("a4011b", 500, 650, 500, 650, 0, 1, 0, 0, 0, 1, 2100, 800, 0, 1);
    rotateScale("a4011c", 500, 708, 500, 708, 0, 1, 0, 0, 0, 1, 2900, 800, 0, 1);
    rotateScale("a4011d", 500, 783, 500, 783, 0, 1, 0, 0, 0, 1, 3700, 800, 0, 1);
	// setTimeout(function() {
	// 	$("#a4010").attr("class", "xzbj");
	// 	justOpacity("a4011", 0, 1, 300, 800, 4);
	// }, 500);
	// justOpacity("a4012", 0, 1, 1000, 1800, 4);
	// rotateScale("a4013", 400, 440, 380, 440, 0, 1, 0, 0, 0, 1, 600, 2200, 0, 4);
	// rotateScale("a4014", 380, 430, 360, 430, 0, 1, 0, 0, 0, 1, 600, 2500, 0, 4);
	cjqihuan(42);
}

function dh41() {
	$("#page41").fadeIn(500);
    rotateScale("a4006", 241, 0, 241, 80, 1, 1, 0, 0, 0, 1, 800, 1300, 0, 4);
    $("#a4007").attr("class", "yy");
    rotateScale("a4007", 271, 100, 271, 100, 1, 1, 0, 0, 0, 1, 2100, 1300, 0, 4);
    // justOpacity("a4008a", 0, 1, 300, 1000, 4);
    rotateScale("a4008a", 500, 591, 500, 591, 0, 1, 0, 0, 0, 1, 1300, 800, 0, 1);
    rotateScale("a4008b", 500, 650, 500, 650, 0, 1, 0, 0, 0, 1, 2100, 800, 0, 1);
    rotateScale("a4008c", 500, 708, 500, 708, 0, 1, 0, 0, 0, 1, 2900, 800, 0, 1);
    rotateScale("a4008d", 500, 783, 500, 783, 0, 1, 0, 0, 0, 1, 3700, 800, 0, 1);
	// setTimeout(function() {
	// 	$("#a4006").attr("class", "xzbj");
	// 	justOpacity("a4007", 0, 1, 300, 500, 4);
	// }, 500);
    //
	// rotateScale("a4008", 320, 600, 420, 700, 0, 1, 0, 0, 0, 1, 800, 1300, 0, 1);
	// rotateScale("a4009", 530, 950, 530, 950, 0, 1, 0, 0, 0, 1, 800, 2100, 0, 1);
	cjqihuan(41);
}

function dh4() {
    rotateScale("a4002", 180, 0, 180, 420, 1, 1, 0, 0, 0, 1, 800, 1300, 0, 4);
    rotateScale("a4003", 180, 1000, 180, 680, 1, 1, 0, 0, 0, 1, 800, 800, 0, 4);
	// $("#a4004").attr("class", "yy");
	// rotateScale("a4005", 150, 200, 250, 100, 0, 1, 0, 0, 0, 1, 800, 1300, 0, 1);
	// rotateScale("a4003", 380, 600, 480, 700, 0, 1, 0, 0, 0, 1, 800, 2300, 0, 1);
	setTimeout(function() {
		$("#timu4").fadeIn(500);
		rotateScale("a1008a2", 40, 100, 40, 100, 0, 1, 0, 0, 0, 1, 500, 500, 0, 1);
		rotateScale("a1009a2", 40, 450, 40, 450, 0, 1, 0, 0, 0, 1, 500, 1000, 0, 1);
		rotateScale("a1010a2", 40, 750, 40, 750, 0, 1, 0, 0, 0, 1, 500, 1500, 0, 1);
	}, 2500);
	// playSound("music/bg4.mp3");
	// playSound("music/phone.mp3");
}


function dh3() {
	setTimeout(function() {
		rotateScale("a3002", 150, 300, 150, 450, 1, 1, 0, 0, 0, 1, 500, 300, 0, 1);
		rotateScale("a3003", 225, 700, 225, 550, 1, 1, 0, 0, 0, 1, 500, 600, 0, 1);
		// rotateScale("a3004", 380, 80, 380, 80, 1, 1, 0, 0, 0, 1, 1000, 900, 0, 1);
		// justOpacity("a3005", 0, 1, 800, 1500, 4);

		setTimeout(function() {
			$("#timu3").fadeIn(500);
			rotateScale("a1008a1", 40, 100, 40, 100, 0, 1, 0, 0, 0, 1, 500, 500, 0, 1);
			rotateScale("a1009a1", 40, 400, 40, 400, 0, 1, 0, 0, 0, 1, 500, 1000, 0, 1);
			rotateScale("a1010a1", 40, 750, 40, 750, 0, 1, 0, 0, 0, 1, 500, 1500, 0, 1);
		}, 2500);
	}, 500);
	playSound("music/bg3.mp3");
	playSound("music/bg38.mp3");
}

function dh31() {
	$("#timu3").fadeOut(500);
    $("#dat31").fadeIn(500);
	justOpacity("a3007", 0, 1, 1000, 300, 4);
	//justOpacity("a3007", 0, 1, 1000, 600, 4);
    rotateScale("a3006", 160, 100, 170, 100, 0, 1, 0, 0, 0, 1, 1300, 800, 0, 1);

    // rotateScale("a3009", 350, 170, 350, 170, 0, 1, 0, 0, 0, 1, 2100, 800, 0, 1);
    setTimeout(function () {
        rotateScale("a3008", 350, 160, 350, 160, 1, 1, 0, 0, 0, 1, 500, 500, 0, 4);
        // rotateScale("a3008", 240, 160, 255, 160, 0, 1, 0, 0, 0, 1, 600, 800, 0, 1);
    }, 2100);
    setTimeout(function () {
        rotateScale("a3009", 240, 170, 255, 170, 1, 1, 0, 0, 0, 1, 500, 500, 0, 4);
        // rotateScale("a3008", 240, 160, 255, 160, 0, 1, 0, 0, 0, 1, 600, 800, 0, 1);
    }, 3300);

	// rotateScale("a3011", 500, 650, 500, 650, 0, 1, 0, 0, 0, 1, 600, 1200, 0, 1);
	// rotateScale("a3014", 450, 750, 450, 750, 0, 1, 0, 0, 0, 1, 600, 1600, 0, 1);
	// rotateScale("a3010", 550, 750, 550, 750, 0, 1, 0, 0, 0, 1, 600, 2000, 0, 1);
	// rotateScale("a3012", 600, 900, 600, 900, 0, 1, 0, 0, 0, 1, 600, 2400, 0, 1);
	// justOpacity("a3008", 0, 1, 1000, 1300, 4);
	// justOpacity("a3003", 1, 0, 500, 300, 4);
    //
	// rotateScale("a3013", 450, 900, 450, 900, 0, 1, 0, 0, 0, 1, 600, 1700, 0, 1);

	cjqihuan(31);

	playSound("music/bg38.mp3");
}

function dh32() {
	$("#timu3").fadeOut(500);
	$("#dat32").fadeIn(500);

    justOpacity("a3015", 0, 1, 1000, 300, 4);

    rotateScale("a3016", 160, 100, 170, 100, 0, 1, 0, 0, 0, 1, 1300, 800, 0, 1);


    setTimeout(function () {
        rotateScale("a3017", 350, 160, 350, 160, 1, 1, 0, 0, 0, 1, 500, 500, 0, 4);

    }, 2100);
    setTimeout(function () {
        rotateScale("a3018", 220, 170, 235, 170, 1, 1, 0, 0, 0, 1, 500, 500, 0, 4);

    }, 3300);
	// justOpacity("a3003", 1, 0, 500, 500, 4);
	// justOpacity("a3015", 0, 1, 500, 800, 4);
	// justOpacity("a3016", 0, 1, 500, 1200, 4);
	// justOpacity("a3017", 0, 1, 500, 1600, 4);
	// justOpacity("a3018", 0, 1, 200, 2000, 4);
	cjqihuan(32);
}

function dh33() {
    $("#timu3").fadeOut(500);
    $("#dat33").fadeIn(500);

    justOpacity("a3019", 0, 1, 1000, 300, 4);

    rotateScale("a3020", 160, 100, 170, 100, 0, 1, 0, 0, 0, 1, 1300, 800, 0, 1);


    setTimeout(function () {
        rotateScale("a3021", 350, 160, 350, 160, 1, 1, 0, 0, 0, 1, 500, 500, 0, 4);

    }, 2100);
    setTimeout(function () {
        rotateScale("a3022", 220, 170, 235, 170, 1, 1, 0, 0, 0, 1, 500, 500, 0, 4);

    }, 3300);
	// $("#timu3").fadeOut(500);
	// $("#dat33").fadeIn(500);
	// justOpacity("a3003", 1, 0, 500, 500, 4);
	// justOpacity("a3019", 0, 1, 500, 800, 4);
	// justOpacity("a3020", 0, 1, 500, 1200, 4);
	// justOpacity("a3021", 0, 1, 500, 1600, 4);
	// justOpacity("a3023", 0, 1, 200, 2000, 4);
	// rotateScale("a3022", 450, 960, 450, 960, 0, 1, 0, 0, 0, 1, 600, 1800, 0, 1);
	cjqihuan(33);
}


var dj11 = 0;

$(".xzxz1").on("click", function() {
	if (dj11 == 1) {
		return;
	}
	dj11 = 1;
	var idd = $(this).attr("id");
	var alrstr = $(this).attr("alt");

	$("#" + idd).attr("class", "yy");

	if (alrstr == "a1") {
		$("#dat11").fadeIn(500);
		$("#a1012").attr("class", "xzbj");
		setTimeout(function() {
			dha11();
		}, 800);
	} else if (alrstr == "a3") {
		$("#dat13").fadeIn(500);
		// $("#a1023").attr("class", "xzbj");
		setTimeout(function() {
			dha13();
		}, 800);
	} else if (alrstr == "a2") {
		$("#dat12").fadeIn(500);
		// $("#a1017").attr("class", "xzbj");
		setTimeout(function() {
			dha12();
		}, 800);
	}
});

var dj2 = 0;
$(".xzxz2").on("click", function() {
	if (dj2 == 1) {
		return;
	}
	dj2 = 1;
	var idd = $(this).attr("id");
	var alrstr = $(this).attr("alt");

	$("#" + idd).attr("class", "yy");
    $("#timu2").fadeOut(500);

	if (alrstr == "a1") {
		$("#dat21").fadeIn(500);
		// $("#a2004").attr("class", "xzbj");
		setTimeout(function() {
			dh21();
		}, 1500);
	} else if (alrstr == "a2") {
		$("#dat22").fadeIn(500);
		// $("#a2030").attr("class", "xzbj");
		setTimeout(function() {
			dh22();
		}, 1500);
	} else if (alrstr == "a3") {
		$("#dat23").fadeIn(500);
		// $("#a2035").attr("class", "xzbj");
		setTimeout(function() {
			dh23();
		}, 1500);
	}
});

var dj3 = 0;
$(".xzxz3").on("click", function() {
	if (dj3 == 1) {
		return;
	}
	dj3 = 1;
	var idd = $(this).attr("id");
	var alrstr = $(this).attr("alt");

	$("#" + idd).attr("class", "yy");

	if (alrstr == "a1") {
		$("#dat31").fadeIn(500);
		setTimeout(function() {
			dh31();
		}, 600);
	} else if (alrstr == "a2") {
		setTimeout(function() {
			dh32();
		}, 600);
	} else if (alrstr == "a3") {
		setTimeout(function() {
			dh33();
		}, 600);
	}
});



$("#b9004a").on("click", function() {

	var namestr = document.getElementById("namestr").value;
	var phonestr = document.getElementById("phonestr").value;

	if (namestr == "" || phonestr == "") {
		alert("请输入完整的注册信息");
	}

	var telReg = !! phonestr.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[3678]|18[0-9]|14[57])[0-9]{8}$/);
	//如果手机号码不能通过验证
	if (telReg == false) {
		alert("请输入正确的手机号码");
		return false;
	}

	$("#b9004a").fadeOut(500);
	$("#yzmdjsdiv").fadeIn(500);
	var iiss = 60;
	var hhh = setInterval(function() {
		if (iiss < 1) {
			clearInterval(hhh);
			$("#b9004a").fadeIn(500);
			$("#yzmdjsdiv").fadeOut(500);
		}
		iiss--;
		document.getElementById("yzmdjspan").innerHTML = iiss;
	}, 1000);

	ajax.send("getAuthCode", {
		phone: phonestr
	}, function(data) {
		alert("验证码已发送成功而,请注意查收~");
	});
});

function dh2() {
    rotateScale("a2002", 180, 0, 180, 320, 1, 1, 0, 0, 0, 1, 800, 1300, 0, 4);
    rotateScale("a2002b", 180, 1000, 180, 580, 1, 1, 0, 0, 0, 1, 800, 800, 0, 4);
	// rotateScale("a2002", 0, 1200, 0, 800, 1, 1, 0, 0, 0, 1, 1000, 300, 0, 4);
	// rotateScale("a2003", 330, 500, 330, 710, 1, 1, 0, 0, 0, 1, 2000, 2000, 0, 4);
	setTimeout(function() {
		$("#timu2").fadeIn(500);
		rotateScale("a1008a", 40, 40, 40, 40, 0, 1, 0, 0, 0, 1, 500, 500, 0, 1);
		rotateScale("a1009a", 40, 320, 40, 320, 0, 1, 0, 0, 0, 1, 500, 1000, 0, 1);
		rotateScale("a1010a", 40, 630, 40, 630, 0, 1, 0, 0, 0, 1, 500, 1500, 0, 1);
	}, 3500);
	playSound("music/bg2.mp3");
}

function dh23() {

    $("#a2002").fadeOut(1800);

    //justOpacity("a2035", 0, 1, 200, 500, 4);
    rotateScale("a2035", 180, 320, 180, 320, 1, 1, 0, 0, 0, 1, 200, 400, 0, 4);


    $('#a2037').attr("class", "yy");
    $('#a2039').attr("class", "yy");

    setTimeout(function () {
        $("#a2002b").fadeOut(2500);
        justOpacity("a2036", 0, 1, 200, 400, 4);
    }, 2500);

    justOpacity("a2039", 0, 1, 1000, 1500, 4);
    justOpacity("a2037", 0, 1, 2000, 2500, 4);

    rotateScale("a2038", 500, 1200, 500, -200, 1, 1, 0, 0, 0, 1, 4000, 2500, 0, 4);
    // justOpacity("a2038", 0, 1, 2000, 2500, 4);
	//justOpacity("a2036", 0, 1, 1000, 0, 4);

	// setTimeout(function() {
	// 	rotateScale("a2036", -600, -350, -1020, -520, 0.3, 1, 0, 0, 1, 1, 1000, 500, 0, 4);
	// 	setTimeout(function() {
	// 		justOpacity("a2037", 0, 1, 300, 0, 4);
	// 	}, 1500);
	// 	setTimeout(function() {
	// 		justOpacity("a2038", 0, 1, 300, 0, 4);
	// 	}, 2500);
	// }, 500);
	cjqihuan(23);
}


function dh22() {

    $("#a2002").fadeOut(1600);
    $("#a2002b").fadeOut(1600);
    //justOpacity("a2031", 0, 1, 500, 500, 4);
    //justOpacity("a2032", 0, 1, 500, 500, 4);

    rotateScale("a2031", 180, 320, 180, 320, 1, 1, 0, 0, 0, 1, 300, 400, 0, 4);
    rotateScale("a2032", 180, 580, 180, 580, 1, 1, 0, 0, 0, 1, 300, 400, 0, 4);
    $('#a2033').attr("class", "yy");
    $('#a2034').attr("class", "yy");
    $('#a2030').attr("class", "yy");

    justOpacity("a2033", 0, 1, 1000, 1500, 4);
    justOpacity("a2034", 0, 1, 2000, 2500, 4);
    justOpacity("a2030", 0, 1, 2500, 3000, 4);

	// justOpacity("a2031", 0, 1, 1000, 0, 4);
    //
	// setTimeout(function() {
	// 	rotateScale("a2031", -570, -300, -900, -450, 0.3, 1, 0, 0, 1, 1, 1000, 500, 0, 4);
    //
	// 	setTimeout(function() {
	// 		var ii = 0;
	// 		var dh22a = setInterval(function() {
	// 			ii++;
	// 			if (ii == 1) {
	// 				justOpacity("a2032", 0, 1, 300, 0, 4);
	// 			} else if (ii == 2) {
	// 				justOpacity("a2033", 0, 1, 300, 0, 4);
	// 			} else if (ii == 3) {
	// 				justOpacity("a2034", 0, 1, 300, 0, 4);
	// 			} else {
	// 				clearInterval(dh22a);
	// 			}
	// 		}, 800);
	// 	}, 1000);
	// }, 500);

	cjqihuan(22);

}

function dh21() {

	$("#a2002").fadeOut(1800);
    $("#a2002b").fadeOut(1800);
    //justOpacity("a2004", 0, 1, 100, 200, 4);
    //justOpacity("a2005", 0, 1, 100, 200, 4);

    rotateScale("a2004", 180, 320, 180, 320, 1, 1, 0, 0, 0, 1, 300, 400, 0, 4);
    rotateScale("a2005", 180, 580, 180, 580, 1, 1, 0, 0, 0, 1, 300, 400, 0, 4);
    $('#a2006').attr("class", "yy");
    $('#a2006b').attr("class", "yy");

    justOpacity("a2006", 0, 1, 1000, 1500, 4);
    justOpacity("a2006b", 0, 1, 2000, 2500, 4);

	// justOpacity("a2005", 0, 1, 1000, 0, 4);
    //
	// setTimeout(function() {
	// 	rotateScale("a2005", -400, -300, -580, -450, 0.5, 1, 0, 0, 1, 1, 1000, 500, 0, 4);
	// 	rotateScale("a2006", 100, 630, 100, 630, 0, 1, 0, 0, 0, 1, 1000, 1500, 0, 1);
    //
	// 	setTimeout(function() {
	// 		var ii = 7;
	// 		var id = "a00";
	// 		var iimm = setInterval(function() {
	// 			if (ii < 10) {
	// 				id = "a200" + ii;
	// 			} else {
	// 				id = "a20" + ii;
	// 			}
    //
	// 			if (ii > 26) {
	// 				clearInterval(iimm);
	// 				return;
	// 			}
    //
	// 			justOpacity(id, 0, 1, 500, 0, 4);
    //
	// 			ii++;
	// 		}, 300);
	// 	}, 2500);
	// }, 1200);

	cjqihuan(21);

}

function dh1() {
	setTimeout(function() {
		// justOpacity("a1005", 0, 1, 1500, 1000, 4);
        // rorateInfinite("a1004",0,360,500,"Infinity");
		rotateScale("a1011", 400, 740, 400, 740, 0, 1, 0, 0, 0, 1, 500, 2500, 0, 1);
        rotateScale("a1004", 180, 1000, 180, 580, 1, 1, 0, 0, 0, 1, 800, 800, 0, 4);
        rotateScale("a1005", 180, 0, 180, 320, 1, 1, 0, 0, 0, 1, 800, 1300, 0, 4);

		setTimeout(function() {
			$("#timu1").fadeIn(500);
			rotateScale("a1008", 40, 40, 40, 40, 0, 1, 0, 0, 0, 1, 500, 500, 0, 1);
			rotateScale("a1009", 40, 540, 40, 540, 0, 1, 0, 0, 0, 1, 500, 1000, 0, 1);
			rotateScale("a1010", 40, 700, 40, 700, 0, 1, 0, 0, 0, 1, 500, 1500, 0, 1);
		}, 3500);
	}, 1000);

	playSound("music/time.mp3", 3);
	playSound("music/bg1.mp3", 1);

}




function dha11() {
	// rotateScale("a1013", 270, 770, 240, 770, 0, 1, 0, 0, 0, 1, 1500, 2500, 0, 4);
	$('#a1004').fadeOut(1800);
    $('#a1011').fadeOut(1800);

    justOpacity("a1016", 0, 1, 300, 500, 4);
    $('#a1014').attr("class", "yy");
    $('#a1015').attr("class", "yy");
    justOpacity("a1014", 0, 1, 1000, 1500, 4);
	justOpacity("a1015", 0, 1, 2000, 2500, 4);
	// rotateScale("a1016", 450, 950, 450, 950, 0, 1, 0, 0, 0, 1, 1500, 2000, 0, 1);
	cjqihuan(11);
}

function dha12() {
	// rotateScale("a1021", 0, 650, 0, 450, 1, 1, 0, 0, 0, 1, 600, 500, 0, 4);
	// justOpacity("a1018", 0, 1, 1000, 800, 4);
	// justOpacity("a1019", 0, 1, 1000, 1200, 4);
	// rotateScale("a1020", 550, 950, 550, 950, 0, 1, 0, 0, 0, 1, 600, 1500, 0, 1);
	// rotateScale("a1022", 300, 270, 300, 170, 1, 1, 0, 0, 0, 1, 600, 1800, 0, 4);
    $('#a1004').fadeOut(1800);
    $('#a1011').fadeOut(1800);
    justOpacity("a1018", 0, 1, 300, 500, 4);
    $('#a1022').attr("class", "yy");
    rotateScale("a1022", 390, 380, 390, 380, 0, 1, 0, 0, 0, 1, 500, 2000, 0, 1);

	cjqihuan(12);
}

function dha13() {
	// justOpacity("a1024", 0, 1, 1000, 300, 4);
	// justOpacity("a1025", 0, 1, 1000, 600, 4);
	// justOpacity("a1026", 0, 1, 1000, 1200, 4);
	// justOpacity("a1027", 0, 1, 1000, 1500, 4);
	// justOpacity("a1028", 0, 1, 1000, 1800, 4);
	// justOpacity("a1029", 0, 1, 1000, 2100, 4);
	// rotateScale("a1030", 440, 630, 340, 630, 1, 1, 0, 0, 0, 1, 600, 2400, 0, 4);
	// rotateScale("a1031", 378, 663, 378, 663, 0, 1, 0, 0, 0, 1, 600, 3200, 0, 1);

    $('#a1004').fadeOut(1800);
    $('#a1011').fadeOut(1800);
	$('#a1027').attr("class", "yy");
    justOpacity("a1013", 0, 1, 300, 500, 4);
    rotateScale("a1027", 490, 285, 490, 285, 0, 1, 0, 0, 0, 1, 500, 2000, 0, 1);
	cjqihuan(13);
}


function sale(x, y, imgid) {

	var imw = document.getElementById(imgid).width;
	var imh = document.getElementById(imgid).height;

	imw = imw * sfw;
	imh = imh * sfh;

	x = x * sfw;
	y = y * sfh;

	document.getElementById(imgid).style.width = imw + "px";
	document.getElementById(imgid).style.height = imh + "px";
	document.getElementById(imgid).style.left = x + "px";
	document.getElementById(imgid).style.top = y + "px";
}

function saletable(x, y, imgid) {

	var imw = 750;
	var imh = 330;

	imw = imw * sfw;
	imh = imh * sfh;

	x = x * sfw;
	y = y * sfh;

	document.getElementById(imgid).style.width = imw + "px";
	document.getElementById(imgid).style.height = imh + "px";
	document.getElementById(imgid).style.left = x + "px";
	document.getElementById(imgid).style.top = y + "px";
}

function saleinput(x, y, imgid) {

	var imw = 200;
	var imh = 40;

	imw = imw * sfw;
	imh = imh * sfh;

	x = x * sfw;
	y = y * sfh;

	document.getElementById(imgid).style.width = imw + "px";
	document.getElementById(imgid).style.height = imh + "px";
	document.getElementById(imgid).style.left = x + "px";
	document.getElementById(imgid).style.top = y + "px";
}

function saledjs(x, y, imgid) {

	var imw = 129;
	var imh = 40;

	imw = imw * sfw;
	imh = imh * sfh;

	x = x * sfw;
	y = y * sfh;

	document.getElementById(imgid).style.width = imw + "px";
	document.getElementById(imgid).style.height = imh + "px";
	document.getElementById(imgid).style.left = x + "px";
	document.getElementById(imgid).style.top = y + "px";
}

function salediv(x, y, imgid) {

	var imw = 640;
	var imh = 1060;

	imw = imw * sfw;
	imh = imh * sfh;

	x = x * sfw;
	y = y * sfh;

	document.getElementById(imgid).style.width = imw + "px";
	document.getElementById(imgid).style.height = imh + "px";
	document.getElementById(imgid).style.left = x + "px";
	document.getElementById(imgid).style.top = y + "px";
}

function salefs(x, y, imgid) {

	var imw = 1060;
	var imh = 100;

	imw = imw * sfw;
	imh = imh * sfh;

	x = x * sfw;
	y = y * sfh;

	document.getElementById(imgid).style.width = imw + "px";
	document.getElementById(imgid).style.height = imh + "px";
	document.getElementById(imgid).style.left = x + "px";
	document.getElementById(imgid).style.top = y + "px";
}

function salekj(x, y, imgid) {

	var imw = 640;
	var imh = 0;

	imw = imw * sfw;
	imh = imh * sfh;

	x = x * sfw;
	y = y * sfh;

	document.getElementById(imgid).style.width = imw + "px";
	document.getElementById(imgid).style.height = imh + "px";
	document.getElementById(imgid).style.left = x + "px";
	document.getElementById(imgid).style.top = y + "px";
}

function salemoneynumber(x, y, imgid) {

	var imw = 640;
	var imh = 70;

	imw = imw * sfw;
	imh = imh * sfh;

	x = x * sfw;
	y = y * sfh;

	document.getElementById(imgid).style.width = imw + "px";
	document.getElementById(imgid).style.height = imh + "px";
	document.getElementById(imgid).style.left = x + "px";
	document.getElementById(imgid).style.top = y + "px";
}