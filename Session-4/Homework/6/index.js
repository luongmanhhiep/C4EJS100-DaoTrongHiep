console.log('6. Write a script to store and process the learning tasks to become a front-end developer');
let frontendNote = [];
let notepads = ['HTML', 'CSS', 'Basic of Javascript', 'Node Package Manager (npm)', 'Git'];
for (let notepad of notepads) {
    frontendNote.push({
        notepad: notepad,
        Complete: false
    });
}
