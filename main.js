// vars //////////////////////////////////////////////////////////////////////////////////////////////////////////
const section = document.getElementById('img-container');
const button = document.getElementById('btn');
const email = document.getElementById('email').value;
const input = document.getElementById('email');
const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const url ='https://picsum.photos/200';
let img = document.getElementById('image');
const newImgBtn = document.getElementById('new-image');

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
    .then(response => img.src = response.url)
    .catch(error => console.error(error));
}

newImgBtn.addEventListener('click', fetchImage);

window.addEventListener('load', fetchImage('https://picsum.photos/200'));


// display data to email/////////////////

function assignImage() {
    let contentContainer = document.querySelector('.email-img');
    let displayContent = document.querySelector('.assigned');
    
    

    if(checkEmailPresent(input.value)) { // if the image is present

        //get the index of the email in array


        //use the index to push the image in the array
        //eg pic[i].push.(img)
    } else { // if the image isnt present //
        lastEmail.push(input.value);
        pic.push([img.src]);
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