// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// const ctx = document.getContext("2d", "animation");
var canvas = document.createElement('canvas');
const ctx = canvas.getContext("2d");

const BACKGROUND_COLOR = "white";

var mouseX, mouseY;

const HEART_PATH = "M46.5897 90C32.2617 82.5795 21.668 75.8216 13.4112 62.0208C9.00167 54.6506 4.91717 47.0127 2.69169 38.6607C-0.54097 26.5288 0.793624 10.3852 12.9895 3.52983C28.1392 -4.9859 49.2008 9.31642 45.2853 26.7698C45.1636 27.3123 43.6421 30.6293 44.4297 28.79C48.6716 18.8834 61.263 9.74938 71.1476 6.48662C86.7877 1.32402 97.7846 9.63273 97.1912 26.0637C96.7624 37.9369 88.4709 51.895 80.1949 60.0373C70.4344 69.6401 57.315 75.4033 50.4294 87.5728";
const SPIRAL_PATH = "M55.0706 52.3425 C50.7432 53.5445 46.6801 55.227 45.5864 49.797C44.9342 46.5587 46.0803 43.8303 48.9537 42.12C60.557 35.2137 69.7942 49.3561 64.2963 59.6783C60.373 67.0441 51.9742 70.8717 43.9331 70.8435C32.9838 70.805 30.1659 58.4863 31.8185 49.2822C33.62 39.2488 41.6651 29.5934 52.7712 30.9932C66.7785 32.7586 75.3694 49.0543 71.3579 61.9149C67.4228 74.5305 58.2785 85.7482 45.3139 89.5685C38.6993 91.5177 30.526 92.3787 23.7354 90.8019C13.8653 88.51 9.14429 78.6332 6.93529 69.606C3.5431 55.7438 12.3064 41.8645 21.8317 32.5193C31.7501 22.7884 44.0068 17.8495 57.7353 22.4623C70.5224 26.7588 73.195 39.5421 72.3209 51.5915C70.8469 71.9107 59.2821 88.729 43.3618 101.061C28.8636 112.291 5.54663 110.793 2.169 89.8895C0.0943269 77.0499 2.31608 62.9136 6.8061 50.8123C10.6611 40.4224 16.6368 30.5412 23.913 22.1959C38.7061 5.22938 32.2335 16.2863 48.2027 1"
const heartPathSections = HEART_PATH.split(" ");
const spiralPathSections = SPIRAL_PATH.split(" ");



let bgImage = new Image(300, 300);
bgImage.src = 'gridpaper.jpg';
bgImage.crossorigin = "anonymous";
let backgroundPattern = ctx.createPattern(bgImage, 'repeat');

function drawBackground() {
    let oldColor = ctx.fillColor;
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = backgroundPattern;
    ctx.fill();
    ctx.fillStyle = oldColor;
}

let startTime;
let totalElapsed;
let activeDoodles;
function draw(timestamp) {
    if(startTime === undefined) {
        startTime = timestamp;
        activeDoodles = [new Doodle(startTime)];
    }
    totalElapsed = timestamp - startTime;

    drawBackground();

    // render and clean up finished doodles
    for (var i = activeDoodles.length - 1; i >= 0; i--) {
        let doodle = activeDoodles[i];
        doodle.render(totalElapsed);

        // clean up finished
        if(doodle.finished){
            activeDoodles.splice(i, 1);
        }
    }
    
    document.body.style.background = "url(" + canvas.toDataURL() + ")";
    requestAnimationFrame(draw);
}

document.addEventListener("click", () => {
    console.log(document.documentElement.scrollHeight);
    activeDoodles.push(new Doodle(totalElapsed, mouseX, mouseY))
})

function Doodle(startTime, x, y) {
    let source = SPIRAL_PATH; // TODO: pick randomly
    this.sourceSections = source.split(" ");
    this.x = x; //mouseX;
    this.y = y; //mouseY;
    this.finished = false;
    this.lifespan = 2000;

    this.render = function(totalElapsed) {
        let elapsed = totalElapsed - startTime;
        if(elapsed > this.lifespan) {
            this.finished = true;
        }

        let nSections = Math.min(
                        Math.floor(this.sourceSections.length * elapsed / (this.lifespan / 2)),
                        this.sourceSections.length);

        let subpathString = this.sourceSections.slice(0, nSections).join(" ");
        let subpathOrigin = new Path2D(subpathString);

        let m = new DOMMatrix([
            1, 0, 0, 1, this.x, this.y
        ]);
        let subpath = new Path2D()
        subpath.addPath(subpathOrigin, m);
        ctx.stroke(subpath);
    }
}

const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = document.documentElement.scrollHeight;
    document.documentElement.scrollHeight
    console.log(canvas.height);
}


window.addEventListener('resize', resize)
requestAnimationFrame(() => {
    resize();
    draw();
})

window.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
})