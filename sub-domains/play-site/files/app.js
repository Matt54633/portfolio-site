let information_title = document.getElementById('information_title');
let week = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
let months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
// display and update time
function update_clock() {    
    let todays_date = new Date();
    let current_hour = todays_date.getHours();
    let current_minute = todays_date.getMinutes();
    if (current_minute < 10) {
        current_minute = "0" + current_minute;
    }
    let current_month = months[(todays_date.getMonth() % 12)];
    let current_day = week[(todays_date.getDay() % 7)];
    let date_string = current_day + " / " + current_hour + ":" + current_minute + " / " +  current_month;
    information_title.innerText = date_string;
} 
setInterval(update_clock, 1000);
// calculate days until birthday and loading bar
function birthday() {
    let current_date = new Date();
    let current_year = current_date.getFullYear();
    let birthday_date = new Date(current_year, 9, 30);
    let difference_between_dates = birthday_date.getTime() - current_date.getTime();
    let days_until_birthday = Math.ceil(difference_between_dates / (1000 * 3600 * 24));
    document.getElementById('birthday_para').innerText = days_until_birthday + " days to go!";
    let percentage = 100 - (days_until_birthday / 365 * 100);
    document.getElementById('loading_bar').style.width = percentage + "%";
}
birthday();
// load weather data for yeovil in weather widget
const apiKey = '96ef4b80e6d934610538d335d0ab793e';
let searchLocation = 'Yeovil';
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=${apiKey}&units=metric`)
  .then((response) => response.json())
  .then((data) => {
    const { main, weather } = data;
    document.getElementById('weather_temp').innerText = Math.floor(main.temp) + '°'
    document.getElementById('weather_para').innerText = capitaliseConditions(weather[0].description) + ' / Yeovil';
    document.getElementById('weather_img').src = `https://matt54633.com/weather/weatherIcons/${weather[0]["icon"]}.svg`;
});
// capitalise the weather conditions coming from the api
function capitaliseConditions(conditionsType) {
    conditionsType = JSON.stringify(conditionsType).replaceAll('"', '');
    conditionsType = conditionsType.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    return conditionsType;
}
// copyright text
document.getElementById('footer_title').innerHTML = '©Matt Sullivan / ' + new Date().getFullYear();