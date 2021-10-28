console.log(this);

// DEPENDENCIES-----------------
var search = document.getElementById("search").value;
// var APIKey = "d57558568af97f24e4322a8470d63a11";
// var city;
// var queryURL =
//   "http://api.openweathermap.org/data/2.5/weather?q=" +
//   city +
//   "&appid=" +
//   APIKey;

// var queryURL =
//   "https://api.openweathermap.org/data/2.5/onecall?lat=33.75&lon=-84.38&exclude=hourly&appid=d57558568af97f24e4322a8470d63a11";

var button = document.getElementById("button-addon2");
var austin = document.getElementById("austin");
var chicago = document.getElementById("chicago");
var newyork = document.getElementById("newyork");
var weatherDisplay = document.getElementById("weather-display");
var day1 = document.getElementById("day1");
var day2 = document.getElementById("day2");
var day3 = document.getElementById("day3");
var day4 = document.getElementById("day4");
var day5 = document.getElementById("day5");
var li1 = document.getElementById("li1");
var li2 = document.getElementById("li2");
var li3 = document.getElementById("li3");
var li4 = document.getElementById("li4");
var current = document.getElementById("current");

// FUNCTIONS--------------------
// user submits city name and it stores to local storage
button.addEventListener("click", function () {
  var search = document.getElementById("search");
  localStorage.setItem("search", search.value);
  console.log(search.value);
});

// get from local storage ---- recent searches?

// current time
function displayTime() {
  var time = moment().format("LLLL");
  console.log(time);
  var timeSpan = document.getElementById("time");
  timeSpan.textContent = time;
}
displayTime();

// run query for weather based off city

// Current API function, working on new API that includes multiple cities
function getApi() {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=33.75&lon=-84.38&exclude=hourly&units=imperial&appid=d57558568af97f24e4322a8470d63a11";
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // for loop here to run through the data for each item
      for (var i = 0; i < data.length; i++) {
        var current = data[i].current.weather[0].main;
        var li1 = data[i].current.temp;
        var li2 = data[i].current.wind_speed;
        var li3 = data[i].current.humidity;
        var li4 = data[i].current.uvi;

        // console.log(current);
        // console.log(li1);
      }
      current.textContent = "today is:" + data.current.weather[0].main;
      li1.textContent = "Temp: " + data.current.temp + " fahrenheit";
      li2.textContent = "Wind speed: " + data.current.wind_speed + " mph";
      li3.textContent = "Humidity: " + data.current.humidity + " %";
      li4.textContent = "UV Index: " + data.current.uvi;
    });
}

getApi();

// // Test API function
// function getApi() {
//   var APIKey = "d57558568af97f24e4322a8470d63a11";
//   var city;
//   var queryURL =
//     "http://api.openweathermap.org/data/2.5/weather?q=" +
//     city +
//     "&appid=" +
//     APIKey;

//   fetch(queryURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       // for loop here to run through the data for each item
//       for (var i = 0; i < data.length; i++) {
//         var current = data[i].current.weather[0].main;
//         var li1 = data[i].current.temp;
//         var li2 = data[i].current.wind_speed;
//         var li3 = data[i].current.humidity;
//         var li4 = data[i].current.uvi;

//         console.log(current);
//         console.log(li1);
//       }
//       // current.textContent = "today is:" + data.current.weather[0].main;
//       // li1.textContent = "Temp: " + data.current.temp + " fahrenheit";
//       // li2.textContent = "Wind speed: " + data.current.wind_speed + " mph";
//       // li3.textContent = "Humidity: " + data.current.humidity + " %";
//       // li4.textContent = "UV Index: " + data.current.uvi;
//     });
// }

// getApi();

// 5 day display 0- historical data will need five API pulls

// Austin weather button to pull from data

// Chicago weather button to pull from data

// New York weather button to pull from data

// DESIGN-----------------------

// USER INTERACTIONS------------
// user inputs data "city" and click submit to return the weather display
// user clicks city specific button Austin
// user clicks city specific button Chicago
// user clicks city specific button New York
