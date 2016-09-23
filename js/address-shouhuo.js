var liselect = document.getElementsByClassName("liselect");
var flag = true;
for (var i = 0 ; i <= liselect.length ; i++) {
	this.a = i;
	liselect[this.a].onclick = function (ev) {
			liselect[0].setAttribute("class", "select2 liselect");
			liselect[1].setAttribute("class", "select2 liselect");
			liselect[2].setAttribute("class", "select2 liselect");
			this.setAttribute("class", "select liselect");
	}
}