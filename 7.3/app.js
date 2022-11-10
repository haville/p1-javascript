let title = document.getElementById("paragraaf");

let getal = 0;

function add(){

    if(getal == 10){
        getal = 0;

    }else {
        getal+=1;
       
    }
    title.innerText = getal;
    
}
