var contentDiv = document.getElementById("content");
var img = contentDiv.querySelectorAll("img");
var box0 = document.getElementsByClassName("box0")[0];
var show = document.getElementsByClassName("show");
box0.style.height = img[0].offsetHeight + 45+"px";
console.log(img[0].offsetWidth);
show[0].style.top = img[0].offsetHeight -40+"px";
	var left = 0;
	var timer2 ;
	var index = 1;
	show[0].innerHTML = "1/5";	
	var timer1= setInterval(move,5);
	function move(){
		left  -= 1;
			if (left % (img[0].offsetWidth) == 0){
				index++;
				if (index >=5) {
					index = 5;
				}
				show[0].innerHTML = index +"/" + "5";
				
				clearInterval(timer1);
				clearTimeout(timer2);
				timer2 = setTimeout(function(){
					timer1 = setInterval(move,5);
				} ,3000);
			}
		if(left <= -(contentDiv.offsetWidth)){
			left = 0;
			index = 1;
			show[0].innerHTML = "1/5";			
		}
		contentDiv.style.left = left + "px";
	}	
var jian = document.getElementsByClassName("jian")[0];
var jia = document.getElementsByClassName("jia")[0];
var num = document.getElementsByClassName("num")[0];
var sum = 1;
jian.onclick = function () {
	sum -=1;
	if (sum <= 0) {
		sum = 0;
	}
	num.innerHTML = sum;
}
jia.onclick = function () {
	sum +=1;
	num.innerHTML = sum;
}

var biaoshi = document.getElementsByClassName("biaoshi");
for (var i = 0; i < biaoshi.length; i++) {
	biaoshi[i] = i;
	biaoshi[i].onclick = function () {
		biaoshi[0].setAttribute("class", "biaoshi");
		biaoshi[1].setAttribute("class", "biaoshi");
		biaoshi[2].setAttribute("class", "biaoshi");
		this.setAttribute("class", "biaoshi xuan");
	}
}

var address = document.getElementById("address");
address.onclick = function () {
	setTimeout(function () {
		box.style.right = "0";		
	},100)
	wrap.style.display = "block";
}

var nowPay = document.getElementsByClassName("now-pay")[0];
nowPay.onclick = function () {
	window.location.href = "write-order.html";
}
var shopCart = document.getElementsByClassName("shop-cart")[0];
shopCart.onclick = function () {
	window.location.href = "shoping-cart.html";
}

var Btn = document.getElementsByTagName("button")[1];
Btn.onclick = function() {
	window.location.href = "store-details.html";
}



































