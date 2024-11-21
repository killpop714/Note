const apiKey = 	'48E081530EA6C2E51EBD31A0C5AD12A9';

$output =document.querySelector('#output');

fetch(`http://opendict.korean.go.kr/api/search?certkey_no=4989&key=${apiKey}&target_type=search&req_type=json&part=word&q=${word}&sort=dict&start=1&num=10`)// ` 와 '는 다르다 제발
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((err) => console.log(err));

 console.log('http://opendict.korean.go.kr/api/search?certkey_no=4989&key=${apiKey}&target_type=search&req_type=json&part=word&q=${word}&sort=dict&start=1&num=10');