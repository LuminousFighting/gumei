var jieshao = document.getElementById("jieshao");
var canshu = document.getElementById("canshu");
var contentjiashao = document.getElementById("content-jieshao");
var contentcanshu = document.getElementById("content-canshu");

var flag = true;
var photoBox = document.getElementById("ring-box");


contentjiashao.onclick = function () {	
	photoBox.setAttribute("style", "visibility:initial");
}
photoBox.onclick = function (ev) {
	photoBox.setAttribute("style", "visibility:hidden")
	ev.stopPropagation()
}
jieshao.onclick = function () {
	jieshao.style.backgroundColor = "#fff";
	canshu.style.backgroundColor = "#ccc";
	contentjiashao.style.display = "block";
	contentcanshu.style.display = "none";
};
canshu.onclick = function () {
	jieshao.style.backgroundColor = "#ccc";	
	canshu.style.backgroundColor = "#fff";
	contentjiashao.style.display = "none";
	contentcanshu.style.display = "block";
};
