let colorElements = document.getElementsByClassName('color-hover');
const colors = ["#1d781d", "#005555", "#1978d4", "#1460aa", "#0000b5", "#d25852", "#b200fd", "#c0392b", "#e63022"]

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}


let backgroundColor = "#3d3d3d";


for (var i = 0; i < colorElements.length; i++) {
	let element = colorElements[i];

	element.addEventListener("mouseover", ()=>{
		backgroundColor = element.style.color;
		element.style.color = getRandomColor();
	})

	element.addEventListener("mouseout", ()=>{
		element.style.color = backgroundColor;
	})
}