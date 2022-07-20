let colorElements = document.getElementsByClassName('color-hover');
const colors = ["rgb(104,175,252)", "rgb(99,129,35)", "rgb(216,47,138)", "rgb(173,213,31)", "rgb(114,79,226)", "rgb(20,229,75)", "rgb(219,43,238)", "rgb(136,217,141)", "rgb(195,55,51)", "rgb(84,215,235)", "rgb(121,85,87)", "rgb(28,152,32)", "rgb(209,150,226)", "rgb(239,151,45)", "rgb(60,93,160)", "rgb(221,198,92)", "rgb(29,104,110)", "rgb(238,146,146)", "rgb(141,99,10)", "rgb(208,195,198)"]

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