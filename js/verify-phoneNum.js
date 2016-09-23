var phoneInput = document.getElementsByClassName("phone")[0];
var phoneGet = document.getElementsByClassName("phone-get")[0];;
var biaoshi = document.getElementsByClassName("biaoshi")[0];
var time = document.getElementsByClassName("time")[0];
var wenzi = document.getElementsByClassName("wenzi")[0];
var tijiao = document.getElementsByClassName("tijiao")[0];
tijiao.style.top = screen.height-150 + "px";
console.log(screen.height)
//验证手机号

function checkUser(str){
    var
 re = /^1\d{10}$/;
    if(re.test(str)){
        return true;
    }else{
         return false;
    }          
}

var flag = true;
var timer ;
var Tim = 61;
biaoshi.onclick = function (ev) {
	console.log(phoneInput.value);
	if (!phoneInput.value) {
		alert("请输入手机号码");
		return;
	}
	var inde = checkUser(phoneInput.value);	
	if (inde) {
		if (flag) {
			flag = false;	
			biaoshi.setAttribute("class", "biaoshi");
			if (Tim >=61 ) {
				phoneGet.removeAttribute("disabled");
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
						phoneGet.setAttribute("placeholder" , "点击获取验证码");
						Tim = 61;
					}
				},1000)
			}
			wenzi.innerHTML = "重新获取";
			phoneGet.setAttribute("placeholder" , "请输入验证码")
		}		
	}else{
		alert("请输入正确的手机号码")
	}
}
num = 4862;
tijiao.onclick = function () {
	var num0 = phoneGet.value;
	if (num == num0) {
		window.location.href = "";		
	}else{
		alert("请输入正确的验证码!");
	}
}



