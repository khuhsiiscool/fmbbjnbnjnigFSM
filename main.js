function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
video=createCapture(VIDEO);
video.position(280,280);

}
function draw(){
    image(video, 0, 0, 280, 280);
}