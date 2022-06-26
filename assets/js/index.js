//autor: WIlson Brandão

//Função para criar Scroll Down na página apartir dos Quick Access 
function scrollToElement(element) {
    document.querySelector(element).scrollIntoView({behavior: 'smooth'});
}

//Captura elemento HTMl e cria evento de click atribuindo função de Scroll Down
document.querySelector('#quick-happening').addEventListener('click', event => scrollToElement('#happening'));
document.querySelector('#quick-greenHall').addEventListener('click', event => scrollToElement('#greenhall'));
document.querySelector('#quick-community').addEventListener('click', event => scrollToElement('#communityBulletin'));
document.querySelector('#quick-schoolNews').addEventListener('click', event => scrollToElement('#schoolNews'));
document.querySelector('#quick-newsletter').addEventListener('click', event => scrollToElement('#receiveTransmissions'));
