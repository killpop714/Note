import data from './basic.js'

const $P1 =document.querySelector('#p1');
const $P2 =document.querySelector('#p2');
const $P3 =document.querySelector('#p3');
const $P4 =document.querySelector('#p4');
const $P5 =document.querySelector('#p5');
const $P6 =document.querySelector('#p6');


$P1.addEventListener('input',data.Input)
$P2.addEventListener('input',data.Input)
$P3.addEventListener('input',data.Input)
$P4.addEventListener('input',data.Input)
$P5.addEventListener('input',data.Input)
$P6.addEventListener('input',data.Input)


console.log(data.getRandom(1,7));

data.function_46($P1);

