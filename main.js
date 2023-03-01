console.log ("Hola , mundo!")
function selectMode (modo) {
    let color = "black";;
    let bgcolor = "white";
    let shadow = "2px 2px 4px #be96dd";
    let modos = "#080659"


    if (modo === "light") {
        bgcolor = "white"
        color = "black"
        shadow = "2px 2px 4px #be96dd"
        modos = "#080659"

    } else {
        bgcolor = "black"
        color = "#be96dd"
        shadow = "4px 4px 8px white"
        modos = "#be96dd"
    }

document.getElementById("tema").style.backgroundColor = bgcolor;
document.getElementById("tema").style.color = color;
document.getElementById("subtitulo").style.textShadow = shadow;
document.getElementById("subtitulo").style.color = color;
document.getElementById("modos").style.color = modos;
document.getElementById("subtitulo2").style.color = modos;
document.getElementById("subtitulo2").style.textShadow = shadow;
document.getElementById("subtitulo3").style.color = modos;
document.getElementById("subtitulo3").style.textShadow = shadow;
document.getElementById("subtitulo4").style.color = modos;
document.getElementById("subtitulo4").style.textShadow = shadow;
document.getElementById("marquesina").style.color = modos;
document.getElementById("marquesina").style.textShadow = shadow;


}

