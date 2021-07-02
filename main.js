function preload(){

}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(540, 320);
    video = createCapture(VIDEO);
    video.hide();
    video.size(400, 400);
}
function draw(){
    image(video, 0, 0, 400, 400)
}