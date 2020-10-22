let x = 'The current item are:';
console.log(x );
let a = ['Jeans','T-Shirt','Socks'];

while(true){
    let y = prompt('Hi there, w((elcome to shop admin , what do you want:(C,R,U,D)?') ;
    let y = y.toLocaleUpperCase();
    if(y == 'C'){
        newItem = prompt('Enter the name of the new Item');
        y.push(newItem);
        alert('Done')
    }
    else if(y == 'R'){
        console.log(x);
        for(i =0; i < a.length; i++){
            console.log (i + '. ' + a[i]);
        }
    }
    else if(y == 'U'){
        n = prompt('Enter the position you want to Update');
        newItem = prompt('Enter new Item');
        a.splice(n,0,newItem);
    }
    else if(y == "D"){
        n = prompt('Enter the position you want to Delete')
        a.splice(n,1)
    }
    else if(y !='C'||y !='R'||y !='U'||y !='D'){
        alert('This command is the not supported')
    }
}