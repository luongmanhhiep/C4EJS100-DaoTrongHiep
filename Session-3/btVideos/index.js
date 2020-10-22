// affter 2
let phim = ['one piece',';naruto','tranformer'];
// after 4
let n = prompt('nhập vào tên phim muốn thêm ở cuối');
phim.push(n);
console.log(phim);
// after 5
let i = prompt(' nhập vị trí cần đọc');
console.log(phim[i]);
// after 6
// 1
phim[0] = 'tiêu đề';
phim[0] = prompt('nhập vào tiêu đề')
// 2
let i = 0;
let item = prompt('nhập vào tên phim');
phim[i] = item;

// after 7
// 1
let i = prompt('nhập vị trí bạn muốn xóa');
phim.splice(i, 1);
// 2
let i = prompt('vị trí xóa');
let n = prompt('xóa mấy phần tử');
phim.splice(i, n);
// after 10
// 1
let movies = ['hay','ngắn','dài','năm sx'];
let n = movies.length;
for(i = 0;i < n;i++){
    console.log(movies[i]);
}
// 2
for(i = 0;i<n % 2;i++){
    console.log(movies[i]);
}
// 3
let a = ['anh','yeu','em'];
for(i=0;i<a.length;i++){
    console.log(i+'.'+a[i])
}
// after 11
let movies = ['hay','ngắn','dài','năm sx'];
for(i = 0;i < n;i++){
    movies[i] = movies[i].toLocaleLowerCase;
    
}
console.log(movies);
// after 14
// 1
let n = prompt('nhập vào tên của bạn');
let x = n.length;
if(x > 16){
    alert('Your name is too long');
}
else if(x <= 15){
    alert('Good name user');
}
// 2
let a = ('Con nhện có mấy chân');
let b = ['không có chân','có 2 chân','có 8 chân','có 12 chân'];
for(i=0;i<b.length;i++){
    prompt(alert(a + ("\n") + i + '.' +b[i]));
}

// bt thêm : người dùng nhập n số nguyên ngẫu nhiên từ bàn phím
let n = prompt('nhập vào dẫy số');
let daySo = n.split(' ');
console.log(daySo);
// 1.1: sắp xếp theo chiều tăng dần
daySo.sort((a, b) => a - b); 
    console.log(daySo);
// 1.2 : lọc dãy số trên thành 2 dãy chẵn và lẻ
let chan = []; le = []
for(let item of daySo){
if(daySo % 2 == 0){
    chan.push(item);
    console.log(chan);
}
else{
    le.push(item);
    console.log(le);
}
}
// 3 : loại bỏ số trùng nhau ở 2 dãy

let chanMoi = []; leMoi = [];
for(i = 0;i < chan;i++){
    if(chan.includes(i))
    chanMoi.push(i)
}
for(i = 0;i < le;i++){
    if(le.includes(i))
    leMoi.push(i)
}