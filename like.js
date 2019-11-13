var like=document.querySelector(".button-like")
var compteur=99999
var bool=true
var chiffre=document.querySelector(".chiffre-like")
like.addEventListener("click",()=>{
    if(bool===false){
    var chiffre=document.querySelector(".chiffre-like")
    chiffre.innerText=compteur
    compteur--
    bool=true
    }
    else{
        var chiffre=document.querySelector(".chiffre-like")
        chiffre.innerText=compteur
       
        compteur++

        bool=false
    }
})
window.addEventListener("load",()=>{
    chiffre.innerText=compteur
})