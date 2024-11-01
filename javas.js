document.getElementById('btnGenerar').addEventListener('click', function() {
    const palabra = document.getElementById('inputPalabra').value;
    const longitudMaxima = 10;
    const caracteresAdicionales = "!@#$%^&*()_+";
   
    if (palabra.length === 0) {
        document.getElementById('resultado').textContent = "Por favor, ingresa una palabra.";
        return;
    }

    let password = palabra;

    // Agregar caracteres adicionales
    while (password.length < longitudMaxima) {
        const randomChar = caracteresAdicionales.charAt(Math.floor(Math.random() * caracteresAdicionales.length));
        password += randomChar;
    }

    // Limitar la longitud de la contraseña a 10 caracteres
    password = password.slice(0, longitudMaxima);
   
    // Mezclar los caracteres
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    // Usar comillas invertidas para la interpolación
    document.getElementById('resultado').textContent = `Contraseña generada: ${password}`;
});
