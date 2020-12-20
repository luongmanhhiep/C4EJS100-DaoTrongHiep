let number;
let y = 0;
let x = document.getElementById("input").value;
let btn = document.getElementById("btn");
btn.addEventListener('click', () => {
    number = Math.floor(Math.random() * 11);
    y++;
    if (x == number) {
        alert("Bạn đã trúng thưởng");
    }
    else 
    alert(`Kết quả đúng là ${number}`);
    if (y == 3) {
        alert(`Bạn đã chơi hết lượt!`);
    }
})