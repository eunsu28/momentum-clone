const title = document.querySelector("div.hello:first-child h1");

function titleClick(){
    title.classList.toggle("clicked")
} 


title.addEventListener("click", titleClick); 



// querySelector css 방식. 멘첫번째 꺼만 찾음 
// hello.style.color = "blue";
//function titleClick(){
//     console.log("title was clicked");
// }

// hello.addEventListener("click", titleClick);
// use classList ex: .remove .add .contains
// toggle the best