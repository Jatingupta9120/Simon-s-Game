let gameseq=[];
let userseq=[];
let start=false;
let level=0;
let h2=document.querySelector("h2");
let allbtns=document.querySelectorAll(".btn");
let btns=["yellow","red","green","blue"];
document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game is started");
        start=true;
        levelup();
    }
});
function levelup(){
level++;
h2.innerText = 'Level ${level}';
let randomIdx=Math.floor(Math.random()*3);
let randomcolor=btns[randomIdx];
let randombtn=  document.querySelector('.${randomcolor}');

gameseq.push(randomcolor);
console.log(gameseq);
gameflash(randombtn);

}
function gamneflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function checkAns(idx){
    
    if(userseq[idx]===gameseq[idx]){
        // console.log("same value");
        if(userseq.length==gameseq.length){
           setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML='Game Over! Your score was <b>${level}</b><br>Press any key to start ';
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnpress(){
    // console.log(this);
   let btn=this;
   userflash(btn);
   userColor=btn.getAttribute("id");
   userseq.push(userColor);
   checkAns(userseq.length-1);
}
for(btn of allbtns){
    btn.addEventListener("click",btnpress);

}
function reset(){
start=false;
gameseq=[];
userseq=[];
level=0;

}