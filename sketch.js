function setup() {
  createCanvas(400, 400);
  background(208);
  angleMode(DEGREES);
}

function draw() {
fill(102, 0, 204);
quad(100, 100, 150, 125, 150, 200, 100, 250);
fill(0, 0, 204);
quad(175, 150, 225, 100, 225, 250, 175, 225);
fill(255, 255, 153);
rect(150, 125, 25, 100);
fill(0);
ellipse(163, 108, 35, 35);
}

function draw() {
//pac-man
fill(255, 255, 0)
arc(90, 60, 80, 80, 45, 315);
arc(160, 60, 80, 80, 55, 305);
arc(230, 60, 80, 80, 65, 295);
arc(300, 60, 80, 80, 75, 285);
}

function draw() {
  fill(153);
  ellipse(132, 82, 200, 200);
  noFill();
  ellipse(228, -16, 200, 200);

}

function draw() {
  fill(255, 0, 0);
  ellipse(132, 82, 200, 200);
  fill(0, 255, 0);
  ellipse(228, 82, 150, 75);
  fill(0, 0, 255, 150);
  ellipse(250, 250, 400, 30);
}

function draw(){
  fill(0);
  beginShape();
  vertex(110, 340);
  vertex(100, 300);
  vertex(50, 250);
  vertex(30, 180);
  vertex(50, 100);
  vertex(100, 80);
  vertex(180, 90);
  vertex(210, 80);
  vertex(220, 60);
  vertex(210, 40);
  vertex(260, 70);
  vertex(270, 110);
  vertex(250, 150);
  vertex(240, 160);
  vertex(250, 190);
  vertex(230, 200);
  vertex(250, 210);
  vertex(270, 250);
  vertex(240, 250);
  vertex(250, 270);
  vertex(240, 280);
  vertex(250, 280);
  vertex(240, 290);
  vertex(250, 310);
  vertex(240, 350);
  vertex(220, 330);
  vertex(190, 340);
  endShape();
  fill (115);
  ellipse (130, 200, 40, 70);



}
