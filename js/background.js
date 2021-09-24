// background image arrary
const images = ["1.png", "2.jpg", "3.jpg", "4.jpg"];
//

// randomly choose image
const chosenImage = images[Math.floor(Math.random() * images.length)];
//

//create img tag on HTML
const beginImg = document.createElement("img");
//

// apply image num
beginImg.src = `img/${chosenImage}`;
//

//apply to HTML
document.body.appendChild(beginImg);
//