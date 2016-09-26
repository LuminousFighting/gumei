var left = document.getElementsByClassName("left");
var ul_left = document.getElementsByClassName("ul-left")[0];
var right = document.getElementsByClassName("right")[0];
var ul_right = document.getElementsByClassName("ul-right")[0];
var alcArr = ["一键选酒", "葡萄酒", "白酒",  "洋酒", "啤酒", "黄酒/养生", "酒周边", "其他"];
for (var i = 0; i < alcArr.length; i++) {
	var li = document.createElement("li");
	var span = document.createElement("span");
	span.innerText = alcArr[i];
	li.appendChild(span);
	ul_left.appendChild(li);
	li[i] = i;
}
var li = document.getElementsByClassName("ul-left")[0].querySelectorAll("li");
for (var i = 0; i < li.length; i++) {	
	li[i] = i;
	li[i].onclick = function () {		
		for (var i = 0; i < li.length; i++) {
			li[i].setAttribute("class", "");
		}	
		this.setAttribute("class", "bg");		
		creatRight(rightArr,Arr1);		
	}	
}
//封装函数
var rightArr = ["产区", "类型", "其他"];
var appellationArr = ["波尔多", "勒艮第", "香槟", "罗纳河谷","南澳", "西澳", "东南奥", "新南威尔士", "维多利亚", "莫舍尔", "莱茵高", "莱茵黑森","法尔茨"];
var typeArr = ["红葡萄酒", "白葡萄酒", "桃红葡萄酒","甜白葡萄酒","贵腐酒","其他起泡酒","香槟","冰酒","加强葡萄酒"];
var elseArr = ["勒艮第", "香槟", "罗纳河谷","莱茵高", "莱茵黑森"];
var Arr1 = [appellationArr, typeArr,elseArr];
function creatRight(arr,arr2) {
	ul_right.innerHTML = "";
	for (var i = 0; i < arr.length; i++) {
		var li = document.createElement("li");
		var p = document.createElement("p");
		p.innerText = arr[i];
		li.appendChild(p);
		ul_right.appendChild(li);		
		var ul = document.createElement("ul")		
		li.appendChild(ul);
		for (var k = 0; k < arr2[i].length; k++) {				
			var li2 = document.createElement("li");
			li2.innerText = arr2[i][k];
			ul.appendChild(li2);	
			li2.onclick = function () {
				console.log(this)
			}
		}			
	}
}

