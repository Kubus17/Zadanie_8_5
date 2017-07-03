// scripts.js
/* Wyskakujące okna prompt */
var a = prompt('{Podaj bok trójkąta}');
var h = prompt('Podaj wysokość trójkąta');
var triangleArea = 0;
/* obliczamy pole trójkąta*/
triangleArea = a * h / 2;
//  pojawi się informacja w consoli w przeglądarce
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);