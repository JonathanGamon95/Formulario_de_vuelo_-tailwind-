const CONT_VENTANAS = document.getElementById("cont_ventanas");

const NOMBRE_Y_APELLIDO = document.getElementById("N_Y_A")
const DNI = document.getElementById("DNI")

const ORIGEN_VUELO = document.getElementById("origen_vuelo")
const DESTINO_VUELO = document.getElementById("destino_vuelo")

const SIGUIENTE_1 = document.getElementById("siguiente_1")
const SIGUIENTE_2 = document.getElementById("siguiente_2")

const ATRAS_1 = document.getElementById("atras_1")
const ATRAS_2 = document.getElementById("atras_2")

const ACEPTAR = document.getElementById("aceptar")

const PASAJERO = document.getElementById("pasajero")
const VUELO_RECIBIDO = document.getElementById("origen_recibido")
const DESTINO_RECIBIDO = document.getElementById("destino_recibido")
const DNI_RECIBIDO = document.getElementById("dni_recibido");




let limite = 0;
let siguiente_mobile = 0;
let siguiente_escritorio = 0;

const confirmacionDePantalla = () => {
    const anchoPantalla = window.innerWidth;

    if (anchoPantalla <= 768) {
        siguiente_mobile -= 100;
        CONT_VENTANAS.style.transform = `translateX(${siguiente_mobile}vw)`;

    } else {
        siguiente_escritorio -= 350;
        CONT_VENTANAS.style.transform = `translateX(${siguiente_escritorio}px)`;
    }
}





const funcion_atras = () => {
    const anchoPantalla = window.innerWidth;

    if (anchoPantalla <= 768) {
        siguiente_mobile += 100;
        CONT_VENTANAS.style.transform = `translateX(${siguiente_mobile}vw)`;

    } else {
        siguiente_escritorio += 350;
        CONT_VENTANAS.style.transform = `translateX(${siguiente_escritorio}px)`;
    }
}





const obtencion_datos_usuario = () => {
    if (NOMBRE_Y_APELLIDO.value == "" || DNI.value == "") {
        
    } else {
        confirmacionDePantalla()
        const nombre_y_apellido = NOMBRE_Y_APELLIDO.value;

        PASAJERO.textContent = "PAS:" + " " + nombre_y_apellido;
    }
}


const obtencion_datos_vuelo = () => {
    if (ORIGEN_VUELO.value == "" || DESTINO_VUELO.value == "") {
        
    } else {
        confirmacionDePantalla()
        const origen = ORIGEN_VUELO.value;
        const destino = DESTINO_VUELO.value;
        const dni = DNI.value;

        VUELO_RECIBIDO.textContent = "ORIGEN:" + " " + origen;
        DESTINO_RECIBIDO.textContent = "DESTINO:" + " " + destino;
        DNI_RECIBIDO.textContent = "DNI:" + " " + dni;
    }
}

SIGUIENTE_1.addEventListener("click", obtencion_datos_usuario)
SIGUIENTE_2.addEventListener("click", obtencion_datos_vuelo)

ATRAS_1.addEventListener("click", funcion_atras)
ATRAS_2.addEventListener("click", funcion_atras)




const confirmacion = () => {
    swal({
        title: "pasaje confirmada!",
        text: "ya tiene un pasaje!",
        icon: "success",
    });

    NOMBRE_Y_APELLIDO.value = "";
    DNI.value = "";
    ORIGEN_VUELO.value = "";
    DESTINO_VUELO.value = "";

    NOMBRE_Y_APELLIDO.value = "";
    DNI.value = "";
    ORIGEN_VUELO.value = "";
    DESTINO_VUELO.value = "";

    PASAJERO.textContent = "";
    VUELO_RECIBIDO.textContent = "";
    DESTINO_RECIBIDO.textContent = "";
    DNI_RECIBIDO.textContent = "";

    limite = 0;
    siguiente_mobile = 0;
    siguiente_escritorio = 0;

    CONT_VENTANAS.style.transform = `translateX(${siguiente_mobile})`;
}

ACEPTAR.addEventListener("click", confirmacion)