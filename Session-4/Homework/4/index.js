console.log('Initialize an object to represent a dictionary, with properties as keyword and values as explanation, the initial values are from this table');
let dictionary = {
    debug:'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: 'The formal word for ‘error’',
    pm: 'The short version  of Project Manager, the person in charge of the final result of a project',
    uiux:'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
};
console.log("\n");
console.log('4.1: Write a script to simulate the lookup of the dictionary initialized in the previous example');
alert('Hi there, this is dev dictionary');
console.log('4.2: Update your script so that it can let users contribute the explanation to the dictionary');
let x = prompt('Enter the keyword');
if(dictionary[x]){
        alert(x + ' ' + dictionary[x])
    }
    else{
       n = prompt('We could not find your word: '+ x + ',leave your explanaion');
       dictionary[x] = n
       alert('Done')
    };
console.log(dictionary)



