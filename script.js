// Canvas Sandbox by Mr. V

// Challenges
// #1 - Add Vertical Movement
// #2 - Make player wrap around the canvas
// #3 - Make player stop at edge of canvas

// Setup Canvas and Graphics Context
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Global Variables
let x = 100;
let y = 100;

let rightKeyPressed = false;
let leftKeyPressed = false;
let upKeyPressed = false;
let downKeyPressed = false;

// Call Draw Function on Page Load
window.addEventListener("load", draw);

function draw() {

  // LOGIC
  if (rightKeyPressed) {
    x += 5;
  }

  if (leftKeyPressed) {
    x += -5;
  }

  if (upKeyPressed){
    y+=5
  }

  if (downKeyPressed){
    y += -5
  }

  if (x-100 > 400){
    x = -100;

  } else if (x + 100 < 0){
    x = 500
  }

  if (y-100 > 400){
    y = -100
  } else if (y + 100 < 0){
    y = 500
  }



  // DRAWING
  // Draw Background
  ctx.fillStyle = "skyblue";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Rectangle
  ctx.fillStyle = "red";
  ctx.fillRect(x, y, 50, 50);

  // Tell draw to run again at 60FPS
  requestAnimationFrame(draw);
}

// EVENT STUFF
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
  console.log(event.keyCode);

  if (event.keyCode === 39) {
    rightKeyPressed = true;
  } else if (event.keyCode === 37) {
    leftKeyPressed = true;
  } else if (event.keyCode === 40){
    upKeyPressed = true;
  } else if (event.keyCode === 38){
    downKeyPressed = true;
  }
}

function keyupHandler(event) {
  if (event.keyCode === 39) {
    rightKeyPressed = false;
  } else if (event.keyCode === 37) {
    leftKeyPressed = false;
  } else if (event.keyCode === 40){
    upKeyPressed = false;
  } else if (event.keyCode === 38){
    downKeyPressed = false;
  }
}