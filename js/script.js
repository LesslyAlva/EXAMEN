
document.getElementById("Form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    // Obtén los valores de usuario y contraseña
    const usuario = document.getElementById("usuario").value;
    const contrasenia = document.getElementById("contrasenia").value;

    // Datos de login para enviar a la API
    const loginData = {
        usuario: usuario,
        contrasenia: contrasenia
    };

    // Llamada a la API de login
    fetch("http://127.0.0.1:8001/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",  
        },
        body: JSON.stringify(loginData),
    })
        .then(response => response.json())
        .then(data => {

            // localStorage.removeItem("usuario");

            // Activa el alert en función de la respuesta de la API
            if (data.exist) {

                localStorage.setItem("usuario", data.data);
                localStorage.setItem("perfil", data.perfil);
                localStorage.setItem("nombre", data.nombre);

                Swal.fire({
                    icon: "success",
                    title: "Login exitoso",
                    text: data.message,
                }).then(() => {
                    // Redirección a otra página HTML después del éxito
                    window.location.href = "inicio.html"; // Cambia a la página que desees
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Login fallido",
                    text: data.message,
                });
            }
        })
    event.target.reset();

    registro()
    {
        window.location.href = "Registro.html"
    }

});

