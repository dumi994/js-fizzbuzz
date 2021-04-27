var pari = 'Fizz';
var dispari = 'Buzz';


for (var i = 1; i <= 100; i++){
    if (i % 3 == 0){
        console.log(dispari);
    }else if (i % 5 == 0){
        console.log(pari);
    }else if(i % 3 == 0 && i % 5 == 0){
        console.log(pari + dispari);
    }else{
        console.log(i);
    }
}
