// vars //////////////////////////////////////////////////////////////////////////////////////////////////////////
const section = document.getElementById('img-container');
const button = document.getElementById('btn');

//functions ////////////////////////////////////////////////////////////////////////////////////////////////////


// validate email function ////

function validateEmail() {
    const email = document.getElementById('email').value;
    const input = document.getElementById('email');
    const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // test email false
    if(!emailFormat.test(email) || email == 0) {
          input.style.border = '1px solid red';
          input.style.boxShadow = '0 0 20px red';
          input.placeholder = 'Please fill in email.';
          console.log(false);
          return false;
    }

    //test email true
    if(emailFormat.test(email) || email > 0) {
        input.style.border = '1px solid grey';
        input.style.boxShadow = '';
        input.placeholder = '';
    }


    document.addEventListener('submit', function(event) {
        event.preventDefault();
        event.target.reset();
    });
    console.log('Success');
    return true;
}

//fetch data ////////////////


