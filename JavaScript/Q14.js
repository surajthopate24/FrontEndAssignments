var el_up = document.getElementById("k1");
var el_down = document.getElementById("k2");
el_up.innerHTML = 
  "Click on the button to generate the array.";

function Run() {
    el_down.innerHTML = Array.from({
        length: 100
    }, () => Math.floor(Math.random() * 10));
}