cocossdstatus = "";
function comeback(){
    window.location = "index.html";
}
function preload(){
    evir = loadImage("BA91E646-573E-44CE-891B-AB50017C3372.jpeg");
}
function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
    img(0, 0, 600, 400, evir)
}
function draw(){
    if(cocossdstatus != ""){
        for (i=0; i < objects.length; i++){
            fill("#0000FF");
            amount = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + amount + "%" + objects[i].x +15, objects[i].y + 15);
            noFill();
            stroke("#0000FF");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            
        }
    }
}
function modelLoaded(){
    cocossdstatus = "true";
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}