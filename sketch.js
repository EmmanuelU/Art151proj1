var PosX = 0;
var PosY = 0;
var squareX;
var squareY;
let speed = 15;
let speedy = 20;



function setup() {
    createCanvas(windowWidth, windowHeight);
    PosX = random(0, windowWidth);
    PosY = random(0, windowHeight);
    squareX = random(0, 15);
    squareY = random(0, 15);
    squareSize = random(0, 100);

    alert("Help: Press ARROWS for color options, ENTER for rainbow. Press BACKSPACE to stop.");
}

function draw() {

    let r1 = map(mouseY, 0, width, 0, height);
    let r2 = map(mouseX, 0, width, 0, height);
    translate(PosX, PosY);
    fill(0);
    stroke(126);
    if (keyCode === ENTER) {
        fill(random(0, 255), random(0, 255), random(0, 255));
    }
    if (keyCode === RIGHT_ARROW) {
        fill(255, 0, 0);
    } else if (keyCode === DOWN_ARROW) {
        fill(255, 255, 255);
    }
    if (keyCode === LEFT_ARROW) {
        fill(0, 0, 255);
    } else if (keyCode === UP_ARROW) {
        fill(0, 0, 0);
    } else if (keyCode == BACKSPACE) {
      noloop();
    }

    square(squareX, squareY, squareSize);

    if (PosX > windowWidth || PosX < 25) {
        speed = speed * -1;

    }
    if (PosY > windowHeight - 25 || PosY < 25) {
        speedy = speedy * -1;

    }

    PosX = PosX + speed;
    PosY = PosY + speedy;

}