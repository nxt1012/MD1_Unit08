let userInput;
let inputArray = [];
let display ="";
let result;
function addUserInput() {
    userInput =  document.getElementById("input").value;
    inputArray.push(userInput);
    display += `Element ${inputArray.length} = ${inputArray[inputArray.length-1]} <br>`;
}

function displayUserInput() {
    result = document.getElementById("result");
    result.innerHTML = display;
}