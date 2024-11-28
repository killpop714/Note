var express = require('express');
var path = require('path');
var cookieParser  = require('cookie-parser');

const app = express();

const db = new Map();

const USER_COOKIE_KEY = 'USER';

app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());
app.use(express.urlencoded({extends:true}))
app.listen(3000,()=>{
    console.log('server is reunning at 3000')
})
app.post('/signup', (req, res) => {
    const { username, name, password } = req.body;
    const exists = db.get(username);

    // 이미 존재하는 username일 경우 회원 가입 실패
    if (exists) {
        res.status(400).send(`duplicate username: ${username}`);
        return;
    }

    // 아직 가입되지 않은 username인 경우 db에 저장
    // KEY = username, VALUE = { name, password }
    const newUser = {
        username,
        name,
        password,
    };
    db.set(username, newUser);

    // db에 저장된 user 객체를 문자열 형태로 변환하여 쿠키에 저장
    res.cookie(USER_COOKIE_KEY, JSON.stringify(newUser));
    // 가입 완료 후, 루트 페이지로 이동
    res.redirect('/');
});

app.get('/', (req, res) => {
    // 'user'라는 쿠키 데이터를 가져옴
    // 쿠키가 존재하지 않을 경우 로그인이 되지 않았다는 뜻
    const user = req.cookies[USER_COOKIE_KEY];
    
    if (user) {
        // 쿠키가 존재하는 경우, 쿠키 VALUE를 JS 객체로 변환
        const userData = JSON.parse(user);
        // user 객체에 저장된 username이 db에 존재하는 경우,
        // 유효한 user이며 로그인이 잘 되어 있다는 뜻.
        if (db.get(userData.username)) {
            // JS 객체로 변환된 user 데이터에서 username, name, password를 추출하여 클라이언트에 렌더링
            res.status(200).send(`
                <a href="/logout">Log Out</a>
                <h1>id: ${userData.username}, name: ${userData.name}, password: ${userData.password}</h1>
            `);
            return;
        }
    }

    // 쿠키가 존재하지 않는 경우, 로그인 되지 않은 것으로 간주
    res.status(200).send(`
        <a href="/login.html">Log In</a>
        <a href="/signup.html">Sign Up</a>
        <h1>Not Logged In</h1>
    `);
});