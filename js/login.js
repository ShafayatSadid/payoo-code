document.getElementById('btn-login').addEventListener('click', function(){
    
    // step 1 get input number and validate
    const number = getValue('input-number');
    if(number.length !== 11){

        alert("Please Enter A 11 Digit Number");
        clearInput('input-number');
        return;
    }

    // get input pin and validate.
    const pin = getValue('input-pin');
    if(pin !== "1234"){

        alert('Incorrect Pin');
        clearInput("input-pin");
        return;
    }
    

    // true: login successfully
    alert('Login Successfully')

    // Go to homepage
    window.location.assign("/home.html");

    // clear the input boxes
    clearInput('input-number');
    clearInput('input-pin')
})