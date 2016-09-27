var SelDiv = document.getElementById("select")
var CDiv = SelDiv.querySelector("div");
var phoneInput = document.getElementById("phone");

var moren = document.getElementById("select");
var Btn = document.getElementsByTagName("button");



var obj = JSON.parse(localStorage["address"]);
	console.log(obj);


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


	
		Btn[0].onclick = function () {
			var info = document.getElementsByClassName("info");	
			if (info[0].value&&info[1].value&&info[2].value&&info[3].value) {
				var 	address = {
					user: info[0].value,
					phonnum: info[1].value,
					selectLocation: info[2].value,
					detailsaddress: info[3].value,
					moren: true
				};
				var obj = JSON.parse(localStorage["address"]);
				obj.push(address);
				localStorage["address"] = JSON.stringify(obj);
				window.location.href = "address-shouhuo.html";
				
		var obj = JSON.parse(localStorage["address"]);
	console.log(obj);
			
		}else{
			alert("请填写完整的联系方式");
		}
		}
	
	
