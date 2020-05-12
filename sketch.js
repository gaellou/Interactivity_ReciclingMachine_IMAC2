let bx=70;
let by=70;
let boxWidth = 100;
let boxHeight = 200;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
   // Test if the cursor is over the box
  if (mouseX > bx - boxWidth && mouseX < bx + boxWidth && mouseY > by - boxHeight && mouseY < by + boxHeight) {
    overBox = true;
    if (locked) {
      overBox = false;
    }
  } 
    
  drawMobile()
}

function drawMobile() {
  stroke(0);
  fill(0,0,0,100);
  rect(bx,by,100,200,10);
  stroke(0);
  fill(255,255,255,100);
  rect(bx+5,by+5,90,190,10);
}

function mousePressed() {
  if (overBox) {
    locked = true;
  } else {
    locked = false;
  }
  xOffset = mouseX - bx;
  yOffset = mouseY - by;
}

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
}

function mouseReleased() {
  locked = false;
}