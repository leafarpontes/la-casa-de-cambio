function validarDataNasc() {
    //guarda o valor do input
    let dataNasc = document.getElementById("data-nasc").value;
    let campoDataNasc = document.getElementById("data-nasc");
    dataNasc = dataNasc.replace(/\//g, "-"); // substitui barras por hífen
    // let dataNascArray = dataNasc.split("-");

    // para o IE onde será inserido no formato dd/MM/yyyy
    // if(dataNascArray[0].length != 4) {
    //     dataNasc = dataNascArray[2] + "-" + dataNascArray[1] + "-" + dataNascArray[0]; // // remonta a data no formato yyyy/MM/dd
    // }

    // compara as datas e calcula a idade
    let hoje = new Date();
    let nasc = new Date(dataNasc);
    let idade = hoje.getFullYear() - nasc.getFullYear();
    let m = hoje.getMonth() - nasc.getMonth();

    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

    if (idade < 0 || idade > 130) { // checa se idade é negativa ou maior que 130
        campoDataNasc.style.borderColor = "red";
    }
    else {
        campoDataNasc.style.borderColor = "";
        return idade;
    }
}

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
            document.getElementById("msgemail").style.borderColor = "";
    }
    else{
        document.getElementById("msgemail").style.borderColor = "red";
    }
}

function exibirInfo() {
    let divInfo = document.getElementById("displayInfo");
    let inputNome = document.getElementById("nome").value;
    let inputEmail = document.getElementById("msgemail").value;
    let idadeUsuario = validarDataNasc();
    let sexoUsuario = document.getElementById("sexo").value;
    let cpfUsuario = document.getElementById("cpf").value;
    let inputs = document.getElementsByTagName("input");
    let ok;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].style.borderColor == "red" || inputs[i].value == "") {
            ok = false;
            break;
        }
        else {
            ok = true;
        }
    }
    if (ok) {
        divInfo.innerHTML = `Olá ${inputNome}! <br> Seu login é: ${inputEmail} <br> Você tem ${idadeUsuario} anos de idade <br> Se define como uma pessoa do sexo: <br> ${sexoUsuario} <br> Você pode usar ${cpfUsuario} como senha.`;
    }
    else {
        alert("Dados inválidos, por favor preencha corretamente.");
    }
}

// function nomeUpperCase() {
//     let inputNome = document.getElementById("nome").value;
//     let upperCaseName = inputNome.toUpperCase();
//     let fieldNome = document.getElementById("nome");
//     fieldNome.innerText = upperCaseName;
// }   

// código da Marcelly
function valida_cpf(){
    var cpf_ = document.getElementById("cpf").value;
    console.log(cpf_);
    var campo = document.getElementById("cpf");
    var soma_digitos=0;
    var soma_digitos2=0;

    if(cpf_.length != 11 || cpf_ == "00000000000" || cpf_ == "11111111111" || cpf_ == "22222222222" || cpf_ == "33333333333" ||  cpf_ == "44444444444" || cpf_ == "5555555555" || cpf_ == "66666666666" || cpf_ == "77777777777" || cpf_ == "88888888888" || cpf_ == "99999999999"){
        campo.style.borderColor="red";

    } else {
        //verifica se os digitos são iguais ou menor 11 


        for(i=1;i<=9;i++){

            soma_digitos = soma_digitos + (parseInt(cpf_.substring((i-1),i))*(11-i)); //multiplica os primeiros 9 digitos, começando pelo 1 dig *10, passando pelo segundo digito *9, depois terceiro * 8, assim por diante.
        }

        resultado1=soma_digitos*10;  //soma os digitos
        resto=resultado1 % 11;      //resultado da soma % 11 tem q dar igual ao primeiro digito verificador

        if (resto == 10 || resto ==11) { //se o resto der 10 ou 11, se tornam 0
            resto=0;
        }
        if (resto != parseInt(cpf_.substring(9,10))) {  //validação resto=1º digito
            campo.style.borderColor="red";

        } 
        for(i=1;i<=10;i++){

            soma_digitos2 = soma_digitos2 + (parseInt(cpf_.substring((i-1),i))*(12-i)); //multiplica os primeiros 10 digitos, começando pelo 1 dig *11, passando pelo segundo digito *10, depois terceiro * 9, assim por diante.
        }
        resultado2 = soma_digitos2*10;  //soma os digitos
        resto2 = resultado2 % 11;

        if (resto2 == 10 || resto2 ==11) { //se o resto der 10 ou 11, vira 0.
            resto2=0;            

        }
        if (resto2 != parseInt(cpf_.substring(10,11))) {  //validação resto=2º digito
            campo.style.borderColor="red";               
            } else {
                campo.style.borderColor=""; 
            }  
    }  

}

function validaNome() {
    let letras = /^[a-zA-Z\s]*$/;
    let nome = document.getElementById("nome").value;
    let campo = document.getElementById("nome");

    if (nome.match(letras)) {
        campo.style.borderColor = "";
    }
    else {
        campo.style.borderColor = "red";
    }

}