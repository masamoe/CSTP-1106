function leap(year){
    if(year % 4 != 0){
        alert(year + " is a common year.");
    }
    else if(year % 100 != 0){
        alert(year + " is a leap year.");
    }
    else if(year % 400 != 0){
        alert(year + " is a common year.");
    }
    else{
        alert(year + " is a leap year.");
    }
}

function query (){
    const year = parseInt(prompt("What year is it?"));
    leap(year);
}

$(document).ready(query);