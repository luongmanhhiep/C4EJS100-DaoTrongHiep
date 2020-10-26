console.log('2. Then use one line of code to destructure to obtain subject, dueDate and assignTo from this object:');
const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
};
const {subject,dueDate,assignTo} = task;
console.log('subject: ' + subject);
console.log('dueDate: ' + dueDate );
console.log('assignTo: ' + assignTo)