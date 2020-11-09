let dem = 0;
let cong = document.getElementById('cong');
let tru =document.getElementById('tru');
document.getElementById('dem').innerHTML=dem;
cong.addEventListener('click',() =>{
x=dem++
document.getElementById('dem').innerHTML=x
});
tru.addEventListener('click',()=>{
    y=dem--
    document.getElementById('dem').innerHTML=y
});