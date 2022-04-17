var hometeam = "";
var vistema = "";

function nextpage(){
var myXMLRequest = new XMLHttpRequest();
myXMLRequest.onload = displayPHPbox;
myXMLRequest.open("POST", "simulation.php", true);
myXMLRequest.send();
}

function displayPHPbox(){
  var output = "";
  var data = this.responseText;
  if(data!= "invalid"){
    var newLocation = location +
  }
}

<label for="visitteam">Los Angeles Dodgers:</label></br>
<input type="checkbox" value="Barnes" name="dodgers[]">Austin Barnes</br>
<input type="checkbox" value="Beaty" name="dodgers[]">Matt Beaty</br>
<input type="checkbox" value="Bellinger" name="dodgers[]">Cody Bellinger</br>
<input type="checkbox" value="Betts" name="dodgers[]">Mookie Betts</br>
<input type="checkbox" value="Lux" name="dodgers[]">Gavin Lux</br>
<input type="checkbox" value="McKinney" name="dodgers[]">Billy McKinney</br>
<input type="checkbox" value="McKinstry" name="dodgers[]">Zach McKinstry</br>
<input type="checkbox" value="Muncy" name="dodgers[]">Max Muncy</br>
<input type="checkbox" value="Neuse" name="dodgers[]">Sheldon Neuse</br>
<input type="checkbox" value="Pollock" name="dodgers[]">AJ Pollock</br>
<input type="checkbox" value="Pujols" name="dodgers[]">Albert Pujols</br>
<input type="checkbox" value="Raley" name="dodgers[]">Luke Raley</br>
<input type="checkbox" value="Rios" name="dodgers[]">Edwin Rios</br>
<input type="checkbox" value="Seager" name="dodgers[]">Corey Seager</br>
<input type="checkbox" value="Smith" name="dodgers[]">Will Smith</br>
<input type="checkbox" value="Souza" name="dodgers[]">Steven Souza</br>
<input type="checkbox" value="Taylor" name="dodgers[]">Chris Taylor</br>
<input type="checkbox" value="JTurner" name="dodgers[]">Justin Turner</br>
<input type="checkbox" value="TTurner" name="dodgers[]">Trea Turner</br>
<br><br>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-2021.css">
<style>
body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif}
.w3-bar,h1,button {font-family: "Montserrat", sans-serif}
.fa-anchor,.fa-coffee {font-size:200px}
</style>

<div class="w3-top">
  <div class="w3-bar w3-orange w3-card w3-left-align w3-large">
    <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" href="javascript:void(0);" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
    <a href="homepage.html" class="w3-bar-item w3-button w3-padding-large w3-hover-white">Home</a>
    <a href="stats.html" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Statistics</a>
    <a href="facts.html" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Facts</a>
    <a href="simulation.html" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-white">Simulation</a>
  </div>

  <!-- Navbar on small screens -->
  <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
    <a href="stats.html" class="w3-bar-item w3-button w3-padding-large">Statistics</a>
    <a href="facts.html" class="w3-bar-item w3-button w3-padding-large">Facts</a>
    <a href="simulation.html" class="w3-bar-item w3-button w3-padding-large">Simulation</a>
  </div>
</div>
