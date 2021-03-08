let x=0;
function setup() {
  createCanvas(400, 400);
}

function draw() {

if(mouseIsPressed){
   line(mouseX, mouseY,320,400);
square(mouseX, mouseY,50);
stroke(mouseX, mouseY,200,500);
} else{
   line(mouseX, mouseY,320,400);
square(400-mouseX, 400-mouseY,50);
stroke(mouseX, mouseY,200,500);
}
  x=x+1;
}