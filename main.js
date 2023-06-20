// vars //////////////////////////////////////////////////////////////////////////////////////////////////////////
const button = document.getElementById('btn');
const email = document.getElementById('email').value;
const input = document.getElementById('email');
const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const url ='https://picsum.photos/200';
let img = document.getElementById('image');
const newImgBtn = document.getElementById('new-image');

// var arrays/////////////////////////////////////////////////////////////////////////////////////////////////////

let lastEmail = [];
let pic = [];

//functions ////////////////////////////////////////////////////////////////////////////////////////////////////


// validate email function /////////////////////////////////

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
    displayData();
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


// assign data to email/////////////////////////////////////////////////

function assignImage() {

    if(checkEmailPresent(input.value)) { // if the image is present

        //get the index of the email in array
        let emailIndex = lastEmail.indexOf(input.value);

        // console log to check the index matches
        // console.log(emailIndex);

        //use the index to push the image in the array
        if(checkImage(img.src)) {

        } else {
            pic[emailIndex].push(img.src);
        }          
    } else { // if the email isnt present //
        lastEmail.push(input.value);
        //creates new image array for new email
        pic.push([img.src]);
    }
    
    
    checkImage(img.src);

    console.log(lastEmail);
    // console.log(input.value);
    console.log(pic);
    // console.log(img.src);
}

//// check functions /////////////////////////////////////////////////



function checkEmailPresent(emailInput) {
    for (let i = 0; i < lastEmail.length; i++) {
        if(lastEmail[i] == emailInput) {
            // console.log('this matches an email');
            return true;
        } 
    }
    return false;
}


function checkImage(src) {
        let emailIndex = lastEmail.indexOf(input.value);

    for (let i = 0; i < pic[emailIndex].length; i++) {
        if(pic[emailIndex][i] == src) {
            // console.log('this matches an image');
            return true;
        } 
    }
    return false;
}


//display functions ///////////////////////////////////////////////////////


function displayData() {
   let emailIndex = lastEmail.indexOf(input.value);
   const content = document.querySelector('.assigned');
   
   content.innerHTML = `
   <ul class="user">
   ${generateListItems(lastEmail)}
   </ul>
   `;

}

function generateListItems(arg) {
   let emailIndex = lastEmail.indexOf(input.value);
    let items = "";
    for(let i = 0; i < arg.length; i++) {
        items += `
        <li>
        <div class="user-email">
        <h3>${arg[i]}</h3>
        </div>
        <div class="user-imgs">
        ${generateImageItems(pic[i])}
        </div>
        </li>`;
    }
    return items;
}
function generateImageItems(arg) {
    let items = "";
    for(let i = 0; i < arg.length; i++) {
        items += `<img class="small-img" src="${arg[i]}" alt="random image">`;
    }
    return items;
}