document.getElementById('transfer-btn').addEventListener('click', function(){

    // 1 get account number and validate.
    const number = getValue('user-number');
    if(number.length !== 11){

        alert('Please provide a valid account number');
        clearInput('user-number');
        return;
    }

    // 2 get amount number and validate.
    // 3 calculate new balance.
    const amount = getValue('transfer-amount');
    const balance = getBalance();
    const newBalance = balance - Number(amount);

    if(newBalance < 0){
        alert('Please provide a valid amount.')
        clearInput('transfer-amount');
        return;
    }
    
    // 4 get pin number and verify.
    const pin = getValue('transfer-pin');
    if(pin !== '2712'){

        alert('Incorrect pin number');
        clearInput("transfer-pin");
        return;
    }

    // true:: transfer successfully and set new balance.
    alert("Success transfer money");
    setNewBalance(newBalance);

    // clear input.
    clearInput('user-number');
    clearInput('transfer-amount');
    clearInput('transfer-pin');
})

    // 1 get account number and validate.
    // 2 get amount number and validate.
    // 3 calculate new balance.
    // 4 get pin number and verify.
    // true:: transfer successfully and set new balance.
    // clear input.