var shopCar = document.getElementsByClassName("jiesuan")[0];

shopCar.onclick = function () {
	window.location.href = "write-order.html";
}


for (var i = 0; i < $(".anniu").length; i++) {
	$(".anniu")[i].a = i;
	$(".anniu").eq(i).on("click", function () {			
		$(".anniu").eq(this.a).toggleClass("anniu1");
	})	
}

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");


var num1 = 0;
var num2 = 0;
var flag1 = true;
btn1.onclick = function () {
	var biaoshi1 = document.getElementsByClassName("biaoshi1");
	if (flag1) {
			for (var i = 0; i < biaoshi1.length; i++) {
				biaoshi1[i].setAttribute("class", "anniu1 anniu biaoshi1");
			}
			num1 = 299 * biaoshi1.length;
		flag1 = false;
	} else{
		for (var i = 0; i < biaoshi1.length; i++) {
			biaoshi1[i].setAttribute("class", " anniu biaoshi1");
		}
		num1 = 0;
		flag1 = true;
		
	}

}
var flag2 = true;

btn2.onclick = function () {
	var biaoshi2 = document.getElementsByClassName("biaoshi2");
	if (flag2) {
			for (var i = 0; i < biaoshi2.length; i++) {
				biaoshi2[i].setAttribute("class", "anniu1 anniu biaoshi2");
			}
			num2 = 299 * biaoshi2.length;
		flag2 = false;
	} else{
		for (var i = 0; i < biaoshi2.length; i++) {
			biaoshi2[i].setAttribute("class", " anniu biaoshi2");
		}
		num2 = 0;
		flag2 = true;
	}
}
	window.onclick = function () {
	sum = num1 + num2;
	$(".footp4").html("¥"+sum + ".00")
}

var selectDiv0 = document.getElementsByClassName("select-ul");
//var xiasanjiao = document.getElementsByClassName("xiasanjiao");
var flag = true;
for (var i = 0; i < selectDiv0.length; i++) {
	selectDiv0[i].a = i;
	selectDiv0[i].onclick = function () {
		if (flag) {
			selectDiv0[this.a].setAttribute("class", "select-ul select-div0");
			flag = false;
		} else{
			selectDiv0[this.a].setAttribute("class", "select-ul");
			flag = true;
		}
	}
	
}
selectDiv0[0].onclick = function () {
	if (flag) {
		selectDiv0[0].setAttribute("class", "select-ul select-div0");
		flag = false;
	} else{
		selectDiv0[0].setAttribute("class", "select-ul");
		flag = true;
	}
}

var liSelect = document.getElementsByClassName("li-select");













