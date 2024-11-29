import data from './Idlib.js'

const $Id_input = document.querySelector("#id");
const $Pw_input = document.querySelector("#pwd");
const $btn = document.querySelector("#login-btn");

const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');


$Id_input.addEventListener('input',data.Id_Input);
$Pw_input.addEventListener('input',data.Pw_Input);
$btn.addEventListener('click',data.Signup);
