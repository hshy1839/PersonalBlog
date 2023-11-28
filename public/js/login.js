const idKey = "USER-ID";
const idInput = document.querySelector('#login-input-user');
const pwdInput = document.querySelector('#login-input-password');
const checkRemember = document.querySelector('#login-remember');

const loginValue = localStorage.getItem(idKey);

if(loginValue!=null) {
    idInput.value = loginValue;
    console.log('Call saved id value');
}

function login() {
    if(checkNullInput(idInput)&&checkNullInput(pwdInput)) {
        if(checkId(idInput.value)&&checkPwd(pwdInput.value)) {

            checkRememberLoginValue();
            return true;
        } else {
            alert('아이디 또는 비밀번호를 올바르게 입력하세요');
            return false;
        }
    } else {
        if(checkNullInput(idInput)==false) {

            idInput.focus();
            return false;
        } else {
            pwdInput.focus();
            return false;
        }
    }
}

function checkNullInput(input) {
    if(input.value == "") {
        console.log('로그인 정보 미입력');
        return false;
    } else {
        console.log('로그인 정보 입력');
        return true;
    }
}

function checkPwd(str_pwd) {
    const reg1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    return (reg1.test(str_pwd));
}

function checkId(str_id) {
    const reg2 =  /^[a-z]+[a-z0-9]{4,19}$/g;
    return (reg2.test(str_id));
}

function checkRememberLoginValue() {
    let userId = idInput.value;

    if(checkRemember.checked== true) {
        localStorage.setItem(idKey.userId);
        alert('아이디가 저장되었어요');
    } else {
        localStorage.removeItem(idKey);
        alert('아이디 저장안함');
    }
}