//canvas画出图标
window.onload = function(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	context.moveTo(45,39);
	context.lineTo(45,71);
	context.lineTo(72,55);
	context.lineTo(45,39);
	context.fillStyle = "rgb(255,255,255)";
	context.fill();
	context.strokeStyle = "rgb(255,255,255)"
	context.stroke();
}



function hideDiv(){
    var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var mid1 = document.getElementById("mid1");
	var right1 = document.getElementById("right1");
	var line3 = document.getElementById("line3");
	var form = document.getElementById("form");
    if(browserWidth < 800){
    	mid1.style.display = "none";
		right1.style.display = "none";
		line3.style.display = "none";
		form.style.display = "none";
	} 
	else {
	    mid1.style.display = "block";
	    right1.style.display = "block";
	    line3.style.display = "block";
	    form.style.display = "block";
		}
	}
	var timer = null;
	window.onresize = function(){
	    timer && clearTimeout(timer);
	    setTimeout(function(){
	        hideDiv();
	    }, 200);
	}
hideDiv();







//点击文本框预设value消失
$("input:first").focusin(function(){
	$(":text:first").val("")
})
$("input:first").focusout(function(){
	$(":text:first").val("Your Name")
})
$("input:eq(1)").focusin(function(){
	$(":text:eq(1)").val("")
})
$("input:eq(1)").focusout(function(){
	$(":text:eq(1)").val("Email")
})
$("input:eq(2)").focusin(function(){
	$(":text:eq(2)").val("")
})
$("input:eq(2)").focusout(function(){
	$(":text:eq(2)").val("Password")
})
