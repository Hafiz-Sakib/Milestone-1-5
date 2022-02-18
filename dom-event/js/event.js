// First Method Was Bangla Method,Tag er Pashei Kore Fela Hoisilooo

// Second Method For Event(Liked It!)

function makeCyan() {
  document.body.style.backgroundColor = "cyan";
}
function makeDark() {
  document.body.style.backgroundColor = "black";
}

//Third method For Event

const blueButton = document.getElementById("make-blue-button");

blueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

//Fouth Method(Anonymous Function)
//anonymous function e naam na dileo chole
const greenButton = document.getElementById("make-green-button");

greenButton.onclick = function () {
  document.body.style.backgroundColor = "green";
};

//fifth Method (Mostly Used Method)
//handle by using  add eventListener

const goldenRod = document.getElementById("make-goldenrod-button");
goldenRod.addEventListener("click", makeGoldeRod);

function makeGoldeRod() {
  document.body.style.backgroundColor = "goldenrod";
}

//addEvent Listener with Anonymous Function
const hotpinkButton = document.getElementById("make-hotpink-button");
hotpinkButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "hotpink";
});

//Sixth Method (Direct ShortCut)
const lightGreenButton = document
  .getElementById("make-lightGreen-button")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "lightgreen";
  });
