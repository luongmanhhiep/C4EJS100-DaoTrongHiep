
    const container = document.getElementById('main')

    class App {
        $txtinput;
        $btnSubmit;
        $form

        constructor(container) {


            this.$txtinput = document.createElement('input')
            this.$txtinput.placeholder = "Enter Answer..."

            this.$form = document.createElement("form")

            this.$btnSubmit = document.createElement('button');
            this.$btnSubmit.type = 'submit';
            this.$btnSubmit.innerHTML = "Answer";
        }
        getJSON = () => {


            return new Promise(function (resolve) {
                axios.get('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
                    .then(function (json) {


                        resolve(json);
                    });
            });
        }


        initRender = (container) => {
            const flexContainer = document.createElement('div');
            flexContainer.classList.add('d-flex', 'centering',)

            flexContainer.appendChild(this.$txtinput);
            flexContainer.appendChild(this.$btnSubmit);

            this.$form.appendChild(flexContainer);

            container.appendChild(this.$form);
        }
    }

    const app = new App
    app.initRender(container)
