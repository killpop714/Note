import data from './Idlib.js'

const $Id_input = document.querySelector("#id");
const $Pw_input = document.querySelector("#pwd");
const $btn = document.querySelector("#login-btn");

const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');

let Id_data;
let Pw_data;

const Output = () =>{
    if(Id_data!=null&&Pw_data!=null&& data.Id.getItem('Id')!=Id_data)
    {
        data.Id.setItem('Id',Id_data);
        data.password.setItem('Pw',Pw_data);
        console.log("데이터 저장 완료");
        location.href = "http://127.0.0.1:5500/42title.html"

    }else if(Id_data==null||Pw_data==null){
        alert("값이 비어있습니다.")

    }else{
        alert("이미 존재하는 아이디가 있습니다.")
    }

}



const Id_Input = ((event) =>{
    Id_data = event.target.value;
}) 

const Pw_Input = ((event) =>{
    Pw_data = event.target.value;
}) 


$Id_input.addEventListener('input',Id_Input);
$Pw_input.addEventListener('input',Pw_Input);
$btn.addEventListener('click',Output);
