function changeColor(){
    var word = 0;
    var werd = word.length;
    var mass = RegExp("{0-9}");
    
    
    if(word.length < 6){
        document.getElementById("password").style.borderColor = "green";
    }
    else{
        document.getElementById("password").style.borderColor = "red"; 
    }

    if(mass = true){
        document.getElementById("password").style.borderColor = "red";
    }
    else{
        document.getElementById("password").style.borderColor = "green"; 
    }
}
function changeColorTwo(){    
    var sim  = RegExp("{A-Z}"); 
    if(sim = true){
        document.getElementById("login").style.borderColor = "red";
    }
    else{
        document.getElementById("login").style.borderColor = "green"; 
    }     
}

function logi() {
    alert("Вы залогинились!");
}