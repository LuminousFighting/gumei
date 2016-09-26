var password1 = document.getElementsByClassName("password1")[0];
var password2 = document.getElementsByClassName("password2")[0];
var password3 = document.getElementsByClassName("password3")[0];
var tijiao  = document.getElementsByClassName("tijiao")[0];
var close = document.getElementsByClassName("close")[0];
close.onclick = function () {
	window.location.href = "logo.html"
}
var oldpassword = "123456abc";
tijiao.onclick = function () {
	if (password1.value == oldpassword) {
		if (password2.value == password3.value) {
			window.location.href = "";
		}else{
			alert("两次输入的密码不相同,请重新输入");
		}
	} else {
		alert("输入的旧密码不正确,请重新输入");
		
	}
}