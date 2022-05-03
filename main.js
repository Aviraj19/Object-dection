function preload() {
img=loadImage("dog_cat.jpg")
}
function setup() {
    canvas=createCanvas(800,450)
    canvas.center();
}
function draw() {
    image(img,0,0,800,450)
    fill("black")
    text("Dog",50,50)
    textSize(40)
    noFill()
    stroke("red")
    rect(55,55,400,350)
    strokeWeight(3)
}
 