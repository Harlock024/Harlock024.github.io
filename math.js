const pantalla = document.querySelector(".display");
const botones = document.querySelectorAll(".button-54")


let expresion = "";

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        console.log(boton.textContent);
        const botonPush = boton.textContent;

        if (boton.id === "C") {
            pantalla.textContent = "0";
            expresion = "";

            return;
        }
        if (boton.id === "back") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "SintaxError") {
                pantalla.textContent = "0";
                expresion = "";

            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
                expresion = expresion.slice(0, -1);

            }
            return;
        }


        if (boton.id === "igual") {
            try {
                const resultado = eval(expresion);
                pantalla.textContent = resultado;
                expresion = resultado.toString();

            } catch {
                pantalla.textContent = "SintaxError";
                expresion = "";
            }

            return;
        }
        if (boton.id === "pow") {
            pantalla.textContent += "**";
            return;
        }
        if (boton.id === "sqrt") {
            pantalla.textContent += "√";
            return;
        }



        if (pantalla.textContent === "0" || pantalla.textContent === "SintaxError") {
            pantalla.textContent = botonPush;
        } else {
            pantalla.textContent += botonPush;
        }

        expresion += botonPush;
        pantalla.textContent = expresion;



    });
});


