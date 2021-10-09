// function when success
function onGeoOk(){
    console.log("Hello")
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