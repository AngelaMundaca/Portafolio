document.getElementById("formContacto").addEventListener("submit", async function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    const res = await fetch("/api/contacto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, correo, mensaje })
    });

    const data = await res.json();

    document.getElementById("respuesta").innerText = data.mensaje;
});