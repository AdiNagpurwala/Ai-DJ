song="";
leftwristX="";
leftwristY="";
rightwristX="";
rightwristy="";
function preload(){
    song=loadSound("music.mp3");
}

function setup(){
    canvas=createCanvas(500,465);
    canvas.center();
    

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw (){
    image(video,0,0,500,465);

}
function play(){

    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded(){
    console.log("PoseNet is Initialized!");
}
function gotPoses(results){
   if (results. length >0);
    {
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y
        console.log("leftwristX"+leftwristX+"leftwristY"+leftwristY+"rightwristX"+rightwristX+"rightwristY"+rightwristY);
    }
}