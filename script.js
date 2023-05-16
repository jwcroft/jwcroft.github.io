"use strict"

var r = document.getElementById("rbw"),
    currentHue = 0,
    hueAddition = 1,
    rainbowTiming = 1000 / 50;

// https://www.w3schools.com/colors/colors_hsl.asp
function doThatFuckingColorThing() {
    var color = "hsl(" + currentHue + ", 80%, 60%)",
        nextHue = currentHue + hueAddition;
    currentHue = nextHue > 360 ? 0 : nextHue;
    r.style.color = color;
    setTimeout(doThatFuckingColorThing, rainbowTiming);
}

doThatFuckingColorThing();