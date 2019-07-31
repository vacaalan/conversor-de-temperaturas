function CelsiusConversion() {
  var temp = document.getElementById("tempCelsius").value;
  document.getElementById("Fahrenheit").innerHTML=((temp*1.8)+32);
  document.getElementById("Kelvin").innerHTML=(parseInt(temp)+273.15);
}
function FahrenheitConversion() {
  var temp2 = document.getElementById("tempFahrenheit").value;
  document.getElementById("Celsius2").innerHTML=((temp2-32)/1.8);
  document.getElementById("Kelvin2").innerHTML=(((parseInt(temp2)-32)/1.8)+273.15);
}
function KelvinConversion() {
  var temp3 = document.getElementById("tempKelvin").value;
  document.getElementById("Fahrenheit3").innerHTML=(((temp3-273.15)*1.8)+32);
  document.getElementById("Celsius3").innerHTML=(parseInt(temp3)-273.15);
}