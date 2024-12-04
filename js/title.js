import data from './Idlib.js'

const $Id_input = document.querySelector("#id");
const $Pw_input = document.querySelector("#pwd");

const $sign = document.querySelector('#Signup');
const $login = document.querySelector('#Login');


$login.addEventListener('click',data.Login);

$Id_input.addEventListener('input',data.Id_Input);
$Pw_input.addEventListener('input',data.Pw_Input);

$sign.addEventListener('click',()=>{
    location.href = "http://127.0.0.1:5500/Signup.html"
})

