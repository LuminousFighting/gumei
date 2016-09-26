var username = document.getElementsByClassName("username")[0];
var password = document.getElementsByClassName("password")[0];
var denglu = document.getElementsByClassName("denglu")[0];
var register = document.getElementsByClassName("register")[0];
var forget = document.getElementsByClassName("forget")[0];

var userTest = "123abc";
var passwordTest = "123456abc";

denglu.onclick = function () {
	if (username.value) {
		if (password.value) {
			if (username.value == userTest && password.value == passwordTest) {
				window.location.href = "meCenter.html";
			} else{
				alert("用户名或密码错误")
			}
		} else{
			alert("请输入密码");
		}
	}else{
		alert("请输入用户名");
	}
}
forget.onclick = function () {
	window.location.href = "password-change.html"
}