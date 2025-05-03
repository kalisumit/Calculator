const display = document.getElementById("display");

function appendTodisplay(input){
    display.value = display.value+input;
}

function clr_display(){
    display.value ="";
}

function calculate(){
    try {
        display.value = eval(display.value);
    }
    catch(err){
        display.value = "Error!";
    }
}
