
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// const ctx = document.getContext("2d", "animation");
var canvas = document.createElement('canvas');
const ctx = canvas.getContext("2d");

var mouseX, mouseY;
let backgroundPattern;
function initBackgroundPattern() {
    let bgImage = new Image(300, 300);
    bgImage.src = 'gridpaper.jpg';
    bgImage.crossorigin = "anonymous";
    backgroundPattern = ctx.createPattern(bgImage, 'repeat');
}

function drawBackground() {
    if(!backgroundPattern) {
        console.log("INIT");
        initBackgroundPattern();
    }
    let oldColor = ctx.fillColor;
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = backgroundPattern;
    ctx.fill();
    ctx.fillStyle = oldColor;
}

let universeBirthday;
let totalElapsed;
let activeDoodles;
function draw(nowTime) {
    if(universeBirthday === undefined) {
        universeBirthday = nowTime;
        activeDoodles = [new Doodle(universeBirthday)];
    }
    totalElapsed = nowTime - universeBirthday;

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
    let source = DOODLE_PATHS[Math.floor(Math.random() * DOODLE_PATHS.length)]; // TODO: pick randomly
    this.pathList = source.pathList;
    this.speed = source.speed || 60 / 1000;
    this.x = x;
    this.y = y;
    this.angle = Math.random() * 360;
    this.totallyComplete = false;
    this.ageOfDeath;
    this.finished = false;
    this.nCompletePaths = 0;
    this.decayTime = 1000; // always 1 second
    this.ageSegmentStarted = 0;

    this.render = function(totalElapsed) {
        let myCurrentAge = totalElapsed - startTime;

        if(this.ageOfDeath && this.ageOfDeath <= myCurrentAge) {
            this.finished = true;
        }
        if(!this.ageOfDeath && this.nCompletePaths == this.pathList.length) {
            this.totallyComplete = true;
            this.ageOfDeath = myCurrentAge + this.decayTime;
        } 
        
        for (var i = 0; i < this.pathList.length; i++) {
            let pathString = this.pathList[i];
            let pathToDraw = new Path2D();
            let m = (new DOMMatrix())
                .translate(this.x, this.y)
                .rotate(this.angle);

            // if we're gonna draw something, it might as well be the whole path
            let pathToDrawAtOrigin = new Path2D(pathString);

            // unless it's started but not complete
            if(this.nCompletePaths == i) {
                // this path is started but not complete
                let segmentAge = myCurrentAge - this.ageSegmentStarted;
                let nSegments = Math.floor(segmentAge * this.speed);
                let pathSegments = pathString.split(" ");
                if(nSegments >= pathSegments.length) {
                    // finished this segment, on to the next
                    this.nCompletePaths += 1;
                    this.ageSegmentStarted = myCurrentAge;
                } else {
                    // replace the complete path with a subpath
                    let subpathString = pathSegments.slice(0, nSegments).join(" ");
                    pathToDrawAtOrigin = new Path2D(subpathString);
                }
            }

            // if we've touched this path yet
            if(this.nCompletePaths >= i) {
                pathToDraw.addPath(pathToDrawAtOrigin, m);
                ctx.stroke(pathToDraw);    
            }
        }
        
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