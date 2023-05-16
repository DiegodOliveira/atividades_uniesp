function Cadastrar(){
    var nome = document.getElementById("idNome").value;
    var email = document.getElementById("idEmail").value;
    var mensagem = document.getElementById("idText").value;

    var obj = {}
    obj.nome = nome;
    obj.email = email;
    obj.mensagem = mensagem;

    console.log(obj);
}

function validarUsuario(){
    var emailAdmin = document.getElementById("EmailAdmin").value;
    var senhaAdmin = document.getElementById("senhaAdmin").value;

    var objadmin = {}
    objadmin.email = emailAdmin;
    objadmin.senhaAdmin = senhaAdmin;

    console.log(objadmin);

    if (verificarCredenciais(objadmin) == true){
        location.href = "mensagens.html"
    }else{
        alert("Email ou senha incorretos!")
    }
}

function verificarCredenciais(objadmin) {
    // Aqui você pode adicionar o código para verificar se o email e a senha do usuário são válidos
    // Por exemplo:
    if (objadmin.email == "admin@example.com" && objadmin.senhaAdmin == "senha123") {
        return true;
    } else {
        return false;
    }
}


