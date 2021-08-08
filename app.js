const title = document.querySelector("div.hello:first-child h1");
let click = 0;

function titleClick(){
    const cColor = title.style.color
    let nColor;
    if(cColor === "blue") {
        nColor = "tomato";
    } else{
        nColor = "blue";
    }
    title.style.color = nColor
    
}


title.addEventListener("click", titleClick); 



// querySelector css 방식. 멘첫번째 꺼만 찾음 
// hello.style.color = "blue";
//function titleClick(){
//     console.log("title was clicked");
// }

// hello.addEventListener("click", titleClick);
