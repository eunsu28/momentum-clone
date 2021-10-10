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

//using navigator.geolocation.getCurrentPosition()