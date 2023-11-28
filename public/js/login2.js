const idKey = "USER-ID";
const idInput = document.querySelector("#login-input-user");
const pwdInput = document.querySelector("#login-input-password");
const loginBtn = document.querySelector("#login__submit");
const loginValue = localStorage.getItem(idKey);

if(loginValue != null) {
    idInput.value = loginValue;
    console.log('저장된 아이디값 불러옴');
}

function checkId(str_id) {
    const reg1 =  /^[a-z]+[a-z0-9]{4,19}$/g;
    return (reg1.test(str_id));
}

function checkPwd(str_pw) {
    const reg2 =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    return (reg2.test(str_pw));
}
