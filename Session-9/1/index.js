// 1.1
var promise = new Promise(
    function(resolve,reject){
        resolve(setTimeout(() => {
            console.log('Promise is da best')
        },2000));
       // reject(setTimeout(() => {
       //     console.log('Promise is da best')
      //  },2000))
});

//1.2
async function f(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('Promise is da best !!'),1000)
    });
    let result = await Promise;
    alert(result);
}
f();

//1.3
let myPromise3 = new Promise(function(resolve,reject){
setTimeout(() => reject(new Error('Promise is da best ^^')),2000);
});
myPromise3.then(
    result => console.log(result),
    error => console.log(error)
);