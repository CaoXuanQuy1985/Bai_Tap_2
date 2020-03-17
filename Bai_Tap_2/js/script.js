let locInputElem, locAdd, locArray, locConcat, locResult;
let arrayResult;

window.onload = init();

function init(){
    locInputElem = document.getElementById("input-Elem");
    locInputInt = document.getElementById("input-Int");
    locAddInt = document.getElementById("addInt");
    locAdd = document.getElementById("add");
    locArray = document.getElementById("array");
    locRemove = document.getElementById("remove");
    locResult = document.getElementById("result");
    arrayResult = [];
}

function showArray(array){
    let result = "";
    result += "[";
    array.forEach(function(element){
        result += (array.indexOf(element) !== array.length - 1) ? element + ", " : element;
    });
    result += "]";
    locArray.innerHTML = result;
}

function add(newElem){
    arrayResult.push(newElem);
    locInputElem.value = "";
    showArray(arrayResult);
}

function tryRemoveFromeArray(arr, number){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== number){
            newArray.push(arr[i]);
        }
    }

   locResult.innerHTML = "Mảng sau khi đã xóa phần tử: " + number + " : " + newArray;
}

locAdd.addEventListener("click", function(){
    add(parseFloat(locInputElem.value))
}, false);

locRemove.addEventListener("click", function(){
    let valueNumber = parseInt(locInputInt.value);
    tryRemoveFromeArray(arrayResult, valueNumber);
}, false);

