// get value from input
function getValue(id){

    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

// get balance from element
function getBalance(){
    const element = document.getElementById('balance');
    const balance = element.innerText;
    console.log("current balance:", balance);
    return Number(balance);
}

// set new balance
function setNewBalance(newBalance){
    const userBalance = document.getElementById('balance');
    userBalance.innerText = newBalance;
}

// clear input box

function clearInput(id){

    const input = document.getElementById(id);
    input.value = "";
}

// show only selected service form and hidden all.

function showOnly(id){

    // get all services
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cash-out');
    const transferMoney = document.getElementById('transfer-money')
    const getBonus = document.getElementById('get-bonus');
    const payBill = document.getElementById('pay-bill');

    // hidden all services.
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');
    transferMoney.classList.add('hidden');
    getBonus.classList.add('hidden');
    payBill.classList.add('hidden');

    // show only selected service.
    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}



