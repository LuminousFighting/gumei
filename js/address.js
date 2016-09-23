var SelDiv = document.getElementById("select")
var CDiv = SelDiv.querySelector("div");
var phoneInput = document.getElementById("phone");
var flag = true;
SelDiv.onclick = function () {
	if (flag) {
		CDiv.style.right = 0;
		CDiv.style.left = "";
		SelDiv.style.background = "gainsboro";
		flag = false;
	} else{
		CDiv.style.left = 0;
		CDiv.style.right = "";
		SelDiv.style.background = "#C31734";
		flag = true;
	}
}

function phoneNum (str,frontLen,endLen) {
	var len = str.length-frontLen-endLen;
	var xing = '';
	for (var i=0;i<len;i++) {
		xing+='*';
	}
	phoneInput.value = (str.substring(0,frontLen)+xing+str.substring(str.length-endLen));
}
//var str = "13645681538";
//phoneNum(str, 3, 4);
