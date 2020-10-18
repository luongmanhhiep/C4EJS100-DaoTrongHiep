console.log('Ex 1: let vs var vs const')

console.log("\n")

console.log('1.1:What are var and const in JavaScript?')
let x = 'var: là từ khóa định nghĩa 1 biến có pham vi truy cập trong 1 function. Biến var có tác dụng trong function mà nó được định nghĩa.'
let y = 'const: là từ khóa định nghĩa 1 biến sẽ là hằng số. Biến const lưu trữ giá trị không thể thay đổi được trong suốt vòng đời của biến.'
console.log(x)
console.log(y)

console.log("\n")

console.log("1.2:What are the differences between let and var?")

console.log('let và var khác nhau ở phạm vi sử dụng.')
console.log('Phạm vi của biến số sử dụng var là phạm vi hàm số hoặc bên ngoài hàm số, toàn cục. ')
console.log('Phạm vi của biến số sử dụng let là phạm vi một khối, xác định bởi cặp {}')

console.log("\n")

console.log('1.3:What are the differences between let and const?')

console.log('let có thể thay đổi giá trị của biến')
console.log('Const cũng giống như let, nhưng tuy nhiên là const không thể thay đổi giá trị')

console.log("\n")

console.log('1.4: What to use in what cases?')

console.log('Nếu biến cần phải cập nhật giá trị thì dùng let.')
console.log('Hạn chế dùng var, trừ khi bạn muốn chia sẻ biến đó thông qua nhiều phạm vi khác nhau.')
console.log('Sử dụng const như mặc định.')

console.log("\n")

console.log('Ex 2: Boolean')

console.log('2.1:Boolean là gì? ')

console.log('là một kiểu dữ liệu có một trong hai giá trị có thể (thường được kí hiệu là đúng (true) và sai (false)), nhằm đại diện cho hai giá trị thật (truth value) của logic và đại số Boolean')

console.log("\n")

console.log('2.2: What results in Boolean?')

console.log('Boolean có kết quả là true (đúng) hoặc false (sai).')

console.log("\n")

console.log('Ex 3:Write a program to print out')

console.log("\n")

console.log('3.1: 7 numbers, starting from 0 (no user input)')
for(let x = 0; x < 7; x++){
    console.log(x)
}

console.log("\n")

console.log('3.2: n numbers, starting from 0, n entered by user')
let y = prompt('Enter number you want');
for(let x = 0; x< y ; x++  ){
    console.log(x)
}

console.log("\n")

console.log('3.3:A sequence of numbers, starting from 3, ending before n, n entered by user')
let y = prompt('Enter number you want');
for(let x = 3; x< y ; x++  ){
    console.log(x)
}

console.log("\n")

console.log('3.4:A sequence of numbers, starting from c, ending before n, c and n entered by user')
let c = prompt('Enter the smallest number')
let n = prompt('Enter the largest number')
for(c; c < n; c++){
    console.log(c)
}

console.log("\n")

console.log('3.5:A sequence of numbers, starting from c, ending before d, stepping by 3, c and n entered by user')
let c = prompt('số bắt đầu');
let a = Number(c)
let d= prompt('số cuối');
let b = Number(d)
for(a; a<b; a=a+3){
	console.log(a)
}

console.log('3.6:A sequence of numbers, starting from g, ending before h, stepping by s. g, h and  s entered by user')
let g = prompt('nhập số')
let j = Number(g)
let h = prompt('nhập số')
let k = Number(h)
let s = prompt('nhập só')
let l = Number(s)
for(j;j < k; j = j + l){
    console.log(j)
}

console.log("\n")

console.log('Ex 4:Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user')
let a = prompt('nhập số' )
let n = Number(a)
let x = 1
for(i=1;i<=n;i++){
  x=x*i
}
console.log('n '+x)


console.log("\n")

console.log('Ex 5: Write a program asking users their age, and then decide if they are old enough to view a 14+ content')

let age = prompt('nhập tuổi của bạn');
if (age < 14){
    alert('Bạn chưa đủ tuổi để xem nội dung bài viết')
}
else {
    alert('chào mừng bạn đến với bài viết')
}

console.log("\n")

console.log('Ex 6:Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range')
let a = prompt('bạn hãy nhập số')
let x = Number(a)
if (x < 5 ){
    alert('só này ở nửa bé')
}
else {
    alert('số này ở lớn')
}

let a =  prompt('bạn hãy nhập số')
let x = Number(a)
if (x > 9 ){
    alert('só này không đúng')
}
else if(x > 5) {
    alert('số này ở lớn')
}
else{
  alert('số này ở nửa bé')
}

console.log("\n")

console.log('Ex 7:Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n ')
let a = prompt('bạn hãy nhập số')
let n = Number(a)
let b = prompt('số kiểm tra')
let x = Number(b)
if (x<n/2)
{
    alert (x + ' Lower half of ' + n);
}
else if (x > n/2)
{
    alert (x + ' higher  half of ' + n);
}

console.log("\n")
console.log('Ex 8:Write a script to check if a number is even (divisible by 2) or odd number')
let d = prompt('nhập vào số')
let x = Number(d)
let d = prompt('nhập vào số')
let x = Number(d)
if(x % 2 == 0){
    alert(x  +' là số chẵn ')
}
else{
    alert(x  +' là số lẻ')
}

console.log("\n")

console.log('Ex 9: Write a program to print out')
console.log('9.1: 6 L’s and H’s, half L’s, half H’s (L means low, H means high)')
let low = 0; hight = 0
for(i = 1;i <= 6; i++){
    if(i<=3){
        low++
    }
    else{
        hight++
    }
}
console.log(low + 'L')
console.log(hight +'H')

console.log("\n")
console.log('9.2:n L’s and H’s in total, n entered by user')
let n = prompt('nhập vào số')
let low = 0; hight = 0
for(i = 1;i <= n;i++){
    if(i<=n/2){
        low++
    }
    else{
        hight++
    }
}
console.log(low + 'L')
console.log(hight + 'H')

console.log("\n")
console.log('9.3:8 1’s and 0’s in total, consecutively')
for(i=0; i<8;i++){
    console.log(i%2)
}
console.log("\n")
console.log('9.4:n 1’s and 0’s in total, consecutively, n entered by user')
let a = prompt('nhập số ')
for(i=0;i<a;i++){
    console.log(i%2)
}

console.log("\n");
console.log('Ex 10:Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows');
let cao = parseInt(prompt('nhập vào chiều cao của bạn (m)'));
let can = parseInt(prompt('nhập vào cân nặng của bạn (kg)'));
let bmi = can/(cao*cao);
if(bmi < 16){
    console.log('Severely underweight');
}
else if(bmi>16 ||bmi<18,5){
    console.log('Underweight')
}
else if(bmi > 18,5 || bmi < 25){
    console.log('Normal ')
}
else if(bmi > 25 ||bmi < 30 ){
    console.log('Overweight ')
}
else if(bmi > 30) {
    console.log('Obese ')
}

console.log("\n");
console.log('Ex 11:Use JS Turtle, to draw the following shapes');
console.log("\n");
console.log('11.1:A square');
for (var i=1; i <= 4; i++) {
    fd(100)
    lt(90)
}
console.log("\n");
console.log('11.2:A triangle')
for (var i=1; i <= 3; i++) {
    fd(100)
    lt(120)
}

console.log("\n");
console.log('11.3:A pentagon');
for (var i=1; i <= 5; i++) {
    fd(100)
    lt(72)
}

console.log("\n");
console.log('11.4:A hexagon');
for (var i=1; i <= 6; i++) {
    fd(100)
    lt(60)
}

console.log("\n")
console.log('Ex 12:Use JS Turtle to draw a polygon, the number of polygon’s edges entered by users')
let x = parseInt(prompt('nhập vào số cạnh'))
for(i=1;i <= n;i++ ){
    fd(100)
    lt(360/n)
}
