a = document.getElementById("1");
b = document.getElementById("2");
c = document.getElementById("3");
d = document.getElementById("4");
e = document.getElementById("5");
f = document.getElementById("6");
g = document.getElementById("7");
h = document.getElementById("8");
i = document.getElementById("9");


function rotateImage(el){
	el.classList.toggle("rotate");
	el.classList.add("rotate");
}
function rotateImage2(el){
	el.classList.toggle("rotate2");
	el.classList.add("rotate2");
}
function rotateImage3(el){
	el.classList.toggle("rotate3");
	el.classList.add("rotate3");
}
function checkImage(el){
	if(a.src.match("images/1.png") && b.src.match("images/4.png") && c.src.match("images/7.png") && d.src.match("images/2.png") && e.src.match("images/5.png")&& f.src.match("images/8.png") && g.src.match("images/3.png") && h.src.match("images/6.png") && i.src.match("images/9.png")){
		console.log("You Win!");
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
		d.classList.add("opaque");
		e.classList.add("opaque");
		f.classList.add("opaque");
		g.classList.add("opaque");
		h.classList.add("opaque");
		i.classList.add("opaque");
	}
}	
