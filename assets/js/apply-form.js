//autor: WIlson Brandão

//captura formulário e adiciona listener de submit que chama função de mensagem de sucesso
let form = document.getElementById("form-apply");
form.addEventListener('submit', event => {
    event.preventDefault();
    let mainContent = document.querySelector('#main-block');
    createSeccessMessage(mainContent);
})

//Função que cria elemento HTML P (parágrafo) com mensagem de sucesso para envio do formulário
function createSeccessMessage (content) {
    if (document.getElementsByClassName("successfulMessage").length < 1) {
        let successfulMessage = document.createElement("p");   
        successfulMessage.classList.add("successfulMessage");
        successfulMessage.textContent = "Application form sent, please wait for our return";
        content.appendChild(successfulMessage);
    }
}