import app from './index.js'
import Login from './login.js';

class Register {
    $formRegister;
    $textEmail;
    $textDisplayName;
    $textPassword;
    $textConfirmPassword;
    $btnSubmit;
    $errorMessage;

    constructor() {
        this.$textEmail = document.createElement('input');
        this.$textEmail.type = 'email';
        this.$textEmail.placeholder = 'Enter email ...';

        this.$textDisplayName = document.createElement('input');
        this.$textDisplayName.type = 'text';
        this.$textDisplayName.placeholder = 'Enter display name ...';

        this.$textPassword = document.createElement('input');
        this.$textPassword.type= 'password';
        this.$textPassword.placeholder = 'Enter password ...';

        this.$textConfirmPassword = document.createElement('input');
        this.$textConfirmPassword.type= 'password';
        this.$textConfirmPassword.placeholder = 'Confirm password ...';

        this.$formRegister = document.createElement('form');
        this.$formRegister.addEventListener('submit', this.handleSubmit)

        this.$btnSubmit = document.createElement('button');
        this.$btnSubmit.type = 'submit';
        this.$btnSubmit.innerHTML = 'Register';

        this.$errorMessage = document.createElement('p');
        this.$errorMessage.classList.add('error-message');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const email = this.$textEmail.value;
        const displayName = this.$textDisplayName.value;
        const password = this.$textPassword.value;
        const confirmPassword = this.$textConfirmPassword.value;

        if (displayName === '') {
            this.setErrorMessage('Display name cannot be empty');
            return;
        }
        if (password === '') {
            this.setErrorMessage('Password cannot be empty');
            return;
        }
        if (confirmPassword === '') {
            this.setErrorMessage('Confirm passwod cannot be empty');
            return;
        }
        if (password !== confirmPassword) {
            this.setErrorMessage('Password and confirm password are not matched');
            return;
        }
        this.setErrorMessage('');

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                firebase.auth().currentUser.updateProfile({
                    displayName: displayName

                })
                firebase.auth().currentUser.sendEmailVerification();
            });
    }

    setErrorMessage = (content) => {
        this.$errorMessage.innerHTML = content;
        if (content !== '') {
            this.$errorMessage.style.display = 'block';
        } else {
            this.$errorMessage.style.display = 'none';
        }
    }

    goToLogin = () => {
        const login = new Login();
        app.changeActiveScreen(login);
    }

    initRender = (container) => {
        const flexContainer = document.createElement('div');
        flexContainer.classList.add('d-flex', 'flex-column', 'centering');
        const title = document.createElement('h1');
        title.innerHTML = 'Create your account';

        flexContainer.appendChild(title);
        flexContainer.appendChild(this.$errorMessage);

        flexContainer.appendChild(this.$textEmail);
        flexContainer.appendChild(this.$textDisplayName);
        flexContainer.appendChild(this.$textPassword);
        flexContainer.appendChild(this.$textConfirmPassword);
        flexContainer.appendChild(this.$btnSubmit);

        const linkToLogin = document.createElement('a');
        linkToLogin.href = '#';
        linkToLogin.innerHTML = 'Back to login';
        linkToLogin.addEventListener('click', this.goToLogin);

        flexContainer.appendChild(linkToLogin);

        this.$formRegister.appendChild(flexContainer);
        container.appendChild(this.$formRegister);
    };
}

export default Register;