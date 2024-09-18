
let img =document.querySelector('.img')
let container =document.querySelector('.container')
function Change_img(src){
    img.src=src
    img.style.animation = 'none'; 
    img.offsetHeight; 
    img.style.animation = 'animation1 2s ease-out'; 
}
function colors(color){
    container.style.background=color
    if(color=='#e1f73b'){
        document.getElementById("te").style.color="#000000";
    }
    else{
        document.getElementById("te").style.color="#ffffff";
    }
}


