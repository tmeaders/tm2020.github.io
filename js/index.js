/*--------------------            last modified Date       -----------*/
let date = new Date();
let currentyear = date.getFullYear();
let lastupdate = document.lastModified;
document.getElementById("lastupdate").innerHTML = lastupdate;
document.getElementById("year").innerHTML = currentyear;

/*--------------------            hide nav       ---------------------*/
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");

}
/*--------------------            weather & forcast       ---------------*/
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.5083&lon=86.9458&units=imperial&APPID=466dca7cca93940a33882268fd25bd99";

fetch(apiURL)
.then ((response)=> response.json())
.then ((jsObject) => {
    
   document.getElementById('current').textContent = jsObject.current.weather[0].description;

   document.getElementById('currentTemp').textContent = Math.ceil(jsObject.current.temp);

   document.getElementById('humidity').textContent = jsObject.current.humidity;

   var x = 1;
   let weekDay = new Array(7);
   weekDay[0]= "Sunday";
   weekDay[1] = "Monday";
   weekDay[2] = "Tuesday";
   weekDay[3] = "Wednesday";
   weekDay[4] = "Thursday";
   weekDay[5] = "Friday";
   weekDay[6] = "Saturday";

   for (i = 0; i < jsObject.daily.length; i++) {
       
       let date = new Date(jsObject.daily[i].dt * 1000)
       let weather = weekDay[date.getDay()];

       if ( x <= 3){
           document.getElementById('weather' + x).textContent = weather;

           document.getElementById('forecast' + x).textContent = Math.ceil(jsObject.daily[i].temp.day) + '°F';

           const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.daily[i].weather[0].icon + '.png';
           const desc = jsObject.daily[i].weather[0].description;
           document.getElementById('icon' + x).setAttribute('src', imagesrc);
           document.getElementById('icon' + x).setAttribute('alt', desc);
           
           x++

       }
   }
});
