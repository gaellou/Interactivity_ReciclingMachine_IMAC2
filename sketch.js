let phoneX=700;
let phoneY=70;
let phoneWidth = 100;
let phoneHeight = 200;
let overPhone = false;
let lockedPhone = false;
let bottleX=750;
let bottleY=500;
let bottleWidth = 50;
let bottleHeight = 120;
let overBottle = false;
let lockedBottle= false;
let xOffset = 0.0;
let yOffset = 0.0;
let openMachine = false;
let answer1 = 0;
let answer2 =0;
let points=0;
let timerPoll=60;
let poll=[];
let i=0;

function setup() {
  createCanvas(1000, 1000);
  textAlign(CENTER, CENTER);
 
  poll[0]="Préfèrez-vous le bus ou le métro ?";
  poll[1]="Métro"
  poll[2]="Bus"
  poll[3]=0
  poll[4]=0
  
  poll[5]="Vos préoccupations ?";
  poll[6]="Ecologie"
  poll[7]="Budget"
  poll[8]=0
  poll[9]=0
  
  poll[10]="Prochain événement ?";
  poll[11]="Concert"
  poll[12]="Théâtre"
  poll[13]=0
  poll[14]=0
  
}

function draw() {
  background(220);
  draggleMobile();
  draggleBottle();
  drawBorne();
  drawMobile();
  drawBottle();
  checkQRCode();
  recycle();
  timer();
}

function timer(){
  noStroke()
  fill(0)
  textSize(16)
  text(timerPoll, 250,180);
  if (frameCount % 60 == 0 && timerPoll > 0) {
    timerPoll --;
  }
  if (timerPoll == 0) {
    poll[i+3]=answer1
    poll[i+4]=answer2
    timerPoll=10
    
    if(i+5>poll.length-1){
      i=0
    }else{
      i=i+5;
    }
    answer1=poll[i+3]
    answer2=poll[i+4]
    print(poll.length)
    openMachine=false;
  }
}


function recycle(){
  if(openMachine && (bottleX - 147 < 0.01 &&  bottleY - 230 <0.01)){
    answer1++;
    points++;
    bottleX = 750;
    bottleY=500;
    lockedBottle=false;
  }
  if(openMachine && (bottleX - 347 < 0.01 &&  bottleY - 230 <0.01)){
    answer2++;
    points++;
    bottleX = 750;
    bottleY=500;
    lockedBottle=false;
  }
}

function checkQRCode(){
  if(phoneX - 255 <5 && phoneY - 300< 5){
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
  if(openMachine){
    fill('green')
  }
  circle(147, 230, 50);
  circle(347, 230, 50);
  if(answer1>0){
    fill('red');
    rect(130,500,40,-answer1*10);
  }
  if(answer2>0){
    fill('blue');
    rect(330,500,40,-answer2*10);
  }
  fill(190,247,242);
  rect(110,90,270,50)
  rect(110,150,70,45);
  rect(310,150,70,45);
  fill(0)
  noStroke()
  textSize(16)
  text(poll[i], 110,90, 270,50);
  text(poll[i+1], 110,150, 70,45);
  text(poll[i+2], 310,150, 70,45);
  
  fill('white')
  rect(225,300,50,50);
  fill('black')
  rect(225,300,10,10);
  rect(255,300,10,10);
  rect(245,310,10,10);
  rect(235,310,10,10);
  rect(255,300,10,10);
  rect(225,320,10,10);
  rect(265,320,10,10);
  rect(235,330,10,10);
  rect(255,330,10,10);
  rect(265,330,10,10);
  rect(255,340,10,10);
  rect(235,340,10,10);
  rect(225,340,10,10);
}

function draggleMobile(){
    // Test if the cursor is over the box
  if (mouseX > phoneX - phoneWidth && mouseX < phoneX + phoneWidth && mouseY > phoneY - phoneHeight && mouseY < phoneY + phoneHeight) {
    overPhone = true;
    if (lockedPhone) {
      overPhone = false;
    }
  }
  else{
    overPhone=false; 
  }
}

function draggleBottle(){
    // Test if the cursor is over the box
  if (mouseX > bottleX - bottleWidth && mouseX < bottleX + bottleWidth && mouseY > bottleY - bottleHeight && mouseY < bottleY + bottleHeight) {
    overBottle = true;
    if (lockedBottle) {
      overBottle = false;
    }
  }
  else{
    overBottle=false; 
  }
}


function drawBottle(){
  stroke(0);
  fill(77,138,255);
  rect(bottleX,bottleY,20,20,2);
  rect(bottleX-15,bottleY+20,50,100,10);
}

function drawMobile() {
  stroke(0);
  fill(0,0,0,100);
  rect(phoneX,phoneY,phoneWidth,phoneHeight,10);
  stroke(0);
  fill(255,255,255);
  rect(phoneX+5,phoneY+5,phoneWidth-10,phoneHeight-10,10);
  if(openMachine==true){
    fill('white')
    rect(phoneX+25,phoneY+25,50,50);
    fill('black')
    rect(phoneX+25,phoneY+25,10,10);
    rect(phoneX+55,phoneY+25,10,10);
    rect(phoneX+45,phoneY+25+10,10,10);
    rect(phoneX+35,phoneY+25+10,10,10);
    rect(phoneX+55,phoneY+25,10,10);
    rect(phoneX+25,phoneY+25+20,10,10);
    rect(phoneX+65,phoneY+25+20,10,10);
    rect(phoneX+35,phoneY+25+30,10,10);
    rect(phoneX+55,phoneY+25+30,10,10);
    rect(phoneX+65,phoneY+25+30,10,10);
    rect(phoneX+55,phoneY+25+40,10,10);
    rect(phoneX+35,phoneY+25+40,10,10);
    rect(phoneX+25,phoneY+25+40,10,10);
    fill(0,0,0);
    noStroke()
    textSize(12)
    text('Points gagnés : +' + points, phoneX+20, phoneY+80, 70, 50);
    stroke('black');
    fill('red')
    rect(phoneX+15,phoneY+150,70,20);
    noStroke()
    fill(250);
    text('J\'ai fini', phoneX+15, phoneY+150, 70, 20);     
  }
}

function mousePressed() {
  if (overPhone) {
    lockedPhone = true;
     xOffset = mouseX - phoneX;
     yOffset = mouseY - phoneY;
  } else {
    lockedPhone = false;
  }
  if (overBottle) {
      lockedBottle = true;
      xOffset = mouseX - bottleX;
      yOffset = mouseY - bottleY;
  } else {
    lockedBottle = false;
  }
 

}
function mouseClicked() {
  if (openMachine && (mouseX > phoneX+15 - 70 && mouseX < phoneX+15 + 70 && mouseY > phoneY+150 - 20 && mouseY < phoneY+150 + 20)){
    openMachine=false;
    lockedPhone = false;
    lockedBottle=false;
    points =0;
  }
}

function mouseDragged() {
  if (lockedPhone) {
    phoneX = mouseX - xOffset;
    phoneY = mouseY - yOffset;
  }
  if(lockedBottle){
    bottleX = mouseX - xOffset;
    bottleY = mouseY - yOffset;
  }
}

function mouseReleased() {
  lockedPhone = false;
  lockedBottle=false;
}