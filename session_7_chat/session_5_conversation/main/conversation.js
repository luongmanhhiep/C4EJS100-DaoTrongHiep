class Conversation{ 
    id;
    name;
    users;
    onClick;

    $txtName;
    $txtNoOfUsers;
    $container;

    constructor(id, name, users, onClick){
        this.id = id;
        this.name= name;
        this.users = users;

        this.$txtName = document.createElement('p');
        this.$txtName.innerHTML = name;

        this.$txtNoOfUsers = document.createElement('small');
        this.$txtNoOfUsers.innerHTML = users + "user(s)";
        this.$container = document.createElement("div");
        this.$container.classList.add('conversation-item');

        this.onClick = onClick;
    }

    setActive = (isActive) =>{
        if(isActive){
            this.$container.classList.add("active");
        }else{
            this.$container.classList.remove("active");
        }
    }

    initRender = (container) =>{
        const div =  document.createElement("div");
        this.$container.addEventListener('click', () =>{
            this.onClick(this)
        });
        div.classList.add("conversation-item");
        this.$container.appendChild(this.$txtName);
        this.$container.appendChild(this.$txtNoOfUsers);
        container.appendChild(this.$container);
    };

};

export default Conversation;