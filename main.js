var difference = 0;
var rightWrist =0;
var leftWrist = 0;
function setup(){
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    
    var video = createCapture(VIDEO);
    video.size(550,500);
    
    poseNet = ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotPoses);
    }
    
    function modelLoaded(){
        console.log("poseNet is initialized");
    }
    
    function draw(){
    background("turquoise");
        document.getElementById("fontsize").innerHTML = "Font size of the text will be = " + difference + "px";
    fill("white");

    textSize(difference);
    text("Person",50,400);
    }
    
    function gotPoses(results){
      if(results.length > 0){
          console.log(results);

          leftWrist = results[0].pose.leftWrist.x;
          rightWrist = results[0].pose.rightWrist.x;

          difference = floor(leftWrist - rightWrist);

      }
    }