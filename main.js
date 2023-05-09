var area = "";
var numResult;
var monsters;
var areaName;
var namedResult;
var result = document.getElementById("result");

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