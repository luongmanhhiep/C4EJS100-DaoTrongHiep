let button = document.getElementById('Reload');
let result = document.getElementById('result_div');
so = [];
for(i=0; i<data.length;i++){
    so.push(i);
};
button.addEventListener('click',()=>{
    i = Math.floor(Math.random()*so.length);
    result.innerText = (data[i]["quoteText"]+"\n"+data[i]["quoteAuthor"]);
});


