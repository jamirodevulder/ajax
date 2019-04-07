<?php
$gewicht = $_GET["gewicht"];
$lengte = $_GET["lengte"];
BMIcalc($gewicht, $lengte);



function BMIcalc($gewicht, $lengte)
{
$bmi = $gewicht / (($lengte / 100) * ($lengte / 100));
$bmi = round($bmi, 1);

switch ($bmi) {

  case $bmi < 18.5:
    echo "bmi: ", $bmi ,"<br>";
    echo "lengte in meter: ", $lengte / 100 ,"m <br>";
    echo "gewicht in kg:  ", $gewicht ,"kg <br>";
    echo "ondergewicht";
    break;

  case $bmi >= 18.5 && $bmi <= 24.9:
    echo "bmi: ", $bmi ,"<br>";
    echo "lengte in meter: ", $lengte / 100 ,"m <br>";
    echo "gewicht in kg:  ", $gewicht ,"kg <br>";
    echo "normaal gewicht";
    break;

  case $bmi >= 25 && $bmi <= 29.9:
    echo "bmi: ", $bmi ,"<br>";
    echo "lengte in meter: ", $lengte / 100 ,"m <br>";
    echo "gewicht in kg:  ", $gewicht ,"kg <br>";
    echo "overgewicht";
    break;

  case $bmi >= 30 && $bmi <= 34.9:
    echo "bmi: ", $bmi ,"<br>";
    echo "lengte in meter: ", $lengte / 100 ,"m <br>";
    echo "gewicht in kg:  ", $gewicht ,"kg <br>";
    echo "obesitas";
    break;

  case $bmi > 35:
    echo "bmi: ", $bmi ,"<br>";
    echo "lengte in meter: ", $lengte / 100 ,"m <br>";
    echo "gewicht in kg:  ", $gewicht ,"kg <br>";
    echo "extreme obesitas";
    break;








  default:

    break;
}




}

?>
