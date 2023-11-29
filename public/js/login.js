document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.form-login');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById('login-input-user');
        const passwordInput = document.getElementById('login-input-password');

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Ajax 요청으로 서버에 로그인 확인 요청
        fetch('/login/check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('로그인 성공!');
            } else {
                alert('로그인 실패. 아이디 또는 비밀번호를 확인하세요.');
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
        });
    });
});