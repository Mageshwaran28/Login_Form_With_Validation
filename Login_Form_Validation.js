
var email = document.querySelector('.email');
var pwd = document.querySelector('.password');
var signin = document.querySelector('.signin');
var google = document.querySelector('.google-signin-group');
var forgot = document.querySelector('.forgot');
var signup = document.querySelector('.signup-group');
var result = document.querySelector('.result');
var error = document.querySelector('.error');
var closeIcon = document.querySelector('.result i');

signin.addEventListener('click', ()=>{
    event.preventDefault();
    console.log('Hello this is my first validation in zerp labs organization')

    var emailVal = email.value;
    var passwordVal = pwd.value;
    console.log(passwordVal)

    var regEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  

    if(emailVal==''  || regEx.test(emailVal)==false){
        resultPopup("result failure", "Invalid email" , "fa-solid fa-xmark");
    }
    else if(passwordVal==''){
        resultPopup("result failure", "Invalid password","fa-solid fa-xmark");
    }
    else if(passwordVal.length<6){
        resultPopup("result failure", "Password min 6 character","fa-solid fa-xmark");
    }
    else if(/[a-z]/.test(passwordVal)==false || /[A-Z]/.test(passwordVal)==false || /[0-9]/.test(passwordVal)==false){
        resultPopup("result failure", "Password must be strong","fa-solid fa-xmark");
    }
    else{
        resultPopup("result success", "Logged in successfully","fa-solid fa-check");
    }

})

function resultPopup( type , err , icon){
    result.style.display = 'flex';
    closeIcon.className = icon;
    result.className = type;
    error.innerHTML = err;

    setTimeout(resultClose , 3000);
}

closeIcon.addEventListener('click',resultClose)

google.addEventListener('click',()=>{
    resultPopup("result process","","fa-solid fa-rotate")
})

forgot.addEventListener('click',()=>{
    resultPopup("result process","","fa-solid fa-rotate")
})

signup.addEventListener('click',()=>{
    resultPopup("result process","","fa-solid fa-rotate")
})

function resultClose(){
    result.style.display = 'none';
    result.className = 'result';
}