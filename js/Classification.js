var listBut = document.getElementsByClassName("listbut")[0];
var ListShow = document.getElementsByClassName("listShow")[0];
var Btn = document.getElementsByClassName("button")[0];
var aside = document.getElementById("aside");
var center = document.getElementById("center");
var nav = document.getElementById("nav");
var log = document.getElementById("log");
var listLi = document.getElementsByClassName("listLi");
var imgArr = document.getElementById("calssInfo").querySelectorAll("img");


var flag = false;
listBut.onclick = function (ev) {
	if (flag) {
		ListShow.style.display = "none";	
		flag = false;
	} else{
		ListShow.style.display = "block";		
		flag = true;
	}
}
for (var i = 0; i < listLi.length; i++ ) {
	this.a = i;
	listLi[this.a].onclick = function (ev) {
		console.log("点击了");
		ev.cancelBubble = true;
	}
}

Btn.onclick = function (ev) {
	if (flag) {
		aside.style.display = "none";	
		center.style.right = 0;
		nav.style.right = 0;
		log.style.right = 0;
		flag = false;
	} else{
		aside.style.display = "block";	
		center.style.right = "74%";
		nav.style.right = "74%";
		log.style.right = "74%";
		flag = true;
	}	
}