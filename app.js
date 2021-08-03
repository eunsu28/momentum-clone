const title = document.querySelector("div.hello:first-child h1");
let click = 0;

function titleClick(){
    click += 1
    console.log("title was clicked");
    title.style.color = "red";
    console.log(click);
    if(click === 2){
        title.style.color = "orange"
    } else if(click === 3){
        title.style.color = "yellow"
    } else if(click === 4){
        title.style.color = "green"
    } else if(click === 5){
        title.style.color = "blue"
    } else if(click === 6){
        title.style.color = "pink"
    } else if(click === 7){
        title.style.color = "purple"
    } else if(click === 7) {
        click = 0
    }
    
}

function mouseEnter() {
    title.innerText = "mouse is here"
}

function mouseLeave() {
    title.innerText = "mouse leave"
}

title.addEventListener("click", titleClick);
title.addEventListener("mouseenter", mouseEnter); 
title.addEventListener("mouseleave", mouseLeave); 



// querySelector css 방식. 멘첫번째 꺼만 찾음 
// hello.style.color = "blue";
//function titleClick(){
//     console.log("title was clicked");
// }

// hello.addEventListener("click", titleClick);
