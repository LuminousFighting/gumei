
var obj = JSON.parse(localStorage["address"]);
console.log(obj);
	
var show = document.getElementById("show");

for (var i = 0; i < obj.length; i++) {
	var li = document.createElement("li");
	show.appendChild(li)
	var div = document.createElement("div");
	div.setAttribute("class" , "select2 liselect");
	li.appendChild(div);
	var div0 = document.createElement("div");
	div.appendChild(div0);
	var p = document.createElement("p");
	p.innerHTML = obj[i].user
	var span = document.createElement("span");
	
	function phoneNum (str,frontLen,endLen) {
	var len = str.length-frontLen-endLen;
	var xing = '';
	for (var i=0;i<len;i++) {
		xing+='*';
	}
			span.innerHTML = (str.substring(0,frontLen)+xing+str.substring(str.length-endLen));
	}	
	phoneNum(obj[i].phonnum , 3, 4);
	
	p.appendChild(span);
	li.appendChild(p);
	//地址栏
	var divaddress = document.createElement("div");
	divaddress.setAttribute("class", "address");
	li.appendChild(divaddress);
	var spanaddress = document.createElement("span");
	spanaddress.innerHTML = obj[i].selectLocation + obj[i].detailsaddress;
	divaddress.appendChild(spanaddress);
	//编辑按钮
	var divanniu = document.createElement("div");
	divanniu.setAttribute("class" , "bianji");
	li.appendChild(divanniu);
	var a = document.createElement("a");
	a.href = "address.html";
	a.innerHTML = "编辑";
	divanniu.appendChild(a);
	
	
}

var liselect = document.getElementsByClassName("liselect");
var moren = document.getElementsByClassName("moren")[0];
var flag = true;
for (var i = 0 ; i <= liselect.length ; i++) {
	liselect[i] = i;
	moren[i] = i;
	liselect[i].onclick = function () {
		var liselect = document.getElementsByClassName("liselect");
		for (var i = 0; i < liselect.length; i++) {
			liselect[i].setAttribute("class", "select2 liselect")			
		}
		this.setAttribute("class", "select liselect");
		
	}
}



