function get(ele){
    return document.querySelector(ele);
}

let email = get('.email');
let pwd = get('.password');
let signin = get('.signin');
let google = get('.google-signin-group');
let forgot1 = get('.forgot');
let signup = get('.signup-group');
let result1 = get('.result');
let error = get('.error');
let closeIcon = get('.result i');
let res1 = get('.signin-group > span');
let emailError = '';
let pwdError = '';
const regEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


const users =[
    {
        email:'vignesh.t@zirius.in',
        pwd:'Vignesh@123'
    },
    {
        email: 'davidjrmeshach@gmail.com',
        pwd: '#David123'
    },
    {
        email: 'rajasaravananmcsea@gmail.com',
        pwd: 'Raja123#'
    },
    {
        email: 'mageshwaranbalaji25@gmail.com',
        pwd: 'Eshwaran@123'
    },
    {
        email: 'harsha@zirius.in',
        pwd: 'Harsha$123'
    }
]

let emailVal="";
let passwordVal="";
email.addEventListener('input', (event) => {
    emailVal = event.target.value;

    if(emailError=='Empty' && emailVal!=""){
        email.parentNode.className = "input-group email-group";
        emailError='';
    }
    else if(emailError=='Invalid' && regEx.test(emailVal)==true){
        email.parentNode.className = "input-group email-group";
        emailError='';
    }
})

pwd.addEventListener('input', (event) => {
    passwordVal = event.target.value;
    
    if((pwdError=='Empty' && passwordVal!="") || 
        (pwdError=='Invalid' && passwordVal.length>=6) || 
        (pwdError=='lowercase' && /[a-z]/.test(passwordVal)==true) || 
        (pwdError=='uppercase' && /[A-Z]/.test(passwordVal)==true) || 
        (pwdError=='number' && /[0-9]/.test(passwordVal)==true) || 
        (pwdError=='special' && /[$@!%*#?&]/.test(passwordVal)==true)){
        pwd.parentNode.className = "input-group password-group";
        pwdError='';
    }
})

function emailValidation(){
    let errorMsg='';

    if(emailVal==''){
        errorMsg = "Provide a email";
        emailError = 'Empty'
    }
    else if(regEx.test(emailVal)==false){
        errorMsg = "Provide a properly formatted email";
        emailError = 'Invalid'
    }

    if(errorMsg==''){
        email.parentNode.className = "input-group email-group success";
        email.nextElementSibling.innerHTML = errorMsg;
        return true;  
    }
    else{
        email.parentNode.className = "input-group email-group error";
        email.nextElementSibling.innerHTML = errorMsg;
        return false;
    }
}

function pwdValidation(){
    let errorMsg='';
    if(passwordVal==''){
        errorMsg = "Provide a password";
        pwdError = 'Empty'
    }
    else if(passwordVal.length<6){
        errorMsg = "Password min 6 char";
        pwdError = 'Invalid';
    }
    else if(/[a-z]/.test(passwordVal)==false ){ 
        errorMsg = "Password min 1 lowercase";
        pwdError = 'lowercase';
    }
    else if(/[A-Z]/.test(passwordVal)==false){
        errorMsg = "Password min 1 uppercase";
        pwdError = 'uppercase';
    }
    else if(/[0-9]/.test(passwordVal)==false){
        errorMsg = "Password min 1 number";
        pwdError = 'number';
    }
    else if(/[$@!%*#?&]/.test(passwordVal)==false){
        errorMsg = "Password min 1 special char";
        pwdError ='special';
    }

    if(errorMsg==''){
        pwd.parentNode.className = "input-group password-group success";
        pwd.nextElementSibling.innerHTML = errorMsg;
        return true;
    }
    else{
        pwd.parentNode.className = "input-group password-group error";
        pwd.nextElementSibling.innerHTML = errorMsg;
        return false;
    }

   

}

signin.addEventListener('click', (event)=>{
    event.preventDefault();
    let bool = emailValidation();
    let bool1 = pwdValidation();

    if(bool && bool1){
        res1.style.display = 'block';
        for(let user of users){
            if(emailVal==user.email && passwordVal==user.pwd){
                res1.innerHTML = 'Logged in successfully'
                res1.className = 'res';
                return;
            }
        }
        res1.className='res error'
        res1.innerHTML = 'Invalid credentials'
    }
    else{
        res1.style.display='none';
    }
})



function resultPopup( type , err , icon){
    result1.style.display = 'flex';
    closeIcon.className = icon;
    result1.className = type;
    error.innerHTML = err;

    setTimeout(resultClose , 3000);
}

closeIcon.addEventListener('click',resultClose)

google.addEventListener('click',()=>{
    resultPopup("result process","","fa-solid fa-rotate")
})

forgot1.addEventListener('click',()=>{
    resultPopup("result process","","fa-solid fa-rotate")
})

signup.addEventListener('click',()=>{
    resultPopup("result process","","fa-solid fa-rotate")
})

function resultClose(){
    result1.style.display = 'none';
    result1.className = 'result';
}
