console.log(this);

// DEPENDENCIES-----------------
// var search = document.getElementById("search").value;
var APIKey = "d57558568af97f24e4322a8470d63a11";
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
var city;
var queryURL =
  "http://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  APIKey;

// //---
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

// FUNCTIONS--------------------
// user submits city name and it stores to local storage
button.addEventListener("click", function () {
  var search = document.getElementById("search");
  localStorage.setItem("search", search.value);
  console.log(search.value);
});

// get from local storage

// run query for weather based off city
fetch(queryURL);

// display current weather in Atlanta

// 5 day display

// Austin weather

// Chicago weather

// New York weather

// DESIGN-----------------------

// USER INTERACTIONS------------
// user inputs data "city" and click submit to return the weather display
// user clicks city specific button
// user clicks city specific button
// user clicks city specific button
