var usuario = {
    nome: "Adm",
    senha: "adm"
}

function login(){

    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;

    var cadastrando = {
        nome: nome,
        senha: senha
    }
    if(cadastrando.nome && cadastrando.senha){
        if(cadastrando.nome == usuario.nome){
            if(cadastrando.senha == usuario.senha){
                location.replace("entrado.html");
            }
            else{
                alert("Senha incorreta");
            }
        }
        else{
            alert("Usuário não encontrado");
        }
    }
    else{
        alert("Preencha os campos")
    }
}