var Btn = document.getElementsByTagName("button")[0];
var ale = document.getElementById("bg");
var close = document.getElementsByClassName("close")[0];

Btn.onclick = function () {
	ale.style.display = "block";
}
close.onclick = function () {
	ale.style.display = "none";
}