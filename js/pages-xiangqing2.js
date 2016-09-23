var jieshao = document.getElementById("jieshao");
var canshu = document.getElementById("canshu");
var contentjiashao = document.getElementById("content-jieshao");
var contentcanshu = document.getElementById("content-canshu");

jieshao.addEventListener("click", function () {
	jieshao.style.backgroundColor = "#fff";
	canshu.style.backgroundColor = "#ccc";
	contentjiashao.style.display = "block";
	contentcanshu.style.display = "none";
});
canshu.addEventListener("click", function () {
	jieshao.style.backgroundColor = "#ccc";	
	canshu.style.backgroundColor = "#fff";
	contentjiashao.style.display = "none";
	contentcanshu.style.display = "block";
});
