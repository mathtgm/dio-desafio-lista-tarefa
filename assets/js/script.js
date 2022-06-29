var listaTarefas = document.getElementById("listaTarefas");
var btnAdicionar = document.getElementById("adicionar");

btnAdicionar.addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
    let tarefa = criarElementoTarefa();
    listaTarefas.appendChild(tarefa);
}

function criarElementoTarefa() {
    let tarefa = document.getElementById('tarefa');
    let descricaoTarefa = document.createElement('span');
    let tarefaLista = document.createElement('li');
    let checktarefa = document.createElement('input');
    checktarefa.type = 'checkbox';

    //Adiciona o valor do <input> no span
    descricaoTarefa.textContent = tarefa.value;

    //Adicionado os elemento a uma <li>
    tarefaLista.appendChild(checktarefa);
    tarefaLista.appendChild(descricaoTarefa);
    tarefaLista.id = listaTarefas.children.length;

    //Limpar valor do <input>
    tarefa.value = '';
    return tarefaLista;

}