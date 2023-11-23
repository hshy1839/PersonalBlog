const today = document.querySelector("h2#today");

function getToday() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    today.innerText = `${year}.${month}.${day}`;
}

getToday();
setInterval(1000, getToday);
