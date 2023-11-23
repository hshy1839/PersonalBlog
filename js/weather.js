function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live in", lat, lng);
}
function onGeoError() { alert("위치를 확인 할 수 없습니다.");}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
