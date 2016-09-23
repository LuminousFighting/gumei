var phoneInput = document.getElementsByClassName("phone")[0];
var biaoshi = document.getElementsByClassName("biaoshi")[0];
var time = document.getElementsByClassName("time")[0];
var wenzi = document.getElementsByClassName("wenzi")[0];
var tijiao = document.getElementsByClassName("tijiao")[0];



var flag = true;
var timer ;
var Tim = 61;
biaoshi.onclick = function (ev) {
	console.log("123")
	phoneInput.setAttribute("placeholder", "请输入验证码")
		if (flag) {
			flag = false;	
			biaoshi.setAttribute("class", "biaoshi");
			if (Tim >=61 ) {
				Tim--;			
				timer = setInterval(function () {	
					time.innerHTML = Tim +"s后";
					Tim--;				
					if (Tim < -1) {
						flag = true;
						clearInterval(timer);
						biaoshi.setAttribute("class", "biaoshi bg")		
						wenzi.innerHTML = "获取验证码";
						time.innerHTML = "";
						Tim = 61;
					}
				},1000)
			}
			wenzi.innerHTML = "重新获取";
		}	
}
num = 5862;
tijiao.onclick = function () {
	console.log("123")
	var num0 = phoneInput.value;
	if (num == num0) {
		window.location.href = "";		
	}else{
		alert("请输入正确的验证码!");
	}
}