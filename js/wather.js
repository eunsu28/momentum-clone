const weather = document.querySelector("#weather span:first-child")
const city = document.querySelector("#weather span:last-child")
const API_KEY = "f2f5d900c5a5a9ba2f13a65a8df7ec6d";

// function when success
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metrick`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.name, data.weather)
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
        });
}
//

// functin when fail
function onGeoError() {
    alert("Can't find you")
}
//

// geo
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
//

//api.openweathermap.org/data/2.5/weather?lat={31.230416}&lon={121.473701}&appid={f2f5d900c5a5a9ba2f13a65a8df7ec6d}

//using navigator.geolocation.getCurrentPosition()