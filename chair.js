cocossdstatus = "";
function comeback(){
    window.location = "index.html";
}
function preload(){
    evar = loadImage("EA351E6F-494B-4274-A8AF-801575D61511.jpeg");
}
function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
    img(0, 0, 600, 400, evar)
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