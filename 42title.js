import data from './Idlib.js'

const $sign = document.querySelector('#Signup');
const $login = document.querySelector('#Login');

$login.addEventListener('click',() =>{

    console.log(data.Id.getItem('Id'))
    if(Id_data!=null&&Pw_data!=null)
    {
        Id.setItem('Id',Id_data);
        password.setItem('Pw',Pw_data);
        console.log("데이터 저장 완료");
        location.href = "http://127.0.0.1:5500/42title.html"

    }else if(Id_data==null||Pw_data==null){
        alert("값이 비어있습니다.")

    }else{
        alert("이미 있는 아이디거가 있습니다.")
    }
})

$sign.addEventListener('click',()=>{
    location.href = "http://127.0.0.1:5500/42signup.html"
})