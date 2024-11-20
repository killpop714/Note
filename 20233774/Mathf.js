let numone ='';
let operator = '';
let numtwo ='';

const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");
document.querySelector("#n0").addEventListener('click',onClickNumber);
document.querySelector("#n1").addEventListener('click',onClickNumber);
document.querySelector("#n2").addEventListener('click',onClickNumber);
document.querySelector("#n3").addEventListener('click',onClickNumber);
document.querySelector("#n4").addEventListener('click',onClickNumber);
document.querySelector("#n5").addEventListener('click',onClickNumber);
document.querySelector("#n6").addEventListener('click',onClickNumber);
document.querySelector("#n7").addEventListener('click',onClickNumber);
document.querySelector("#n8").addEventListener('click',onClickNumber);
document.querySelector("#n9").addEventListener('click',onClickNumber);
const onClickNumber= (event) => () =>{
    if(operator){
        numtwo +=event.target.textContent;
    }else{
        numone +=event.target.textContent;
    }
    $result.value +=event.target.textContent;

}

document.querySelector("#plus").addEventListener('click',()=>{});
document.querySelector("#minus").addEventListener('click',()=>{});
document.querySelector("#mul").addEventListener('click',()=>{});
document.querySelector("#div").addEventListener('click',()=>{});