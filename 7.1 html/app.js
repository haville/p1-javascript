let budget = 100;
let product = prompt("hoeveel kost het product?");
let par= document.getElementById("paragraaf");

if (budget>product){
console.log('ik heb geonoeg geld');
par.innerText= "ik heb genoeg geld";
par.style.color= "green";
}
else{
    console.log("ik heb te weinig geld")
    par.innerText= "ik heb te weinig geld";
    par.style.color = "red";
}


 
