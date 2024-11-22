function validarDatos() {
    console.log("Iniciando validación...");

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("validaciondenombre").value.trim();
    const apellido = document.getElementById("validaciondeapellido").value.trim();
    const correo = document.getElementById("validaciondecorreo").value.trim();
    const edad = document.getElementById("validaciondeaños").value.trim();
    const terminos = document.getElementById("invalidCheck2").checked;

    // Validar que el campo de nombre no esté vacío y no contenga números
    const nombreRegex = /^[a-zA-Z\s]+$/; // Solo letras y espacios
    if (nombre === "") {
        Swal.fire({
            title: "Tienes que llenar los espacios en blanco.",
            width: 500,
            padding: "3em",
            color: "#fff",
            background: "transparent",
            backdrop: `rgba(0,0,123,0.4) url("imagenes/patricio.gif") left top no-repeat`,
        });
        console.log("Error: Campo de nombre vacío.");
        return false;
    } else if (!nombreRegex.test(nombre)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El nombre no debe contener números ni caracteres especiales!",
            footer: '<a href="index.html">Necesitas ayuda?</a>',
        });
        return false;
    }

    // Validar que el campo de apellido no esté vacío y no contenga números
    const apellidoRegex = /^[a-zA-Z\s]+$/;
    if (apellido === "") {
        alert("Por favor, ingresa tu apellido.");
        console.log("Error: Campo de apellido vacío.");
        return false;
    } else if (!apellidoRegex.test(apellido)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El apellido no debe contener números ni caracteres especiales!",
            footer: '<a href="index.html">Necesitas ayuda?</a>',
        });
        return false;
    }

    // Validar que el correo tenga un formato adecuado
    const correoRegex = /^[a-zA-Z0-9._%+-]+@ucundinamarca\.edu\.co$/;
    if (!correoRegex.test(correo)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, ingresa un correo válido con el dominio '@ucundinamarca.edu.co'.",
            footer: '<a href="index.html">Necesitas ayuda?</a>',
        });
        return false;
    }

    // Validar que la edad sea un número positivo y mayor a cero
    const edadNumero = parseInt(edad, 10);
    if (isNaN(edadNumero) || edadNumero <= 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, ingresa una edad válida.",
            footer: '<a href="index.html">Necesitas ayuda?</a>',
        });
        return false;
    }

    // Verificar si se aceptaron los términos y condiciones
    if (!terminos) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Debes aceptar los términos y condiciones.",
            footer: '<a href="index.html">Necesitas ayuda?</a>',
        });
        return false;
    }

    // Mostrar mensaje de éxito y esperar 50 segundos antes de redirigir
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Información enviada correctamente",
        showConfirmButton: false,
        timer: 50000, // 50 segundos
        didOpen: () => {
            console.log("Modal abierto.");
        },
        didClose: () => {
            console.log("Redirigiendo después del modal...");
            window.location.href = "otra_pagina.html"; // Cambia a la URL deseada
        },
    });

    console.log("Formulario validado correctamente.");
    return true;
}
