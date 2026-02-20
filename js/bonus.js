document.getElementById('bonus-btn').addEventListener('click', function(){

    // get bonus coupon and validate.
    const bonus = getValue('input-bonus');

    if(bonus !== '720'){

        alert('Enter a valid coupon code');
        clearInput("input-bonus");
        return;
    }

    // calculate new balance
    const balance = getBalance();
    const newBalance = balance + 2000;

    // true:: coupon code applied successfully
    alert('Coupon code applied successfully and you earned 2000$.');
    setNewBalance(newBalance);

    // clear input box
    clearInput('input-bonus')
})