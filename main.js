img="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function preload(){
    img=loadImage('bed_room.jpg')
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("bed",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,440,350);
}