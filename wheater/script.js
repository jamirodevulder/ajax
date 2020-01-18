let activate1 = document.getElementById('activate1');
let activate2 = document.getElementById('activate2');
let activate3 = document.getElementById('activate3');
activate1.addEventListener("click", getWeather1);
activate2.addEventListener("click", getWeather2);
activate3.addEventListener("click", getWeather3);

let result = document.getElementById('result');

let apiAdress = "http://weerlive.nl/api/json-data-10min.php?key=";
let key = "demo";
let locatie = "&locatie=";
let geoLocatie = "Amsterdam";
let url = apiAdress + key + locatie + geoLocatie;

function getWeather1(){
    console.log(url);
    makeAjaxCall(url, "GET"). then (showWeather1, errorHandler);
}

function showWeather1(JSONresponseFromAjax){
    result.innerHTML = JSONresponseFromAjax;
}

function getWeather2(){
    makeAjaxCall(url, "GET"). then (showWeather2, errorHandler);
}

function showWeather2(JSONresponseFromAjax){
    let weatherObject = JSON.parse(JSONresponseFromAjax);
    let completeData=""
    for (const [key, value] of Object.entries(weatherObject.liveweer[0])){
        console.log('${key}: ${value}');
        completeData += key + " : " + value + "<br>"
        result.innerHTML = completeData;
    }
}

function getWeather3(){
    makeAjaxCall(url, "GET"). then (showWeather3, errorHandler);
}

function showWeather3(weatherString){
    let weatherObject = JSON.parse(weatherString);
    let ditWeer =
        weatherObject.liveweer[0].plaats +
        "<br>Temperatuur: " +
        weatherObject.liveweer[0].temp + " &#176;C" +
        "<br> Verwachting: " +
        weatherObject.liveweer[0].verw +
        "<br> Weerbeeld: " +
        weatherObject.liveweer[0].d0weer +
        "<br><br> Wolkennacht: " +
        weatherObject.liveweer[0].d0neerslag+
        "<br> kans op neerslag: " +
        weatherObject.liveweer[0].d0neerslag + "%";
        result.innerHTML = ditWeer;
}
