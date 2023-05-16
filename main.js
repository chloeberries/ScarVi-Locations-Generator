var area = "";
var useArea;
var helpA;
var button;
var body;
var numResult;
var monsters;
var areaName;
var namedResult;
var result = document.getElementById("result");
document.body.onload = areaButtons();


function numResultGen(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // max = exclude, min = included
}

function areaButtons(){
    areas.forEach(area => {
        console.log(area)
        const newDiv = document.createElement("div");
        const newButton = document.createElement("button");
        ba = area.toString();
        console.log(ba)
        newButton.innerHTML = ba;
        newDiv.appendChild(newButton);
        const currentDiv = document.getElementById("old-buttons");
        document.body.insertBefore(newDiv, currentDiv);
        console.log(area)
        newButton.onclick = function generate(){
            var result = document.getElementById("result");
            console.log(masterList.area.length);
            numResult = numResultGen(0, masterList.area.length);
            namedResult = area.monsters[numResult]
            result.innerHTML = area.monsters[numResult]
            setter(namedResult)
        }
        
        
    })
}



 /**function generate(area){
    var result = document.getElementById("result");
    numResult = numResultGen(0, area.monsters.length)
    namedResult = area.monsters[numResult]
    result.innerHTML = area.monsters[numResult]
    setter(namedResult)


}**/