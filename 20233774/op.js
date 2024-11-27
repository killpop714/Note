let numone ='';
let operator = '';
let numtwo ='';

const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

const onClickNumber= (event) =>{
    
    if(operator) {
        numtwo +=event.target.textContent;
    }else{
        numone +=event.target.textContent;
    }
    $result.value +=event.target.textContent
}

[0,1,2,3,4,5,6,7,8,9].forEach((n)=>
{
    document.querySelector("#n"+n).addEventListener('click',onClickNumber);
})



// document.querySelector("#plus").addEventListener('click',()=>{});
// document.querySelector("#minus").addEventListener('click',()=>{});
// document.querySelector("#mul").addEventListener('click',()=>{});
// document.querySelector("#div").addEventListener('click',()=>{});