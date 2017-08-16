function enviar() {
        var email = document.getElementById("email").value;
        var senha = document.getElementById("senha").value;

            if (email == '' || senha == '') {
            alert("Preencha todos os campos!");
        }
        else if (email == 'email' & senha == 'senha') {
            alert("Entrou!!!");
        }
        else {
            alert("Usuário ou senha inválidos");
        }
        }