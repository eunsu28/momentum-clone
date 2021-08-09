const title = document.querySelector("div.hello:first-child h1");

function titleClick(){
    const clickedClass = "clicked";
    if (title.className === clickedClass) {
        title.className = "";
    } else {
        title.className = clickedClass;
    }
} 


title.addEventListener("click", titleClick); 



// querySelector css 방식. 멘첫번째 꺼만 찾음 
// hello.style.color = "blue";
//function titleClick(){
//     console.log("title was clicked");
// }

// hello.addEventListener("click", titleClick);
