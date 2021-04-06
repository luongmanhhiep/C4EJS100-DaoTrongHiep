import app from './index.js';
import Register from './register.js'

class Login {
    $formLogin;
    $textEmail;
    $textPassword;
    $btnSubmit;

    constructor() {
        this.$textEmail = document.createElement('input');
        this.$textEmail.type = 'email';
        this.$textEmail.placeholder = 'Enter your email ...';

        this.$textPassword = document.createElement('input');
        this.$textPassword.type = 'password';
        this.$textPassword.placeholder = 'Enter your password ...';

        this.$formLogin = document.createElement('form');
        this.$formLogin.addEventListener('submit', this.login);
        this.$btnSubmit = document.createElement('button');
        this.$btnSubmit.type = 'submit';
        this.$btnSubmit.innerHTML = 'Login'
    }

    login = (event) => {
        event.preventDefault();
        const email = this.$textEmail.value;
        const password = this.$textPassword.value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
    }

    goToRegister = () => {
        const register = new Register();
        app.changeActiveScreen(register);
    };

    initRender = (container) => {
        const flexContainer = document.createElement('div');
        flexContainer.classList.add('d-flex', 'flex-column', 'centering');
        const title = document.createElement('h1');
        title.innerHTML = 'Login';
        flexContainer.appendChild(title);

        flexContainer.appendChild(this.$textEmail);
        flexContainer.appendChild(this.$textPassword);
        flexContainer.appendChild(this.$btnSubmit);

        const linkToRegister = document.createElement('a');
        linkToRegister.href = '#';
        linkToRegister.innerHTML = 'Go to register'
        linkToRegister.addEventListener('click', this.goToRegister);

        flexContainer.appendChild(linkToRegister);

        this.$formLogin.appendChild(flexContainer);
        container.appendChild(this.$formLogin);
    }
}

export default Login;