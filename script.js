function encriptar(){
    var letras = "eiaou"
    var inp = document.getElementById("text1");
    var rep = inp.value;
    var remplace = "";

    if (typeof rep === "undefined" || rep === null || rep === ""){
        var di1 = document.getElementById("con");
        var di2 = document.getElementById("sin");
        di1.style.display = "none";
    }
        
    else{
        var di1 = document.getElementById("con");
        var di2 = document.getElementById("sin");
        di1.style.display = "block";
        for (i of rep) {
            if (letras.includes(i)) {
                var remplace = rep.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
            } 
        } 
    }
     

    var div = document.getElementById("moscont");
    div.innerHTML = remplace;
}

function desencriptar(){
    var letras = "enterimesaioberufat"
    var inp1 = document.getElementById("text1");
    var rep1 = inp1.value;
    var remplace1 = "";

    if (typeof rep1 === "undefined" || rep1 === null || rep1 === ""){
        var di1 = document.getElementById("con");
        var di2 = document.getElementById("sin");
        di1.style.display = "none";
    }

    else{
        var di1 = document.getElementById("con");
        var di2 = document.getElementById("sin");
        di1.style.display = "block";
        for (j of rep1) {
            if (letras.includes(j)) {
                var remplace1 = rep1.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat","u");
            } 
        } 
    }

    var div = document.getElementById("moscont");
    div.innerHTML = remplace1;
}


function copiar() {
    var div = document.getElementById("moscont");
    var contenido = div.textContent;
    var textarea = document.createElement("textarea");
    textarea.value = contenido;
    
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("Contenido copiado al portapapeles");
}

