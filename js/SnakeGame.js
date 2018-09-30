var canvas = document.getElementById("myCanvas");
canvas.width = 500;
canvas.height = 250;
var canvascontext = canvas.getContext('2d');

class Food {
    constructor(xdir, ydir) {
        this.xdir = xdir;
        this.ydir = ydir;
    }
}
class Snake {
    constructor(xdir, ydir, xspeed, yspeed) {
        this.xdir = xdir;
        this.ydir = ydir;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
    }

    getDrawing() {
        canvascontext.fillRect(this.xdir, this.ydir, 10, 10);
    }
    getMotion() {
        this.xdir = this.xdir + this.xspeed;
        this.ydir = this.ydir + this.yspeed;
        if (this.xdir == canvas.width) {
            this.xdir = 0;
        }
        else if (this.xdir == 0) {
            this.xdir = canvas.width;
        };
        if (this.ydir == canvas.height) {
            this.ydir = 0;
        }
        else if (this.ydir == 0) {
            this.ydir = canvas.height;
        };
    }

    getDirection(x, y) {
        const speed = 2;
        this.xspeed = x * speed;
        this.yspeed = y * speed;
    }
}

let snake1;
let food1;
function init() {
    snake1 = new Snake(50, 50, 0, 0);
    var xfoodpos = Math.round(Math.random() * 100);
    var yfoodpos = xfoodpos;
    food1 = new Food(xfoodpos,yfoodpos);
}
function animate() {
    canvascontext.clearRect(0, 0, canvas.width, canvas.height);
    snake1.getDrawing();
    snake1.getMotion();
    requestAnimationFrame(animate);
}
function navigateSnake() {
    var x = event.which || event.keyCode;
    if (x === 119) {
        snake1.getDirection(0, -1);
    }
    else if (x === 115) {
        snake1.getDirection(0, 1);
    }
    else if (x === 97) {
        snake1.getDirection(-1, 0);
    }
    else if (x === 100) {
        snake1.getDirection(1, 0);
    }
}
init();
animate();
document.onkeypress = function () { navigateSnake() };



