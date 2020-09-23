var btn_save = document.getElementById('save');

btn_save.addEventListener('click', () => {
    var lista = document.querySelector('body > main > div > div > div.list');
    var input = window.prompt('Digite o nome da tarefa:');

    var template = document.querySelector("#template1");
    lista_span = template.content.querySelectorAll('span');
    lista_span[0].innerHTML = input;
    lista_span[1].innerHTML = hora.textContent + ':' + minuto.textContent + ':' + segundo.textContent;

    nova_linha = document.importNode(template.content, true);
    lista.appendChild(nova_linha);


});