let buttons = document.getElementsByClassName('one');
let result = document.getElementById('output');
        let numbers = [];
        let operators = [];
// Add event listener to each button
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(event){

        let clickedButton = event.target;   // which button got clicked

        if (clickedButton.textContent === "="){
            if (numbers.length >= 2 && operators.length >= 1) {
                // Calculate the sum
                let sum = parseFloat(numbers[0]);
                for (let i = 0; i < operators.length; i++){
                    let nextNumber = parseFloat(numbers[i + 1]);

                    switch (operators[i]) {
                        case "÷":
                            if (nextNumber === 0){
                                result.value = "Error Division By Zero";
                                return;
                            }
                            sum /= parseFloat(nextNumber);
                            break;
                        case "x":
                            sum *= parseFloat(nextNumber);
                            break;
                        case "+":
                            sum += parseFloat(nextNumber);
                            break;
                        case "-":
                            sum -= parseFloat(nextNumber);
                            break;

                        default:
                            break;
                    }
                }
           result.value = /*"Answer= " +*/ parseFloat(sum);
                // Reset
                numbers = [];
                operators = [];
          } else {
                    result.value = "Please enter at least two numbers and one operator!";
                    }
        }else if(isNaN(clickedButton.textContent) && clickedButton.textContent !== "."){ //before = is clicked and operators are accepted
            operators.push(clickedButton.textContent);  //DISPLAY: If, an operator button
            result.value += " " + clickedButton.textContent + " ";
        } else
        {
            if (clickedButton.textContent === "." && numbers[numbers.length - 1] && numbers[numbers.length - 1].toString().includes(".")) {
                return;
            }
            let inputNumber = clickedButton.textContent;//DISPLAY: If, a number button

            if (numbers.length === operators.length) {//Accumulate digits for current number
                numbers.push(inputNumber); //after the last operator
            } else { // If there is a number after the last operator, append the digit
                numbers[numbers.length - 1] = (numbers[numbers.length - 1] || "0") + inputNumber;
            }
            result.value += clickedButton.textContent;
        }
    });
}


let bttn = document.querySelectorAll('.one');
let change = document.getElementById('output');

for (let i = 0; i < buttons.length; i++){
    bttn[i].addEventListener("click", function(event){
        let clickedBtn = event.target;

        if (clickedBtn.id === 'buttonX') {
            buttonX.style.fontFamily = 'digital-7 Mono';
            change.style.fontFamily = 'digital-7 Mono';

        } else if (clickedBtn.id === 'buttonPlus') {
            buttonX.style.fontFamily = 'digital-7 Mono';
            change.style.fontFamily = 'digital-7 Mono';

        } else {
            return;
        }
    });
}