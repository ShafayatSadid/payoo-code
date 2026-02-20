document.getElementById('pay-btn').addEventListener('click', function(){

    // 1 get bank account and validate
    const bank = getValue('pay-bank');
    if(bank === 'Select A bank' || bank === ""){
        alert('Please select a bank');
        return;
    }

    // 2 get account number and validate.
    const number = getValue("pay-number");
    if(number.length !== 11){

        alert('Please provide a valid account number');
        clearInput('pay-number');
        return;
    }

    // 3 get amount and validate.
    const amount = getValue('pay-amount');

    // 4 calculate new balance.
    const balance = getBalance();
    const newBalance = balance - Number(amount);
    if(newBalance < 0){

        alert("Please provide a valid amount");
        clearInput("pay-amount");
        return;
    }

    // 5 get pin number and verify.
    const pin = getValue("pay-pin");
    if(pin !== '1234'){

        alert('Incorrect pin number');
        clearInput("pay-pin");
        return;
    }

    // 6 true:: alert add money successfully and set new balance.
    alert(`Success Pay Bill from ${bank}
Amount: ${amount}`);
    setNewBalance(newBalance);

    // clear all input boxes.
    clearInput('pay-number');
    clearInput('pay-amount');
    clearInput('pay-pin');
    clearInput('pay-bank')
})