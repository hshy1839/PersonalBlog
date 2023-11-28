function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "fc6eb4cf4aea0b0a9acba37f030f6bb4";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url).then(response => response.json()).then((data)=> {
        const weatherContainer = document.getElementById("#weather");
        const name = data.name;
        const weather = data.weather[0].main;
        });
    console.log("you live in", lat, lon);
    console.log(url);
}
function onGeoError() { alert("위치를 확인 할 수 없습니다.");}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
