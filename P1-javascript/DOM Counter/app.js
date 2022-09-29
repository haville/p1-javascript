//plaats onderstaande regel in een variable genaamd button
let button = document.getElementById("sukkel");
//maak een variabel genaamd count met als waarde 0
let count = 0;


count += 1
//maak een function genaamd counter en plaats daarin de count += 1';

function counter() {
    document.body.style.backroundColor = "yellow";
    count += 1;
    button.innerText = count + "keer op geklikt"}

    function counter1() {
        count -= 1;
        button.innerText = count + "keer op geklikt"} 
document.body.style.backroundColor = "yellow";
// maak in je html nog een button
// in javascript een nieuwe functie die aftrekt ipv optelt