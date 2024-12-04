const Id = window.localStorage;
const password =window.localStorage;

//일반 데이터
let Id_data;
let Pw_data;


//입력 함수
const Id_Input = ((event) =>{
    Id_data = event.target.value;
}) 

const Pw_Input = ((event) =>{
    Pw_data = event.target.value;
}) 

const Signup = () =>{
    if(Id_data!=null&&Pw_data!=null&& Id.getItem('Id')!=Id_data&&Pw_data.length>=6)
    {
        Id.setItem('Id',Id_data);
        password.setItem('Pw',Pw_data);
        console.log("데이터 저장 완료");
        location.href = "http://127.0.0.1:5500/title.html"

    }else if(Id_data==null||Pw_data==null){
        alert("값이 비어있습니다.")
    }else if(Pw_data.length <6){
        alert("비밀번호는 6자리 까지 적으세요");
    }else{
        alert("이미 존재하는 아이디가 있습니다.")
    }

}

const Login = () =>{
    if(Id_data!=null&&Pw_data!=null&& Id.getItem('Id')==Id_data&&Id.getItem('Pw')==Pw_data)
    {

        console.log("환영합니다.");
        location.href = "http://127.0.0.1:5500/problems/42.html"

    }else if(Id_data==null||Pw_data==null){
        alert("값이 비어있습니다.")
    }else{
        alert("비밀번호 또는 아이디가 틀렸습니다")
    }

}

export default{Id_Input,Pw_Input,Signup,Login,Flowers};