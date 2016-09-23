var info1 = document.getElementsByClassName("info1");
var info2 = document.getElementsByClassName("info2");
var info3 = document.getElementsByClassName("info3");

for (var i = 0 ; i < info1.length ; i++) {
	info1[i] = i;
	info1[i].onclick = function (ev) {	
		for (var j = 0; j < info1.length; j++) {
			info1[j].setAttribute("class", "info1");		
		}		
		this.setAttribute("class", "info1 biaoshi");
	}
}
for (var i = 0 ; i < info2.length ; i++) {
	info2[i] = i;
	info2[i].onclick = function (ev) {	
		for (var j = 0; j < info2.length; j++) {
			info2[j].setAttribute("class", "info2");		
		}		
		this.setAttribute("class", "info2 biaoshi");
	}
}
for (var i = 0 ; i < info3.length ; i++) {
	info3[i] = i;
	info3[i].onclick = function (ev) {	
		for (var j = 0; j < info3.length; j++) {
			info3[j].setAttribute("class", "info3");		
		}		
		this.setAttribute("class", "info3 biaoshi");
	}
}