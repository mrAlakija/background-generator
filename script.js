// javascript to change the background of a page using color picker

var h3 = document.querySelector("h3"); //get the h3 element
var color1 = document.querySelector("#color1"); //get the first color
var color2 = document.querySelector("#color2"); //get the first color
var body = document.querySelector("body"); //get the body of the page

function setGradient() {
	// set the graident color of the body 
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";
	h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient); 

color2.addEventListener("input", setGradient);
