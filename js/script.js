document.getElementById('pin-btn').addEventListener('click', function () {
    document.getElementById('display-pin').value = getPin();
});

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('display-numbers');
    if (number == 'C') {
        calcInput.value = '';
    }
    else if (number == '<') {
        const tempArray = calcInput.value.split('');
        tempArray.pop();
        calcInput.value = tempArray.join('');
    }
    else if (number == 'Submit') {
        verifyPin();
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}

var count = 3; 
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('display-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }

    // counting action left
    count--;
    document.getElementById('action-left').innerText = count;
    if(count == 0){
        document.getElementById('submit-btn').setAttribute('disabled',true);
    }
}