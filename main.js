var pari = 'Fizz';
var dispari = 'Buzz';
var multipli = 'FizzBuzz'

for (var i = 1; i <= 100; i++){          // partendo da i che vale 1, i è <= 100? no allora +1 a ogni giro finche non lo diventa
    if (i % 3 == 0 && i % 5 == 0){
        console.log(multipli);
    }else if (i % 3 == 0){              //se i / 3 = 0 allora vedrò il risultato dispari
        console.log(dispari);
    }else if (i % 5 == 0){              //sse  i / 5 = 0 allora vedrò  il pari
        console.log(pari);
    }else {                             // altrimenti vedrò gli altri numeri
        console.log(i);
    }
}