var close = document.getElementsByClassName("close")[0];
var wrap = document.getElementById("wrap");
var details = document.getElementsByClassName("wrap-open")[0];
var box = document.getElementsByClassName("box1")[0];
var fanhui = document.getElementsByClassName("fanhiu")[0];
close.onclick =  function () {
	console.log("123")
	box.style.right = "-100%";	
	setTimeout(function () {
		wrap.style.display = "none";		
	},800)
	
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
	wrap.style.display = "block";	
	setTimeout(function () {
		box.style.right = "0";		
	},500)
	
}