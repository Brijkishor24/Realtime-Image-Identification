//https://teachablemachine.withgoogle.com/models/wSWeak6Pi/
function preload(){}

function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wSWeak6Pi/model.json",modelloaded);
}
function modelloaded(){
    console.log("Modal Loaded");
}

function draw(){
    image(video,0,0,400,300);
    classifier.classify(video,getresult);
}
function getresult(error,results) {
 if(error){
     console.error(error);
 }else{
     console.log(results);
     document.getElementById("result_object_name").innerHTML=results[0].label;
     document.getElementById("result_accuracy_name").innerHTML=results[0].confidence.toFixed(3)*100+"%";
 }
}