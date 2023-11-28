const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('id-key.db');

const idKey = "USER-ID";
const idInput = document.querySelector("#login-input-user");//아이디 입력
const pwdInput = document.querySelector("#login-input-password");//비번 입력
const loginBtn = document.querySelector("#login__submit"); //로그인 버튼 클릭
const loginValue = localStorage.getItem(idKey);


function checkId(str_id) {
    const reg1 =  /^[a-z]+[a-z0-9]{4,19}$/g;
    return (reg1.test(str_id));
}

function checkPwd(str_pw) {
    const reg2 =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    return (reg2.test(str_pw));
}
