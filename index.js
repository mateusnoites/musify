let senha = document.getElementById('senha');

function mostrar() {
    if(senha.type == "password") {
        senha.type = "text";
    } else if (senha.type == "text") {
        senha.type = "password";
    }
}