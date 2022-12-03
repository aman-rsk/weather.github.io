const API_KEY = `06c1aa75c007d838549faca09b06810a`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
	weather.innerHTML = `<h1> Fetching Data... <h1>`;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
	const response = await fetch(url);
	const data = await response.json();
	return showWeather(data);
};

const showWeather = (data) => {
	if (data.cod == "404") {
		weather.innerHTML = `<h1> City Not Found! <h1>`;
		return;
	}
	weather.innerHTML = `<div id="weatherIcon">
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div>
    <h1>${data.main.temp} °C</h1>
    <h2>${data.weather[0].main}</h2>
</div>`;
};

form.addEventListener("submit", function (event) {
	getWeather(search.value);
	event.preventDefault();
});
