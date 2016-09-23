var footP = document.getElementById("foot");
var ul = document.querySelector("ul");
footP.onclick = function () {
	var imgArr = ["99drink.png", "128drink.png"];
	var spanArr = ["¥99.0", "¥128"];
	for (var i = 0 ; i < 2 ; i++) {
		var li = document.createElement("li");
		ul.appendChild(li);
		var a = document.createElement("a");
		a.href = "###";
		var img = document.createElement("img");
		img.src = "img/indexImg/"+ imgArr[i] ;
		a.appendChild(img);
		li.appendChild(a);
		var span = document.createElement("span");
		span.innerText = spanArr[i];
		span.setAttribute("class", "price");
		li.appendChild(span);
		
	}
}