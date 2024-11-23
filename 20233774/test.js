const apiKey = 	'81987A582C712D07D7CB3A9EDD74A7AE';
const word = "우주";
$output =document.querySelector('#output');

fetch(`http://opendict.korean.go.kr/api/search?certkey_no=4989&key=${apiKey}&target_type=search&req_type=json&part=word&q=${word}&sort=dict&start=1&num=10`)// ` 와 '는 다르다 제발
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((err) => console.log(err));

 console.log('http://opendict.korean.go.kr/api/search?certkey_no=4989&key=${apiKey}&target_type=search&req_type=json&part=word&q=${word}&sort=dict&start=1&num=10');