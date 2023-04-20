function preload(){

}
function setup(){
canvas = createCanvas(500,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("model is loaded🎊🎊")
}


function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log(results[0].pose.nose.x,"this is nose x");
        console.log(results[0].pose.nose.y,"this is nose y");
    }
}

function draw(){
image(video,0,0 ,500,500);
}
function take_snapshot(){
save("clown.png");
}
