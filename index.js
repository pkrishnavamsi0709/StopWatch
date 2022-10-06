const timerdisplay=document.querySelector("#timedisplay");
const startbtn=document.querySelector("#startbtn");
const pausebtn=document.querySelector("#pausebtn");
const resetbtn=document.querySelector("#resetbtn");

let startTime=0;
let elapsedTime=0;
let currentTime=0;
let paused=true;
let intervalId=0;
let dis="";

let hrs=0;
let mins=0;
let secs=0;
let h=0;

startbtn.addEventListener("click",() =>{
    if(paused){
        paused=false;
        startTime=Date.now()-elapsedTime;
        intervalId=setInterval(updatetime,1000);

    }
});

pausebtn.addEventListener("click",() =>{
    if(!paused){
        paused=true;
        /*h=h+20;
        history.style.height=h+"px";*/
        document.getElementById("pausebtn").innerHTML="Resume";
        elapsedTime=Date.now()-startTime;
        secs=Math.floor((elapsedTime/1000)%60);
        mins=Math.floor((elapsedTime/(1000*60)%60));
        hrs=Math.floor((elapsedTime/(1000*60*60)%60));
        secs=addzeros(secs);
        mins=addzeros(mins);
        hrs=addzeros(hrs);
        document.getElementById("display").innerHTML+=`${hrs}:${mins}:${secs}`+"<br>";
        clearInterval(intervalId);
    }
    else if(paused){
        paused=false;
        document.getElementById("pausebtn").innerHTML="Pause";
        startTime=Date.now()-elapsedTime;
        intervalId=setInterval(updatetime,1000);

    }

});
resetbtn.addEventListener("click",() =>{
    paused=true;
    clearInterval(intervalId);
    startTime=0;
    elapsedTime=0;
    currentTime=0;
    paused=true;
    intervalId=0;
    hrs=0;
    mins=0;
    secs=0;
    timerdisplay.textContent=`00:00:00`;
    document.getElementById("display").innerHTML="";

});


function updatetime(){
    elapsedTime=Date.now()-startTime;

    secs=Math.floor((elapsedTime/1000)%60);
    mins=Math.floor((elapsedTime/(1000*60)%60));
    hrs=Math.floor((elapsedTime/(1000*60*60)%60));

    secs=addzeros(secs);
    mins=addzeros(mins);
    hrs=addzeros(hrs);

    timerdisplay.textContent=`${hrs}:${mins}:${secs}`;



}

function addzeros(unit){
    return (unit+"0").length>2 ? unit : "0" +unit;
}
