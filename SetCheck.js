

var la =true;

const btn = document.querySelector("#btn");
const Gcircle = document.querySelector("#circle");



btn.addEventListener("click",a);

function a(){
    document.getElementById("circle").style.display = "block";
    document.getElementById("circleIcon").style.display = "block";
    document.getElementById("grayBack").style.display = "block";

}


    


function linedraw(){
    const Canvas = document.querySelector("canvas");
    let $draw = Canvas.getContext('2d');


    
    $draw.fillStyle ="red";
   $draw.fillRect(0,0,30,20)

   $draw.beginPath();
   $draw.strokeStyle ="red"
   $draw.moveTo(0,0)
   $draw.lineWidth=20;
   $draw.lineTo(50,50);
   $draw.stroke();


}

document.addEventListener("mousedown",linedraw);

