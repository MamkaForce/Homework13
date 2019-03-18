function changeColor(){
    var word = 0;
    var werd = word.length;
    
    if(word.length < 6){
       document.getElementById("login").style.borderColor("red");
    }
    else{
        document.getElementById("login").style.borderColor("green"); 
    }
}

function login() {
    alert("Вы залогинились!")
}