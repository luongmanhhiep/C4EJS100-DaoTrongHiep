let num;
let y=0;
let x = document.getElementById("input");
x.addEventListener('keyup',()=>{
    return x.value;
})
let btn=document.getElementById("btn");
btn.addEventListener('click',()=>{
    num=Math.floor(Math.random() * 11 ); 
    y++;
    if(x.value == num){
        alert("Chọn đúng. Phần thưởng là ...");
    }
    else alert(`Wrong. Kết quả đúng là ${num}`);
    if(y == 3){
        alert(`Game over`);
    }
})