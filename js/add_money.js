document.getElementById('add-btn').addEventListener('click', function(){
    
    // 1 get bank account and validate
    const bank = getValue('select-bank');
    if(bank === 'Select A bank' || bank === ""){
        alert('Please select a bank');
        return;
    }

    // 2 get account number and validate.
    const number = getValue("account-number");
    if(number.length !== 11){

        alert('Please provide a valid account number');
        clearInput('account-number');
        return;
    }

    // 3 get amount and validate.
    const amount = getValue('add-amount');
    if(amount < 0 || amount > 100000){

        alert("Please provide a valid amount");
        clearInput("add-amount");
        return;
    }
    
    // 4 calculate new balance.
    const balance = getBalance();
    const newBalance = balance + Number(amount);

    // 5 get pin number and verify.
    const pin = getValue("add-pin");
    if(pin !== '2712'){

        alert('Incorrect pin number');
        clearInput("add-pin");
        return;
    }

    // 6 true:: alert add money successfully and set new balance.
    alert(`Success Add-Money from ${bank}
Amount: ${amount}`);
    setNewBalance(newBalance);

    // clear all input boxes.
    clearInput('account-number');
    clearInput('add-amount');
    clearInput('add-pin');
    clearInput('select-bank')
})

// 1 get bank account and validate
// 2 get account number and validate.
// 3 get amount and validate.
// 4 calculate new balance.
// 5 get pin number and verify.
// 6 true:: alert add money successfully and set new balance.
// clear all input boxes.