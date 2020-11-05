ten = prompt('nhập tên của bạn');
uoc = prompt('nhập điều ước của bạn')

function wish(){
    alert(`${ten} ước sẽ ${uoc}`)
}
let x = wish;
x(ten,uoc = 'an nhiên')