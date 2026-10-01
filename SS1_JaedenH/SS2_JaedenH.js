//Jaeden H
//FEED ME
//I want to explore the concept of creating video games and this ties into it because this image is based on a childhood game I used to play called Duck Life
//Press mouse to feed the duck, if the duck misses the food you can always feed it again

let y = 20
let berryspeed = 0.6 

function setup() {
 createCanvas(400, 400);
}


//
function draw() {
background(73,236,245);  
strokeWeight (1)
fill(50, 220, 70);
circle(mouseX, mouseY, 5);


fill(50, 220, 70);
strokeWeight(1)
rect(30, 12, 3, 40)

fill(50, 220, 70);
strokeWeight(1)
rect(30, 12, 25, 3)

fill(50, 220, 70);
strokeWeight(1)
rect(30, 29, 15, 3)

fill(50, 220, 70);
strokeWeight(1)
rect(70, 12, 3, 40)

fill(50, 220, 70);
strokeWeight(1)
rect(70, 12, 25, 3)

fill(50, 220, 70);
strokeWeight(1)
rect(70, 29, 15, 3)

fill(60, 220, 70);
strokeWeight(1)
rect(70, 50, 25, 3)

fill(50, 220, 70);
strokeWeight(1)
rect(110, 12, 3, 40)

fill(50, 220, 70);
strokeWeight(1)
rect(110, 12, 25, 3)

fill(50, 220, 70);
strokeWeight(1)
rect(110, 29, 15, 3)

fill(60, 220, 70);
strokeWeight(1)
rect(110, 50, 25, 3)

fill(50, 220, 70);
strokeWeight(1)
rect(70, 12, 3, 40)

fill(50, 220, 70);
strokeWeight(1)
rect(70, 12, 25, 3)

fill(50, 220, 70);
strokeWeight(1)
rect(70, 29, 15, 3)

fill(60, 220, 70);
strokeWeight(1)
rect(150, 50, 25, 3)

fill(50, 220, 70);
strokeWeight(1)
rect(172, 13, 3, 36)

fill(60, 220, 70);
strokeWeight(1)
rect(150, 10, 25, 3)

fill(50, 220, 70);
strokeWeight(1)
rect(150, 6, 3, 46)

fill(60, 220, 70);
strokeWeight(1)
rect(140, 110, 25, 3)

fill(50, 220, 70);
strokeWeight(1)
rect(140, 72, 3, 40)

fill(50, 220, 70);
strokeWeight(1)
rect(140, 72, 25, 3)

fill(50, 220, 70);
strokeWeight(1)
rect(140, 89, 15, 3)

fill(50, 220, 70);
strokeWeight(1)
rect(87, 72, 4, 25)

fill(50, 220, 70);
strokeWeight(1)
rect(62, 72, 56, 3)

fill(50, 220, 70);
strokeWeight(1)
rect(59, 70, 3, 40) 

fill(50, 220, 70);
strokeWeight(1)
rect(115, 72, 3, 38) 








fill(255, 226, 10);
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

strokeWeight (1, 1)
fill(252, 33, 33);
circle(253, y, 9);

strokeWeight (1, 1)
fill(252, 33, 33);
circle(235, y, 9);

strokeWeight (1, 1)
fill(252, 33, 33);
circle(244, y, 9);

strokeWeight (1, 1)
fill(252, 33, 33);
circle(262, y, 9);
y = y + berryspeed;




}
function mousePressed() { 
y=0;
}
