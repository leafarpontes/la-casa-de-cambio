// Javascript da acessibilidade

function acessibilidadeAumenta() {
    var elemento = document.querySelector(':root')
    num = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
    num = parseInt(num);
    num++;
    if (num <=20) {
        elemento.style.fontSize = num+'px';
    }
}

function acessibilidadeDiminui() {
    var elemento = document.querySelector(':root')
    num = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
    num = parseInt(num);
    num--;
    if (num >= 16) {
        elemento.style.fontSize = num+'px';
    }
}


/// Oberservar eventos para acessibilidade
var btnAcessibilidadeAumenta = document.getElementById('btn-acessibilidade-aumenta');
btnAcessibilidadeAumenta.addEventListener('click', acessibilidadeAumenta);
var btnAcessibilidadeDiminui = document.getElementById('btn-acessibilidade-diminui');
btnAcessibilidadeDiminui.addEventListener('click', acessibilidadeDiminui);

// Javascript do Modo escuro/claro



function alternarModoEscuro() {
    let modoClaro;
    // variaveis página modelo.html
    const aboutUs = document.querySelector("#about-us");
    const aboutUsStyle = getComputedStyle(aboutUs);
    let aboutUsBgColor = aboutUsStyle.backgroundColor;
    const peopleBox = document.getElementsByClassName("people-box");

    console.log(aboutUsBgColor); // para debugar

    if (aboutUsBgColor == "rgb(255, 255, 255)") { // se a cor de fundo estiver branca...
        modoClaro = true;
    }
    else {
        modoClaro = false;
    }
    console.log(modoClaro); // para debugar

    if (modoClaro) { // se a página estiver no modo claro...
        // troca as coisas para o modo escuro
        aboutUs.style.backgroundColor = "rgb(32, 33, 36)";
        aboutUs.style.color = "rgb(255, 255, 255)";

        for (let i = 0; i < peopleBox.length; i++) { // alterar todos os elementos da classe people-box
            peopleBox[i].style.backgroundColor = "rgb(50, 52, 57)";
            peopleBox[i].style.color = "rgb(255, 255, 255)";
        }
    }
    else { // se a página não estiver no modo claro...
        // troca as coisas para o modo claro
        aboutUs.style.backgroundColor = "rgb(255, 255, 255)";
        aboutUs.style.color = "rgb(32, 33, 36)";

        for (let i = 0; i < peopleBox.length; i++) { // alterar todos os elementos da classe people-box
            peopleBox[i].style.backgroundColor = "rgb(255, 255, 255)";
            peopleBox[i].style.color = "rgb(0, 0, 0)";
        }
    }
}

// function alternarModoEscuro() {
//     let modoClaro;
//     // variaveis página modelo.html
//     const conteudoMain = document.querySelector("#meio-div");
//     const conteudoMainStyle = getComputedStyle("conteudoMain");
//     let conteudoMainBgColor = conteudoMainStyle.backgroundColor;
//     const meioMain = document.getElementsByClassName("meio-main");

//     console.log(conteudoMainBgColor); // para debugar

//     if (conteudoMainBgColor == "rgb(255, 255, 255)") { // se a cor de fundo estiver branca...
//         modoClaro = true;
//     }
//     else {
//         modoClaro = false;
//     }
//     console.log(modoClaro); // para debugar

//     if (modoClaro) { // se a página estiver no modo claro...
//         // troca as coisas para o modo escuro
//         conteudoMain.style.backgroundColor = "rgb(32, 33, 36)";

//         for (let i = 0; i < meioMain.length; i++) { // alterar todos os elementos da classe people-box
//             meioMain[i].style.backgroundColor = "rgb(50, 52, 57)";
//             meioMain[i].style.color = "rgb(255, 255, 255)";
//         }
//     }
//     else { // se a página não estiver no modo claro...
//         // troca as coisas para o modo claro
//         conteudoMain.style.backgroundColor = "rgb(255, 255, 255)";

//         for (let i = 0; i < meioMain.length; i++) { // alterar todos os elementos da classe people-box
//             meioMain[i].style.backgroundColor = "rgb(255, 255, 255)";
//             meioMain[i].style.color = "rgb(0, 0, 0)";
//         }
//     }
// }

function alternarModoEscuroCadastro() {
    let modoClaro;
    const formContainer = document.querySelector("#form-container");
    const formContainerStyle = getComputedStyle(formContainer);
    let formContainerBgColor = formContainerStyle.backgroundColor;

    if (formContainerBgColor == "rgb(255, 255, 255)") {
        modoClaro = true;
    }
    else {
        modoClaro = false;
    }

    if (modoClaro) {
        formContainer.style.backgroundColor = "rgb(32, 33, 36)";
        formContainer.style.color = "rgb(255, 255, 255)";
    }
    else {
        formContainer.style.backgroundColor = "rgb(255, 255, 255)";
        formContainer.style.color = "rgb(0, 0, 0)";
    }
}

function alternarModoEscuroConversao() {
    const containerConversao = document.querySelector("#container-conversao");
    const containerConversaoStyle = getComputedStyle(containerConversao);
    let containerConversaoBgColor = containerConversaoStyle.backgroundColor;
    const coluna = document.getElementsByClassName("coluna");

    if (containerConversaoBgColor == "rgb(255, 255, 255)") {
        modoClaro = true;
    }
    else {
        modoClaro = false;
    }

    if (modoClaro) {
        containerConversao.style.backgroundColor = "rgb(32, 33, 36)";
        
        for (let i = 0; i < coluna.length; i++) {
            coluna[i].style.color = "rgb(255, 255, 255)";
        }
    }
    else {
        containerConversao.style.backgroundColor = "rgb(255, 255, 255)";
        containerConversao.color = "rgb(0, 0, 0)";

        for (let i = 0; i < coluna.length; i++) {
            coluna[i].style.color = "rgb(0, 0, 0)";
        }
    }
}