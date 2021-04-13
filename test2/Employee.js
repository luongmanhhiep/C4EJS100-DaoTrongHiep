class Employee {
    name
    taskList

    constructor(name, taskList) {
        this.name = name;
        this.taskList = taskList;
    }

    displayInfo() {
        console.log('Ten: ' + this.name);
        console.log('Danh sach cong viec: ' + this.taskList);
    }
}


export default Employee
