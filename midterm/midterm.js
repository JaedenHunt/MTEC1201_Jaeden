//Jaeden H
//FEED ME
//I want to explore the concept of creating video games and this ties into it because this image is based on a childhood game I used to play called Duck Life
//Press mouse to feed the duck, if the duck misses the food you can always feed it again


let x = 200
let y = 20
let berryspeed = 0.6
let berryr = 255;
let berryb = 0;
let berryg = 0;
let img;
let showImage = true;
let stopTime = 0
let berryVisible = true;
let gameStart = false;
let textSpeed = 0.75
let apple; 
let avc;
let carrot;



function setup() {
createCanvas(400, 400);
}


function preload () {
img = loadImage('images.jpeg');
apple = loadImage('apple.png');
avc = loadImage('avc.webp');
carrot = loadImage('carrot.png');



}


//
function draw() {
background(73,236,245);


strokeWeight (1)
fill(50, 220, 70);
circle(mouseX, mouseY, 5);


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


strokeWeight (1, 1)
fill(54, 247, 40)
rect(0,350,400,60)


strokeWeight (3, 3)
fill(150, 88, 24)
rect(80,150,190,200)


strokeWeight (2, 2)
fill(150, 88, 24)
line(85, 350, 85, 150)


strokeWeight (2, 2)
fill(150, 88, 24)
line(95, 350, 95, 150)


strokeWeight (2, 2)
fill(150, 88, 24)
line(105, 350, 105, 150)


strokeWeight (2, 2)
fill(150, 88, 24)
line(115, 350, 115, 150)


strokeWeight (2, 2)
fill(150, 88, 24)
line(125, 350, 125, 150)


strokeWeight (2, 2)
fill(150, 88, 24)
line(135, 350, 135, 150)


strokeWeight (2, 2)
fill(150, 88, 24)
line(145, 350, 145, 150)


strokeWeight (2, 2)
fill(150, 88, 24)
line(155, 350, 155, 150)


strokeWeight (2, 2)
fill(150, 88, 24)
line(165, 350, 165, 150)


strokeWeight (2, 2)
fill(150, 88, 24)
line(175, 350, 175, 150)


strokeWeight (2, 2)
fill(150, 88, 24)
line(185, 350, 185, 150)


strokeWeight (2, 2)
fill(150, 88, 24)
line(195, 350, 195, 150)


strokeWeight (2, 2)
fill(150, 88, 24)
line(205, 350, 205, 150)


strokeWeight (2, 2)
fill(150, 88, 24)
line(215, 350, 215, 150)


strokeWeight (2, 2)
fill(150, 88, 24)
line(225, 350, 225, 150)


strokeWeight (2, 2)
fill(150, 88, 24)
line(235, 350, 235, 150)


strokeWeight (2, 2)
fill(150, 88, 24)
line(245, 350, 245, 150)


strokeWeight (2, 2)
fill(150, 88, 24)
line(255, 350, 255, 150)


strokeWeight (2, 2)
fill(150, 88, 24)
line(265, 350, 265, 150)


fill(0);
textSize(16);
textFont('Georgia');
text ('Feed the Duck!', 40, 60)
fill(255, 226, 10)


strokeWeight (1)
fill(0)
rect(0,0,400,400)


strokeWeight(1);


if (berryVisible == true && y < 100) {


fill (berryr, berryg, berryb);
circle(253, y, 9);
circle(235, y, 9);
circle(244, y, 9);
circle(262, y, 9);
}
else if (berryVisible == true && y < 146) {


   fill(berryr, berryg, berryb);
circle(252, y, 12);
circle(230, y, 12);
circle(241, y, 12);
circle(263, y, 12);
} else {}




if (showImage == true) {
   image(img, 0, 0, 400, 400);
} else if (gameStart == false) {
   fill (0);
   rect(0, 0, 400, 400);

   fill(190, 0, 0);
   textSize(30);
   textStyle(BOLD)
   textFont("monospace")
   text("Click to Start", 75, 200);
      
   image(apple, 75, 50, 40, 40);
   image(avc, 120, 50, 40, 40);
      image(carrot, 163, 50, 40, 40);
            image(carrot, 163, 50, 40, 40);




   fill(255);
   textSize(20);
   textFont("monospace")
   text("Directions", 10 , 25);


   textSize(20);
   textFont("monospace")
 fill(51, 255, 51)
   text("Food:", 10, 80)
  
     fill(250, 0, 0)
   text("Junk:", 10, 130)



   fill(255)
   textSize(10);
   textFont("monospace")
   text("You have only 30 seconds to collect 25 pieces of food. Failure to reach this amount or feeding the duck 'junk' will kill it.", x , 43);
 x = x - textSpeed;
 if (x < -500) {
   x = 400;
 }
}




}
function mousePressed() {
   y = 0;
   stopTime = 0;
   berryVisible = true;
   berryr = random(255);
   berryg = random(255);
   berryb = random(255);
}


function keyPressed() {
   if (keyCode == 32) {
       showImage = false;
   }
}












