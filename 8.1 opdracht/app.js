let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let title = document.getElementById("title");

function multiply (){
    if (input1.value < 1 || input2.value<1) {
        title.innerText= "het getal is te laag";
    }
 let anwser = input1.value * input2.value;
 
}

function add (){
    let anwser = Number(input1.value) + Number(input2.value)
 title.innerText = anwser;
}



function devide (){
    let anwser = input1.value / input2.value
    title.innerText = anwser;
   }  


function minus (){
    let anwser = input1.value - input2.value
 title.innerText = anwser;
}
 
