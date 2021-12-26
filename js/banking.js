function getInput(inputId){
    const input = document.getElementById(inputId);
    const inputNumber = parseFloat(input.value);

    input.value = '';
    console.log(inputNumber);
    return inputNumber;
};

function inputUpdate(depositWithdrawUpdateId, inputNumber){
    const oldValue = document.getElementById(depositWithdrawUpdateId);
    const oldValueNumber = parseFloat(oldValue.innerText);

    const newValue = oldValueNumber + inputNumber;
    oldValue.innerText = newValue;
};

function getCurrentBalance(){
    const balanceId = document.getElementById('balance');
    const currentBal = parseFloat(balanceId.innerText);
    return currentBal;
}

function balanceUpdate(inputNumber, isAdd){
    const balanceId = document.getElementById('balance');
    const balanceNumber = parseFloat(balanceId.innerText);
    
    if(isAdd == true){
        const updateBalance = balanceNumber + inputNumber;
        balanceId.innerText = updateBalance;
    }
    else{
        const updateBalance = balanceNumber - inputNumber;
        balanceId.innerText = updateBalance;
    }
};



document.getElementById('deposit-btn').addEventListener('click', function(){
    // const depositInput = document.getElementById('deposit-input-field');
    // const depositInputNumber = parseFloat(depositInput.value);
    const depositInputNumber = getInput('deposit-input-field');

    // const depositOldValue = document.getElementById('deposit');
    // const depositOldValueNumber = parseFloat(depositOldValue.innerText);

    // const newValue = depositOldValueNumber + depositInputNumber;

    /////////shudhu id 1ta variable a call kora na thakle innerText o set kora jabe na, input value clear korao jabena!

    //depositOldValue.innerText = newValue;
    
    //depositInput.value = '';

    // const balanceId = document.getElementById('balance');
    // const balanceNumber = parseFloat(balanceId.innerText);
    // const updateBalance = balanceNumber + depositInputNumber;
    // balanceId.innerText = updateBalance;
    if(depositInputNumber > 0){
        inputUpdate('deposit', depositInputNumber);
        balanceUpdate(depositInputNumber, true);
    };
    
});


document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInputNumber = getInput('withdraw-input-field');
    const currentBalance = getCurrentBalance();
    if( withdrawInputNumber > 0 && withdrawInputNumber < currentBalance){
        inputUpdate('withdraw', withdrawInputNumber);
        balanceUpdate(withdrawInputNumber, false);
    };
    if( withdrawInputNumber > currentBalance){
        console.log("You cannot withdraw more than your current balance!")
    };
});