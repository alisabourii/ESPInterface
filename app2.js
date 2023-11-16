var kontrol=false;
function btn1(){
    if(kontrol === false){
        var myImg = document.getElementById("lampa");
        myImg.src = "images/onLight.png"
        kontrol=true;
    }
    else{
        var myImg = document.getElementById("lampa");
        myImg.src = "images/offLight.png"
        kontrol=false;
        }
}

var kontrol2=true;
function btn2(){
    var element = document.getElementById("lamp1");
    if(kontrol2 === false){
        document.getElementById("lamp1").style.backgroundColor='black';
        kontrol2=true;
    }
    else{
        document.getElementById("lamp1").style.backgroundColor='white';
        kontrol2=false;
        }
}


function rangerValue1(){
    let label = document.getElementById("radio1");
    var ranger = document.getElementById("ranger1").value;
    label.innerText = ranger;
}

function rangerValue2(){
    let label = document.getElementById("radio2");
    var ranger = document.getElementById("ranger2").value;
    label.innerText = ranger;
}

let exState = false;
function checkingControl(){
    let label = document.getElementById("h1");
    if(exState === false){
        label.innerText=true;
        var myImg = document.getElementById("lightSwich1");
        myImg.src = "images/onLight3.png"
        exState=true;}
    else{
        label.innerText=false;
        var myImg = document.getElementById("lightSwich1");
        myImg.src = "images/offLight2.png"
        exState=false;} 
}