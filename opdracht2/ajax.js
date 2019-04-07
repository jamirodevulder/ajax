let bereken = document.getElementById("bereken");
let lengte = document.getElementById("lengte");
let gewicht = document.getElementById("gewicht");
let resultaat = document.getElementById("resultaat");

bereken.addEventListener('click', function(){

ajax(parseInt(gewicht.value), parseInt(lengte.value));

});

gewicht.addEventListener('focus', function(){
clearResult();
});

lengte.addEventListener('focus', function(){
clearResult();
});

function clearResult()
{
  console.log("test");
resultaat.innerHTML = "";
}



function ajax(gewicht, lengte){
let controlscript = "BMI.php";
let xmlhttp = new XMLHttpRequest();
let httpString = controlscript + "?gewicht=" + gewicht + "&lengte=" + lengte;
xmlhttp.onreadystatechange = function(){
if(this.readyState == 4 && this.status == 200){
httpResponse = xmlhttp.responseText;
resultaat.innerHTML = httpResponse;


    }
  };


console.log(httpString);
xmlhttp.open("GET", httpString, true);
xmlhttp.send();

}
