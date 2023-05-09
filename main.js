var area = "";
var button;
var body;
var numResult;
var monsters;
var areaName;
var namedResult;
var result = document.getElementById("result");
document.body.onload = areaButtons();

function areaButtons(){
    areas.forEach(area => {
        const newDiv = document.createElement("div");
        const newButton = document.createElement("button");
        newButton.innerHTML = area;
        newDiv.appendChild(newButton);
        const currentDiv = document.getElementById("old-buttons");
        document.body.insertBefore(newDiv, currentDiv);
    })
}


function numResultGen(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // max = exclude, min = included
}

function generate(area){
    var result = document.getElementById("result");
    numResult = numResultGen(0, area.monsters.length)
    namedResult = area.monsters[numResult]
    result.innerHTML = area.monsters[numResult]
    setter(namedResult)


}