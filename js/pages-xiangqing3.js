var contentTop = document.getElementById("content-top");
var contentA = contentTop.getElementsByTagName("a");
for (var i = 0;i < contentA.length;i++) {
	contentA[i].xueba = i;
	contentA[i].addEventListener("click", function () {
		for (var j = 0;j < contentA.length;j++) {
			contentA[j].style.backgroundColor = "#ffebeb";
			contentA[j].style.color = "#999";
		}
		contentA[this.xueba].style.backgroundColor = "#FF0000";
		contentA[this.xueba].style.color = "#fff";
	});
}