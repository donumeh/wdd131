const date = new Date();

document.getElementById("currentyear").
	textContent = date.getFullYear();

document.getElementById("lastModified").
	textContent = document.lastModified;


function calculateWindChill(temp, windSpeed) {
	return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 
            0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}


const temperature = 10;
const windSpeed = 5;

const windChillElement = document.querySelector(".windChill");


if (temperature <= 10 && windSpeed > 4.8) {
	windChillElement.innerHTML = `<b>Wind Chill: </b> ${calculateWindChill(temperature, windSpeed)}°C`;
} else {
	windChillElement.textContent = "N/A";
}