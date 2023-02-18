let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");

function convertSeconds() {
    let hoursInput = hoursInputEl.value;
    let minutesInput = minutesInputEl.value;
    if (hoursInput === "") {
        errorMsg.textContent = "Please enter a valid number of hours"
    } else if (minutesInput === "") {
        errorMsg.textContent = "Please enter a valid number of minutes"
    } else {
        errorMsg.textContent = "";
        let numberOfSeconds = (hoursInput * 3600) + (minutesInput * 60);
        console.log(numberOfSeconds)
        timeInSeconds.classList.add("timeInSeconds");
        timeInSeconds.textContent = numberOfSeconds + "s";

    }
}
convertBtn.addEventListener("click", convertSeconds);