function preload(){
}
function setup(){
canvas = createCanvas(400,400);
canvas.center();
Video = createCapture(VIDEO);
Video.size(400,400);
Video.hide();
poseNet = ml5.poseNet(Video,modelLoaded);
poseNet.on('pose',gotPoses);

}
function draw(){
image(Video,0,0,400,400);
}
function take_snapshot(){
    save(my_filter_image.png);
}
function modelLoaded(){
    console.log("poseNet is Loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log(results[0].pose.nose.x);
        console.log(results[0].pose.nose.y);
        
    }
}









