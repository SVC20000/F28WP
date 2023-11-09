const api = '19ea4c52afce7276e8b4bd05c1971df2';
const input = document.getElementById("cityInput");
const button = document.getElementById("btn");
const weather_info = document.getElementById("weather-info");

button. addEventListener("click", function(){

  const city = input.value;

  if (!city){
    alert ("Please Enter a City Name."); 
    return;
  }

  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET',`https://api.openweathermap.org/data/2.5/weather?q=` + city + `&units=metric&appid=` + api);

  ourRequest.onload = function() {
    if (ourRequest. status >= 200 && ourRequest.status < 400) {
    var ourData = JSON.parse(ourRequest.responseText);
    if(ourData.cod === 200){
      renderWeather(ourData);
    } else {
    alert("City not found");
    }
} else {
    alert("Error!")
  }

};
ourRequest.onerror = function() {
  console.error('Network Error');
};
ourRequest.send();
});

function renderWeather (Data){
  var temp = (Data.main.temp - 273.15).toFixed(2);
  var HTMLtext = "<p> The weather in " + Data.name + " is " + Data.weather[0].description + ".<br> The temperature is " + Data.main.temp + "°C with a wind speed of " + Data.wind.speed + "m/s. <hr></p>";

  weather_info.insertAdjacentHTML('beforeend', HTMLtext);
}
  