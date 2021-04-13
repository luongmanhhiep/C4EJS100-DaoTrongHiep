var btn = document.getElementById('btn');
var a = document.getElementById('input');



btn.addEventListener('click', () => {
    reverseString(a.value.toLowerCase());

});

function reverseString(a) {
    let x = a.split('').reverse().join('');
    if (a === x) {
        console.log(true);
    } else {
        console.log(false)
    }


}