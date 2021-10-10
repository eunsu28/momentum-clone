// function when success
function onGeoOk(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("Hello")
    console.log(lat, long)
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