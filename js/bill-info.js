var sel = document.getElementsByClassName("select");
var dis = document.getElementsByClassName("dis");
var biaoshi = document.getElementsByClassName("biaoshi");
var biaoshi1 = document.getElementsByClassName("biaoshi1");
var inf = document.getElementsByClassName("info1");
var queding = document.getElementsByClassName("queding")[0];
sel[0].onclick = function () {	
	dis[0].setAttribute("class", "select0 dis");
	dis[1].setAttribute("class", " dis");
}
sel[1].onclick = function () {	
	dis[1].setAttribute("class", "select0 dis");
	dis[0].setAttribute("class", " dis");
}
biaoshi[0].onclick = function () {
	biaoshi[0].setAttribute("class", "show1 selected biaoshi");
	biaoshi[1].setAttribute("class", "show2  biaoshi");
	for (var i = 0; i < inf.length; i++) {
		inf[i].style.display = "block"
	}
	queding.style.bottom = "";
}	
biaoshi[1].onclick = function () {
	biaoshi[1].setAttribute("class", "show1 selected biaoshi");
	biaoshi[0].setAttribute("class", "show1  biaoshi");
	for (var i = 0; i < inf.length; i++) {
		inf[i].style.display = "none"
	}
	queding.style.bottom = "0";
}
biaoshi1[0].onclick = function () {
	biaoshi1[0].setAttribute("class", "show1 selected biaoshi1");
	biaoshi1[1].setAttribute("class", "show2 biaoshi1");
}
biaoshi1[1].onclick = function () {
	biaoshi1[1].setAttribute("class", "show1 selected biaoshi1");
	biaoshi1[0].setAttribute("class", "show2 biaoshi1");
}
