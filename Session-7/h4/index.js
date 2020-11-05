let x = document.getElementsByTagName('LI');
for(i = 0; i < x.length;i++){
    console.log(x[i])
}
for(let z of x){
    console.log(z.innerHTML)
}