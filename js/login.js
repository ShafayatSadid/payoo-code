document.getElementById('btn-login').addEventListener('click', function(){
    
    // step 1 get input number
    const inputNumber = document.getElementById('input-number');
    const number = inputNumber.value;
    // & get input pin
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log('Number:', number, 'Pin:', pin);

    // step 2 match the number & pin.

    if(number === "01782978746" && pin === "2712"){
        alert ("login successfully");

        // final step go to homepage
        window.location.assign("/home.html")
    }
    else{
        alert("incorrect number or pin")
    }

    // clear the input boxes
    inputNumber.value = "";
    inputPin.value = "";

})