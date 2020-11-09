let timeSheetData = [
    {
        project : "Learn front-and",
        task:"learn HTML",
        timeSpent:6,
    },
    {
        project : "Learn front-and",
        task:"Learn CSS",
        timeSpent:8,
    },
    {
        project : "Learn front-and",
        task:"Learn JS Variables And Data Types ",
        timeSpent:6,
    },
    {
        project : "Learn git",
        task:"Learn Gits Basic",
        timeSpent:2,
    },
];
console.log(timeSheetData);
let tbody = document.getElementById('tbody');
let tr = document.getElementById('tr')
let colum1 = document.getElementById("colum1");
let colum2 = document.getElementById("colum2");
let colum3 = document.getElementById("colum3");
let remove = document.getElementsByClassName('remove');
let clear = document.getElementById('clear');
let update = document.getElementsByClassName('update')
for(i = 0; i<timeSheetData.length;i++ ){
    tbody.insertAdjacentHTML('beforeend',`<tr><th>${timeSheetData[i].project}</th><th>${timeSheetData[i].task}</th><th>${timeSheetData[i].timeSpent}</th><th><button class="remove">x</button>  <button class="update">U</button></th></tr>`);
};


add = document.getElementById('add');
newData = {};
add.addEventListener('click',()=>{
    newData.project=colum1.value;
    newData.task=colum2.value;
    newData.timeSpent=colum3.value;
    timeSheetData.push(newData);
    let a = timeSheetData.indexOf(newData);
    tbody.insertAdjacentHTML('beforeend',`<tr><th>${timeSheetData[i].project}</th><th>${timeSheetData[i].task}</th><th>${timeSheetData[i].timeSpent}</th><th><button class="remove">x</button>  <button class="update">U</button></th></tr>`);
});

function update_list(){
    tbody.innerHTML = '';
    for(let i = 0 ; i< timeSheetData.length;i++){
        tbody.insertAdjacentHTML('beforeend',`<tr><th>${timeSheetData[i].project}</th><th>${timeSheetData[i].task}</th><th>${timeSheetData[i].timeSpent}</th><th><button class="remove">X</button>  <button class="update">U</button></th></tr>`);
    };

    for(let i =0;i<remove.length;i++){
        remove[i].addEventListener('click',()=>{
            timeSheetData.splice(i,1);
            update_list();
        })
    };
}
update_list();
clear.addEventListener('click',()=>{
    colum1.value='';
    colum2.value='';
    colum3.value='';
})