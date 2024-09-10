document.getElementById('testDriveForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores de los campos
    const nombres = document.getElementById('nombres').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const estrato = document.getElementById('estrato').value.trim();
    
    // Expresiones regulares
    const regexNombresApellidos = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const regexTelefono = /^\d{7,10}$/;
    const regexEstrato = /^[1-6]$/;

    // Validaciones
    if (!regexNombresApellidos.test(nombres)) {
        alert('Por favor ingrese un nombre válido.');
        return;
    }

    if (!regexNombresApellidos.test(apellidos)) {
        alert('Por favor ingrese un apellido válido.');
        return;
    }

    if (!regexEmail.test(email)) {
        alert('Por favor ingrese un email válido.');
        return;
    }

    if (!regexTelefono.test(telefono)) {
        alert('Por favor ingrese un teléfono válido (7 a 10 dígitos).');
        return;
    }

    if (!regexEstrato.test(estrato)) {
        alert('El estrato debe estar entre 1 y 6.');
        return;
    }

    // Si todas las validaciones son correctas, puedes enviar el formulario
    alert('Formulario enviado exitosamente.');
    this.submit();
});
