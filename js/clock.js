const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}


getClock();
setInterval(getClock, 1000);






//"1".padStart(글자수: 2, 안넘으면 추가 : "0");
// setInterval(function, 5000(5초)); 5초마다 함수작동
// setTimeout(function, 5000); 5초후에 함수작동