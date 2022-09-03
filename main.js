status = "";
function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
}
function draw(){
    image(video, 0, 0, 280, 280);
}
video = "";
function preload(){
    video = createVideo('video.mp4');
    video.hide()
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects ";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}