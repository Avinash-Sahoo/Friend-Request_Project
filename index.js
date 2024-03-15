let btn= document.querySelector("button");
let heading = document.querySelector("h2");
let icon=document.querySelector("i");

var flag=0;

btn.addEventListener("click",function(){
    if(flag===0){
        btn.innerHTML='<i class="fa-solid fa-user-minus" style="color: #000000;"></i> Remove Friend';
        btn.style.backgroundColor="hsl(240, 1%, 72%)";
        btn.style.color="black";
        heading.style.color="green";
        heading.innerText="Friends";
        flag=1;
    }
    else{
        btn.innerHTML='<i class="fa-solid fa-user-plus"></i> Add Friend';
        btn.style.backgroundColor="#3d72da";
        btn.style.color="aliceblue";
        heading.style.color="red";
        heading.innerText="Stranger";
        flag=0;
    }
})