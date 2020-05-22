let phoneX=700;
let phoneY=70;
let phoneWidth = 100;
let phoneHeight = 200;
let overPhone = false;
let lockedPhone = false;
let bottleX=750;
let bottleY=400;
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
let timerPoll=30;
let poll=[];
let i=0;
let QRCodeDraw=false;
let square = []
let day =1
let dayPoll=1;
let sizePoll=1;
let coord=[25,55,45,35,65]
let logo;


function setup() {
  createCanvas(950, 750);
  textAlign(CENTER, CENTER);
  logo =loadImage('https://raw.githubusercontent.com/gaellou/Interactivity_ReciclingMachine_IMAC2/master/assets/logo.JPG');
  
  
  //Day 1
  poll[0]="Do you prefer the bus or the metro?";
  poll[1]="Metro"
  poll[2]="Bus"
  poll[3]=0
  poll[4]=0
  
  poll[5]="Your concerns?";
  poll[6]="Ecology"
  poll[7]="Budget"
  poll[8]=0
  poll[9]=0
  
  //Day 2
  poll[10]="Next event?";
  poll[11]="Concert"
  poll[12]="Theater"
  poll[13]=0
  poll[14]=0
  
  poll[15]="Do you prefer neighbors' feast on March 12 or March 15?";
  poll[16]="March 12"
  poll[17]="March 15"
  poll[18]=0
  poll[19]=0
  
  sizePoll=poll.length/10;
  
}

function draw() {
  background(220);

  drawBorne();
  drawInstruction();
  timer();
  drawMobile();
  drawBottle();
  checkQRCode();
  draggleMobile();
  draggleBottle();
  recycle();
  image(logo, 190, 360,120,120);
}

function timer(){
  noStroke()
  fill(0)
  textSize(16)
    let c = color(255, 212, 61);
  fill(c);
  text('Time remaining', 250,220);
  text(timerPoll, 250,250);
  if (frameCount % 60 == 0 && timerPoll > 0) {
    timerPoll --;
  }
  if (timerPoll == 0) {
    poll[i+3]=answer1
    poll[i+4]=answer2
    timerPoll=30
    
    if(i+10>poll.length-1){
      i=0
    }else{
      i=i+10;
    }
    answer1=poll[i+3]
    answer2=poll[i+4]
    openMachine=false;
    day++;
    dayPoll++;
    if(day>sizePoll){
      dayPoll=1;
    }
  }
}


function recycle(){
  if(openMachine && (bottleX - 147 < 0.01 &&  bottleY - 230 <0.01)){
    answer1++;
    points++;
    bottleX = 750;
    bottleY=400;
    lockedBottle=false;
    poll[i+3]=answer1
    poll[i+4]=answer2
    if(i+5>dayPoll*10-1){
      i=i-5
    }else{
      i=i+5;
    }
    answer1=poll[i+3]
    answer2=poll[i+4]
    
  }
  if(openMachine && (bottleX - 347 < 0.01 &&  bottleY - 230 <0.01)){
    answer2++;
    points++;
    bottleX = 750;
    bottleY=400;
    lockedBottle=false;
    poll[i+3]=answer1
    poll[i+4]=answer2
    if(i+5>dayPoll*10-1){
      i=i-5
    }else{
      i=i+5;
    }
    answer1=poll[i+3]
    answer2=poll[i+4]
  }
}

function checkQRCode(){
  if(phoneX - 255 <5 && phoneY - 300< 5){
    openMachine=true;
  }
}

function drawBorne() {
  let c = color(43, 71, 94);
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
  drawQRCode(200, 275)  
}

function drawInstruction(){
   fill(0,0,0);
  noStroke()
  textSize(12)
  text('Step 1 : Scan the QR code to open the machine and earn points', 650,300, 200, 50);
  text('Step 2 : Draggle the bottle in the machine to answer the poll and recycle your bottle', 670, 550, 200, 50)

  text('Day : ' + day, 150, 550, 200, 50)
  textSize(14)
  text('30 sec = 1 day = 2 questions for the demonstration', 150, 580, 200, 50)
  let c = color(255, 212, 61);
  fill(c);
  textSize(20)
  text('Recycling machine', 150, 30, 200, 50)
}

function draggleMobile(){
    // Test if the cursor is over the box
  if (mouseX > phoneX - phoneWidth && mouseX < phoneX + phoneWidth && mouseY > phoneY - phoneHeight && mouseY < phoneY + phoneHeight) {
    overBottle = false;
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
    overPhone = false;
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

function drawQRCode(x,y){
    if(!QRCodeDraw){
      fill('white')
      rect(x+25,y+25,50,50);
      fill('black')
      
      for (let i = 0; i < random(15,30); i++) {
         square[i]=random(coord)
         square[i+1]=random(coord)
      }
      QRCodeDraw=true;
    }
   fill('white')
      rect(x+25,y+25,50,50);
      fill('black')
   for (let i = 0; i < square.length; i++) {
        rect(x+square[i],y+square[i+1],10,10);
    }
}

function drawMobile() {
  stroke(0);
  fill(0,0,0,100);
  rect(phoneX,phoneY,phoneWidth,phoneHeight,10);
  stroke(0);
  fill(255,255,255);
  rect(phoneX+5,phoneY+5,phoneWidth-10,phoneHeight-10,10);
  if(openMachine==true){
    drawQRCode(phoneX, phoneY)
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