let quiz = [
    {
        question:'How old are you',
        choices:[17, 22, 23,18,],
        rightChoice:23
    },
    {
        question:'How many day in a week',
        choices:[6, 7, 3, 4,],
        rightChoice:7
    },
    {
        question:'How many hours in a day',
        choices:[11, 24, 13, 12,],
        rightChoice:24
    },
    {
        question:'What is the capital of VietNam',
        choices:['HCM', 'Da Nang', 'Ha Noi','Hue' ,],
        rightChoice:'Ha Noi'
    }   
];
// 1.4 + 1.5 + 1.6 + 1.7 + 1.8C4EJSLab - Basic - part 4
x = Math.floor(Math.random()*quiz.length);
z = Math.floor(Math.random()*quiz[x].choices);
dem = 0
while(x >= 0){
    y = prompt(quiz[x].question +("\n") + z);
    if(quiz[x].choices[y] == quiz[x].rightChoice ){
        alert('Correct');
        dem++
      }
      else{
        alert('Your answer is wrong');
    splice(x,0);
}
    break;
}
alert('We are out of question');
alert('Your total score : ' + dem);