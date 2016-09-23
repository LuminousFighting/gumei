var foot = document.getElementById("foot");
var sandian = document.getElementsByClassName("sandian")[0];
var flag = true;
sandian.onclick = function () {
	if (flag) {
		foot.style.display = "block";
		flag = false;
	} else{
		foot.style.display = "none";
		flag = true;
	}
}