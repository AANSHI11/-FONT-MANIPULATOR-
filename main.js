noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!')
}
function draw() {
    background('#969A97');
    fill(yellow);
    textSize(difference);
    text("Aanshi",50, 600);
    document.getElementById("text").innerHTML = "Width And Height of a Text will be = " + difference +"px";
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = (leftWristX - rightWristX).toFixed(3);

        console.log("leftWristX = " + leftWristX + "rightWristX =" + rightWristX + "difference = "+ difference);
    }
}