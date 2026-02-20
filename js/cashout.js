document.getElementById('cashout-btn').addEventListener('click', function(){

    // get agent number and validate
    const number = getValue('agent-number');
    // validation
    const agentNumber = document.getElementById('agent-number');
    if(number.length !== 11){

        alert("Please provide a valid number");
        agentNumber.value = "";
        return;
    }

    // step 2 get current balance.
    const balance = getBalance();
    // and cash-out amount number
    const amount = getValue('cashout-amount');
    const cashOutAmount = document.getElementById('cashout-amount');

    // step 3 calculate new balance
    const newBalance = balance - Number(amount);

    // validation
    if(newBalance < 0){
        alert('Please provide a valid amount.')
        cashOutAmount.value = "";
        return;
    }

    // step 4 get pin number and verify
    const pin = getValue('cashout-pin');
    const userPin = document.getElementById('cashout-pin');

    // verify
    if(pin !== '2712'){

        alert('Incorrect pin')
        userPin.value = "";
        return;
    }
    
    // step 5 true:: alert cash-out successfully and set new balance
    alert("cash-out successfully");
    setNewBalance(newBalance);

    // step 7 clear all input boxes.
    agentNumber.value = "";
    cashOutAmount.value = "";
    userPin.value = "";

})
// step 1 get agent number and validate
// step 2 get amount number
// step 3 calculate new balance
// step 4 get pin number and verify
// step 5 true:: alert cash-out successfully and set new balance
// step 6 false:: alert invalid pin and cash-out failed
// step 7 clear all input boxes.


// document.getElementById('cashout-btn').addEventListener('click', function(){

//     // step 1 get the agent number and validate.
//     const agentNumber = document.getElementById('agent-number');
//     const number = agentNumber.value;
//     console.log('Number:', number.length);

//     // validation
//     if(number.length !== 11){
//         alert('Please provide a valid agent number');
//         agentNumber.value = "";
//         return;
//     }

//     // step 2 get the amount number and current balance and validate it is less then current balance.
//     const cashOutAmount = document.getElementById('cashout-amount');
//     const amount = cashOutAmount.value;
//     console.log('Amount:',amount);

//     // get current balance
//     const currentBalance = document.getElementById('balance');
//     const balance = currentBalance.innerText;
//     console.log('Current Balance:', balance)

//     // calculate new balance
//     const newBalance = Number(balance) - Number(amount);
//     // validation
//     if(newBalance < 0){

//         alert("Invalid Amount");
//         // clear all input boxes
//         cashOutAmount.value = "";
//         return;
//     }
//     console.log('new balance:', newBalance)
    
//     // step 3 calculate and set new current balance.
//     currentBalance.innerText = newBalance;

//     // step 4 get the pin number and verify.
//     const cashOutPin = document.getElementById('cashout-pin');
//     const pin = cashOutPin.value;
//     console.log('Pin:', pin);

//     // step 5 if all is true, alert cash-out successfully || if on of theme false, alert cash-out failed please try again.
//     if(pin === "2712"){
//         alert("Cash-out Successfully")

//         //set new current balance.
//         currentBalance.innerText = newBalance;
//     }
//     else{
//         alert(" Invalid Pin and cash-out failed please try again.")
//     }
     
//     // step 6 clear all input boxes.
//     // agentNumber.value = "";
//     // cashOutAmount.value = "";
//     // cashOutPin.value = "";
// })