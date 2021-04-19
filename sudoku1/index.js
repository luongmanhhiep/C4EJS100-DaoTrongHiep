import Login from './login.js'

const container = document.getElementById('app');

// login.initRender(container);

class App {
    activeScreen;
    container; 
    
    constructor(container) {
        this.container = container;
        
    }

   
    changeActiveScreen(screen){
        if (this.activeScreen){
            this.container.innerHTML = "";
        }
        this.activeScreen = screen;
        this.activeScreen.initRender(this.container);
    }
}

const login = new Login();

const app = new App (container);
app.changeActiveScreen(login);

export default app;