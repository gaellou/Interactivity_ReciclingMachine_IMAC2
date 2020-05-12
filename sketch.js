let bx=700;
let by=70;
let boxWidth = 100;
let boxHeight = 200;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let openMachine = false;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
 
  draggleMobile();
  drawBorne();
  drawMobile();
  checkQRCode();
}

function checkQRCode(){
  if(bx - 255 <5 && by - 300< 5){
    openMachine=true;
  }
}

function drawBorne() {
  let c = color(77,138,111);
  fill(c); 
  rect(50, 20, 400, 520); 
  fill('black');
  rect(130,300,40,200);
  rect(330,300,40,200);
  circle(147, 230, 50);
  circle(347, 230, 50);
  fill(190,247,242);
  rect(110,90,270,50)
  rect(110,150,70,45);
  rect(310,150,70,45);
  fill('white')
  rect(225,300,50,50);
}

function draggleMobile(){
    // Test if the cursor is over the box
  if (mouseX > bx - boxWidth && mouseX < bx + boxWidth && mouseY > by - boxHeight && mouseY < by + boxHeight) {
    overBox = true;
    if (locked) {
      overBox = false;
    }
  } 
}


function drawMobile() {
  stroke(0);
  fill(0,0,0,100);
  rect(bx,by,boxWidth,boxHeight,10);
  stroke(0);
  fill(255,255,255,100);
  rect(bx+5,by+5,boxWidth-10,boxHeight-10,10);
  if(openMachine==true){
    fill('white')
    rect(bx+25,by+25,50,50);
  }
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