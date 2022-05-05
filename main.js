status1=""
function preload() {
img=loadImage("dog_cat.jpg")
}
function setup() {
    canvas=createCanvas(800,450)
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd", modelloaded)
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
    fill("black")
    text("Cat",400,50)
    noFill()
    rect(400,75,350,350)
}
 function modelloaded() {
     console.log("Model is loaded")
     status1=true
     objectdetector.detect(img,getresult)
 }
 function getresult(error,results) {
     if (error) {
         console.log("error")
     }
     else {
        console.log(results)
     }
 }
 