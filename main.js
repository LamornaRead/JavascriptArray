// vars //////////////////////////////////////////////////////////////////////////////////////////////////////////
const section = document.getElementById('img-container');
const button = document.getElementById('btn');
const email = document.getElementById('email').value;
const input = document.getElementById('email');
const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const url ='https://picsum.photos/200';
let img = document.getElementById('image');

let lastEmail = [];
let pic = [];

//functions ////////////////////////////////////////////////////////////////////////////////////////////////////


// validate email function ////

function validateEmail() {

    // test email false
    if(!emailFormat.test(email) || email == 0) {
          input.style.border = '1px solid red';
          input.style.boxShadow = '0 0 20px red';
          input.placeholder = 'Please fill in email.';
          console.log(false);
    }
    //test email true
    if(emailFormat.test(email) || email > 0) {
        input.style.border = '1px solid grey';
        input.style.boxShadow = '';
        input.placeholder = '';
    }
    document.addEventListener('submit', function(event) {
        event.preventDefault();
        // event.target.reset();
    });
    assignImage();
    console.log('Success');

}


//fetch data ////////////////

function fetchImage() {
    fetch(url)
    .then(response => response.headers.get('picsum-id'))
    .then(info => 'https://picsum.photos/id/' + info + '/info' )
    .then(resolve => {
        fetch(resolve)
        .then(response => response.json(console.log(response.url)))
        .then(response => img.src = response.url)
        // .then(img.src = response.url)
    })
    .catch(error => console.error(error));
}

window.addEventListener('load', fetchImage);


// display data to email/////////////////

function assignImage() {
    let contentContainer = document.querySelector('.email-img');
    let displayContent = document.querySelector('.assigned');
    
    

    if(checkEmailPresent(input.value)) {

    } else { // if the image isnt present //
        lastEmail.push(input.value);
        pic.push(img.src);
    }

    console.log(lastEmail);
    console.log(input.value);
    console.log(pic);
}

//// new stuff //////

function checkEmailPresent(emailInput) {
    for (let i = 0; i < lastEmail.length; i++) {
        if(lastEmail[i] == emailInput) {
            console.log('this matches');
            return true;
        } 
    }
    return false;
}