let numone ='';
let numtwo ='';
let operator = '';


const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

const onClickNumber= (event) =>{
    
    if(!operator) {
        if(!numone){
            $result.value = ""
            $operator.value = "";
        }
        numone +=event.target.textContent;
        $result.value +=event.target.textContent
        return;
    }
    if(!numtwo){
    $result.value =""
    }
    
    
    numtwo +=event.target.textContent;
    $result.value +=event.target.textContent

    console.log(numone)
    console.log(numtwo)
    console.log(operator)

}

[0,1,2,3,4,5,6,7,8,9].forEach((n)=>
{
    document.querySelector("#n"+n).addEventListener('click',onClickNumber);

})

const onClickOperator = (op) => () =>{
    if(numone){
        operator = op;
        $operator.value = op;
    }else{
        alert('숫자를 먼저 입력해주세요');
    }
}

document.querySelector("#r").addEventListener('click',()=>{
    if(numtwo){
        switch(operator){
            case '+':
                $result.value =parseInt(numone) + parseInt(numtwo);
                reset();
                break;               
            case '-':
                $result.value =numone- numtwo;
                reset();
                break;
            case '*':
                $result.value =numone * numtwo;
                reset();
                break;
             case '/':
                $result.value =numone / numtwo;
                reset();
                break;

            default:
                break;
        }
    }
})

const reset = () =>{
    numone ="";
    numtwo ="";
    operator = "";
}

const Remove = () =>{
    numone ="";
    numtwo ="";
    operator = "";
    $result.value = ""
    $operator.value = "";
}

const DelateNumber = () =>{

    if(numone)
    {

       
    }
    if(operator) {
       
    }
    if(numtwo)
    {
        numtwo[1] = "";
        $result.value += numtwo

        console.log(numone)
    console.log(numtwo)
    console.log(operator)
    }

    numtwo[numtwo.length-1] = '';
        $result.value += numtwo



}



document.querySelector("#Remove").addEventListener('click',DelateNumber)



document.querySelector("#plus").addEventListener('click',onClickOperator('+'));
document.querySelector("#minus").addEventListener('click',onClickOperator('-'));
document.querySelector("#mul").addEventListener('click',onClickOperator('*'));
document.querySelector("#div").addEventListener('click',onClickOperator('/'));

