/*function show(){
	if (!document.getElementById) {return false;}
	if (!document.getElementById("link")) {return false;}
	var link = document.getElementById("link");
	link.onclick = function disp(){
		var dis = document.getElementById("dis");
		dis.style.display = "block";
	}
}*/
document.getElementById("link").onmouseover = show;
function show(){

	document.getElementById("ull").style.display = "block";
}
document.getElementById("link").onmouseout = hiden;
function hiden(){
	document.getElementById("ull").style.display = "none";
}
/*
function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
addLoadEvent(show);*/