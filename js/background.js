const images = ["1.png", "2.png", "3.png", "4.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const beginImg = document.createElement("img");

beginImg.src = `img/${chosenImage}`;

document.body.appendChild(beginImg);