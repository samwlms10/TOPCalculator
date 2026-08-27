let add = function(num1, num2){
    return num1 + num2;
}

let subtract = function(num1, num2){
    return num1 - num2;
}

let multiply = function(num1, num2){
    return num1 * num2;
}

let divide = function(num1, num2){
    let dividedNum = num1 / num2;
    return dividedNum.toFixed(2);
}

let operate = function(num1, operator, num2) {
    if (operator === "+") {
        return add(num1,num2);
    }
    else if (operator === "-") {
        return subtract(num1,num2);
    }
    else if (operator === "x") {
        return multiply(num1,num2);
    }
    else if (operator === "/") {
        return divide(num1,num2);
    }
}

const buttons = document.querySelectorAll('button');
const screen = document.getElementById('calculator-screen')

buttons.forEach((button) => {
    let num1;
    let num2;
    let operator;
    let operatorSymbols = ["+","-","x","/","="]
    button.addEventListener('click', (event) => {
        if (event.target.textContent != "<="){
            if (screen.textContent === "" && operatorSymbols.includes(event.target.textContent)){
                return;
            }
        let currentInput = screen.textContent.trim();
        let lastChar = currentInput.slice(-1);
        
        if (operatorSymbols.includes(lastChar) && operatorSymbols.includes(event.target.textContent)){
                screen.textContent = currentInput.slice(0, -1) + event.target.textContent;
        } 
        else {
                screen.textContent += event.target.textContent;
            }

        screen.textContent += event.target.textContent;
        let input = screen.textContent.trim();
        let split = input.match(/^(\d+(?:\.\d+)?)([+\-*x/])(\d+(?:\.\d+)?)([+\-*x=/])?/);
        if(split){
            num1 = Number(split[1]);
            operator = split[2];
            num2 = Number(split[3]);
            if(split[4]){
                screen.textContent = operate(num1,operator,num2);
                if (split[4] != "="){
                    screen.textContent += split[4]
                }
            }
        }
    
    }
    if (event.target.textContent === "<="){
        screen.textContent = "";
    }
    })
})