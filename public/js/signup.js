const crypto = require('crypto');

function hashPassword(password, salt) {
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return hash;
}

function generateSalt() {
  return crypto.randomBytes(16).toString('hex');
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form-signup');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // 폼에서 입력한 값 가져오기
      const name = document.getElementById('signup_name').value;
      const email = document.getElementById('signup_email').value;
      const username = document.getElementById('signup_username').value;
      const password = document.getElementById('signup_password').value;
      const birthdate = document.getElementById('signup_birthdate').value;
      const confirmPassword = document.getElementById('signup_password_confirm').value;
      const signupSubmit = document.getElementById('signup_submit').value;

      if (password !== confirmPassword) {
        alert('비밀번호와 비밀번호 확인이 다릅니다.');
        return; // 함수 종료
      }
      // 솔트 생성
      const salt = generateSalt();
  
      // 비밀번호 해싱
      const hashedPassword = hashPassword(password, salt);
  
      // 회원 정보 객체 생성
      const user = {
        name: name,
        email: email,
        username: username,
        password: hashedPassword, // 암호화된 비밀번호 저장
        birthdate: birthdate,
        salt: salt // 솔트 저장
      };
      // 회원 정보를 localstorage에 저장
      signupSubmit.addEventListener('submit', () =>{
        event.preventDefault();
      localStorage.setItem('user', JSON.stringify(user));
      alert('가입이 완료되었습니다.');
      });
    });
  });
  