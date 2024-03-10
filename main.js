function preload(){
}
function setup(){
    canvas = createCanvas(1200,800);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_colour = "";
}
function draw(){
    ellipse(600,400,640,480);
    image(video,440,280,320,240);
     tint(tint_colour);
}
function take_snapshot(){
    save('filtered-image.png');
}
function filter_tint() {
    tint_colour = document.getElementById("colour_name").value;
}