let a = ["Backpack","MiBand watch","Ring"];
console.log(a);
const list = document.getElementById('item_list');
function them_list(){
    list.innerHTML= '';
    for( i=0; i< a.length;i++){
        list.insertAdjacentHTML("beforeend",`<li><span>${a[i]}</span> <button id="remove">Remove</button> </li>`)
    }
};
let them = document.getElementById('button')
let x=document.getElementById("input")
them.addEventListener('click',() =>{
    console.log(x.value);
    a.push(x.value);
    console.log(a);
    list.insertAdjacentHTML("beforeend",`<li><span>${x.value}<span><button>Remove</button></li>`);
    input.value='' ;
    console.log(list)
});
