const images = ["1.png", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const beginImg = document.createElement("img");

beginImg.src = `img/${chosenImage}`;

document.body.appendChild(beginImg);