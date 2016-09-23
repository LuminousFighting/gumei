var close = document.getElementsByClassName("close")[0];
var wrap = document.getElementById("wrap");
var details = document.getElementsByClassName("wrap-open")[0];
var box = document.getElementsByClassName("box")[0];
var fanhui = document.getElementsByClassName("fanhiu")[0];
close.onclick =  function () {
	console.log("123")
	setTimeout(function () {
		wrap.style.display = "none";		
	},800)
	box.style.right = "-100%";	
}
fanhui.onclick =  function () {
	console.log("123")
	setTimeout(function () {
		wrap.style.display = "none";		
	},800)
	box.style.right = "-100%";	
}
details.onclick = function () {
	console.log("321");
	setTimeout(function () {
		box.style.right = "0";		
	},100)
	wrap.style.display = "block";	
}