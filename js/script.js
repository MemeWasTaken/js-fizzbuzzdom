// SECTION MILESTONE 1 //

    // 1) PrintInConsole numeri da 1 a 100.
    for (let i = 1; i <= 100; i++) {
        // console.log(i);

        if (!((i % 3 == 0) || (i % 5 === 0))) {
            // 5) Per tutti i numeri != dai divisori di 3 && 5 stampare se stessi.
            console.log(i);

        } else if ((i % 3 == 0) && (i % 5 === 0)) {
            // 4) Per multipli di 5 && 3  stampare "FizzBuzz".
            console.log(i, 'FrizzBuzz');
            
        } else if (i % 5 === 0) {
            // 3) Per multipli di 5 stampare "Buzz".
            console.log(i, 'Buzz');
            
        } else if (i % 3 === 0) {
            // 2) Per multipli di 3 stampare "Fizz".
            console.log(i, 'Frizz');
        }
    }

// SECTION MILESTONE 2 //
    // 1) Inserire in index.html un container.
    // 2) "Appendere" elemento con numero/stringa nel DOM.

// SECTION MILESTONE 3 //
    // 1) Aggiungere nel ciclo le classi a seconda che siano o meno multipli di 3, 5 e 3 && 5.
    // 2) Crare stili corrispondenti per le varie classi
