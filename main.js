video="";

function setup(){
    canvas.center();
    canvas=createCanvas(470,370)
}

function start(){
    objectFinder=ml5.objectFinder('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Finding object";
}

function modelLoaded(){
    console.log("modelLoaded");
    status=true;
}

function draw(){
    image(video,0,0,480,380);
}