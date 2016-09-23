//轮播图的js
var lunbo = document.getElementById("lunbo");
var lunboCount = document.getElementById("lunbo-count");
var imgArr = lunbo.getElementsByTagName("img");

var timer;
var index = 0;
clearInterval(timer);
var flag = true;
timer = setInterval(function () {
	if (flag) {
		index++;
		scroll();
	}
},1500);	
$("#lunbo").on("touchstart", function (ev) {
	startX = ev.originalEvent.changedTouches[0].pageX;
	ev.preventDefault();
	flag = false;
	clearInterval(timer);
});
$("#lunbo").on("touchend", function (ev) {
	ev.preventDefault();
	endX = ev.originalEvent.changedTouches[0].pageX;
	if (endX - startX > 30) {
		index--;
		scroll();		
	} else if(endX - startX < -30){		
		index++;
		scroll();
	}
	flag = true;
	timer = setInterval(function () {
	if (flag) {
		index++;
		scroll();
	}
},1500);	
});

function scroll () {	
	for (var i = 0;i < imgArr.length;i++) {
		imgArr[i].style.display = "none";
	}
	if (index == 5) {
		index = 0;
	}else if(index == -1){
		index = 4;
	}
	imgArr[index].style.display = "block";
	lunboCount.innerHTML = index+1 +"/5";
}


//文本两行省略

//var shenglue = document.getElementsByClassName("shenglue");
//var arr = [];
//for (var i = 0;i < shenglue.length;i++) {
//	arr[i] = shenglue[i].innerHTML;
//}
//
//
//for (var i = 0;i < shenglue.length;i++) {
//	var wid = shenglue[i].clientWidth;
//	console.log(wid);
//	var fontsize = $(".shenglue").eq(i).css("font-size");
//	var fontCount = Math.floor(wid / parseInt(fontsize));
//	var str = arr[i].substr(0, 2 * fontCount - 3)+ "...";
//	shenglue[i].innerHTML = str;
//}

var jian = document.getElementById("jian");
var jia = document.getElementById("jia");
var buyCount = document.getElementById("buy-count");
var shengyushuliang = document.getElementById("shengyushuliang");
jian.addEventListener("click", function () {
	var num = buyCount.innerHTML - 0;
	if (num > 1) {
		num--;		
	}
	buyCount.innerHTML = num;
});
jia.addEventListener("click", function () {
	var shengyuCount = shengyushuliang.innerHTML.slice(2, -1) - 0;
	var num = buyCount.innerHTML - 0;
	if (num < shengyuCount) {
		num++;		
	}
	buyCount.innerHTML = num;
});
