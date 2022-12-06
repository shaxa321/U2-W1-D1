/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


/*Intanto i datatype sono delle variabili. Cosa sono delle variabili? Delle variabili sono delle scatolette che hanno delle etichette dove possiamo inserire qualcosa. Ovvero
sono degli spazi di memoria a breve termine (RAM) riservati dalla macchina. Quando andiamo a creare una variabile , ovvero andiamo a "creare la scatoletta" essa 
puo avere dentro dei numeri, dei valori boleani( ovvero si o no, vero o falso, bianco o nero), delle stringhe(un testo, un nome, un cognome) oppure essere vuote .
Quando andiamo a creare una variabile riserviamo dello spazio in memoria, ma per indicare che la scatoletta è vuota , dentro viene inserito "undefined" per indicare che la scatola
c'è ma non è stata ancora riempita. Invece se è stata riempita e poi svuotata il valore al suo interno sarà , ovvero si rappresenterà con "NULL".
Quindi i datatype in Javascript, possono essere numeri, testi, boleani oppure NULL e UNDEFINED, e ognugna di loro avrà caratteristiche diverse e dimensioni diverse.
Inoltre le scatole  possono essere delle var ( che non si utilizza piu è datato) oppure "const" o "let"
Quando si aggiunge un valore dentro una scatola di tipo "const" non si puo piu cambiare il suo valore invece dentro let si puo sempre andare a prendere e inserirne un' altro.




/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

  let nameex2;                     //Inizializzazione della variabile
  nameex2="Amonov Shahruz";            //Assegnazione di un valore alla variabile
  console.log(nameex2);


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

  let sum;
  sum=(12+20);
  console.log(sum);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12. */
  let x;
  x=12;
  console.log(x);




/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const. */

  let nameex5="Amonov";
  console.log(nameex5);
  //const prova;
  //prova=25;
  //console.log(prova);
 // prova=18;
  //console.log(prova);

 /* Sicuramente il compilatore darà un errore perchè const è una constante e una volta inserito un valore al suo interno 
  non si puo piu cambiarlo
*/


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).*/
  let xes6=12;
  let sumex6;
  sumex6=(4-12);
  console.log(sumex6);



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1="john";
let name2="John";
console.log(name1===name2);




name1="john";
name2="John";
name3=name2.toLowerCase();
console.log(name3===name1);

