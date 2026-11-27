//Jaeden H
//FEED ME
//I want to explore the concept of creating video games and this ties into it because this image is based on a childhood game I used to play called Duck Life
//Feed the duck 30 pieces of food to win! But watch out for junk along the way! You have 2 seconds per choice and 3 lives. Failure to feed the duck in time will also cost you a life.

let x = 200
let img;
let gameStart = false;
let textSpeed = 0.75
let lives = 3 
let startTime = 0
let score = 0 
let apple; 
let avc;
let carrot;
let ducky
let celery;
let b;
let choc;
let insect;
let onion; 
let poison; 
let trash; 
let bg;
let bucket; 
let foods
let health
let junk
let rhealth
let rjunk
let healthyleft; 
let timePassed = 0 
let timeLeft = 2000  
let vicduck
let before 
let after
let arrow

function setup() {
createCanvas(400, 400);
foods = [apple, carrot, celery, choc, b, insect, onion, poison, trash, avc];
health = [apple, carrot, celery];
junk = [choc, b, insect, onion, poison, trash, avc];
healthyleft = random([true, false]) 
rhealth = random(health)
rjunk = random(junk)
}

function changeFood() {
  rhealth = random(health) 
  rjunk = random(junk)
  healthyleft = random([true, false])
        startTime = millis()
}

function preload () {
img = loadImage('images.jpeg');
apple = loadImage('apple.png');
avc = loadImage('avc.webp');
carrot = loadImage('carrot.png');
celery = loadImage('celery.png'); 
b = loadImage('b.png'); 
choc = loadImage('choc.png'); 
insect = loadImage('insect.png'); 
onion = loadImage('onion.png'); 
poison = loadImage('poison.png'); 
trash = loadImage('trash.png'); 
bg = loadImage ('background.jpg')
bucket = loadImage ('bucket.png')
ducky = loadImage('ducky.png') 
vicduck = loadImage ('victoryduck.png')
before = loadImage ('before.png')
after = loadImage ('after.png')
arrow = loadImage ('arrow.png')
}

//
function draw() {
background(73,236,245);

//loading screen
if (millis() < 3000){
   image(img, 0, 0, 400, 400);

//If the game still hasnt started the directions show 
} else if (gameStart == false) {
   fill (0);
   rect(0, 0, 400, 400);

   fill(200, 0, 0);
   textSize(30);
   textStyle(BOLD)
   textFont("Luckiest Guy")
   text("Press any key to Start", 55, 210);

   image(before, 25, 245, 130, 130)
image(after, 235, 245, 130, 130)
image(arrow, 170, 290, 52, 52)
  
//food
   image(apple, 75, 55, 39, 39);
image(celery, 122, 48, 53, 53);
   image(carrot, 175, 52, 48, 48);

//junk
   image(trash, 359, 110, 40, 40);
   image(avc, 316, 110, 39, 39);
    image(onion, 65, 96, 63, 63);
    image(poison, 162, 100, 60, 60);
        image(b, 225, 110, 40, 40);
            image(insect, 275, 110, 40, 40);
               image(choc, 117, 98, 59, 59);


   fill(255);  
   textSize(20);
   textFont("monospace")
   text("Directions", 10 , 25);


   textSize(20);
   textFont("monospace")
 fill(51, 255, 51)
   text("Food:", 10, 80)
  
     fill(250, 0, 0)
   text("Junk:", 10, 132)



   fill(255)
   textSize(10);
   textFont("monospace")
   text("Feed the duck 30 pieces of food to win! But watch out for junk along the way! You have 2 seconds per choice and 3 lives. Failure to feed the duck in time will also cost you a life. Good luck!", x , 43);
 x = x - textSpeed;
 if (x < -1200) {
   x = 400;
 }
}

// Game 
else {
      image(bg, 0, 0, 400, 400);
      timePassed = millis() - startTime 

      if (timePassed >= 2000 && lives > 0 && score < 30) {
        lives = lives - 1 
        if (lives > 0)
        changeFood()

      }
//Duck
fill(245, 242, 85);
strokeWeight (4, 4)
triangle(260, 128, 350, 95, 320, 40)

strokeWeight(9,9);
fill(245, 242, 85);
circle(400, 40, 240);

strokeWeight (4, 4)
fill(245, 245, 245);
circle(325, 45, 65);

strokeWeight (0, 0)
fill(12, 130, 240);
circle(316, 45, 44);

strokeWeight (0, 0)
fill(0, 0, 0);
circle(309, 45, 30)

strokeWeight (0, 0)
fill(250, 250, 250);
circle(312, 35, 10)

//If random healthy food appears on left then these are the placements 
if (healthyleft == true) {
image(rhealth, 65, 170, 105, 105)
image(rjunk, 230, 170, 105, 105) 
}

//If random healthy food doesn't appears on left then these are the placements 
else {
image(rhealth, 230, 170, 105, 105)
image(rjunk, 65, 170, 105, 105)
}


fill(255, 0, 0)
textSize(25)
text("❤️" + lives, 220, 40)

fill(255, 0, 0)
stroke(0)
  strokeWeight(1)
text("Score:" + score, 15, 40)

//2 seconds minus after the food appeared 
timeLeft = 2000 - timePassed 

 fill(255, 0, 0)
  stroke(0)
  strokeWeight(1)
  strokeWeight(1)

if (timeLeft > 1000) {
  text("Time: 2", 15, 70)
} else if (timeLeft > 0) {
  text("Time: 1", 15, 70)
} else {
  text("Time: 0", 15, 70)
}

image(ducky, 170, 340, 60, 60)

//Game over 
if (lives <= 0) {
  textStyle(BOLD)
   fill(190, 0, 0)
    textSize (30)
  text("Game Over!", 125, 200);
  textSize (25)
    text("Press any key to try again", 27, 240);

fill(245, 242, 85);
strokeWeight(4, 4)
triangle(260, 128, 350, 95, 320, 40)

strokeWeight(9, 9);
fill(245, 242, 85);
circle(400, 40, 240);

fill(0, 0, 0)
textSize(50)
strokeWeight(0)
text("X", 300, 60)
textSize(11)
text("X", 190, 361)

textSize (30)
}

//Win
if (score >= 30) {
      textSize (45)
  text("DUCK SAVED!", 73, 187)
    image(vicduck, 155, 313, 90, 90)
}
}
}

function keyPressed() {
//game wont start unless 3 seconds passed  
   if (millis() >= 3000 && gameStart == false) {
      gameStart = true; 
      startTime = millis()
    }

    //Used google for how to use ||
    if (lives <= 0 || score >= 30) {
     restartGame(); 
}
   }


function mousePressed() {
   if (gameStart == false || lives <= 0 || score >= 30) {
     return; 
   }


//If I were to click the side with healthy food I gain a score and vice versa 
//for x 65 through 170 and for y 170 through 275 
   if (mouseX >= 65 && mouseX <= 170 && mouseY >= 170 && mouseY <= 275) { 
         if (healthyleft == true) {
    score = score + 1 
} else {
  lives = lives - 1 
}

if (lives > 0)
changeFood()
   }

//right side
   else if (mouseX >= 230 && mouseX <= 335 && mouseY >= 170 && mouseY <= 275) {
      if (healthyleft == false) {
      score = score + 1 
} else {
  lives = lives - 1;
}


if (lives > 0)
changeFood() 
}

   }

function restartGame() { 
  lives = 3
  score = 0
  changeFood()
}
