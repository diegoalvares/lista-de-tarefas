ntrf = document.getElementById('btn_tarefa');
formulario = document.getElementById('formulario');
adc = document.getElementById('adc');
cnc = document.getElementById('cnc');
nome_tarefa = document.getElementById('nome_tarefa');
descricao = document.getElementById('descricao');
rodape = document.getElementById('rodape');


ntrf.addEventListener('click', function novatarefa(){
    formulario.style.display = 'block';
    nome_tarefa.value='';
    descricao.value='';
})

adc.addEventListener('click', function adicionar(e){
    e.preventDefault();
    const card = document.createElement("div");
    card.classList.add('card');
    const titulo_card = document.createElement("h3");
    const linha = document.createElement("hr");
    const titulo_card2 = document.createElement("h4");
    const pg_card = document.createElement("p");

    //---------------------------------------------//

    titulo_card.innerText= nome_tarefa.value;
    titulo_card2.innerText='Descrição da Tarefa';
    pg_card.innerText=descricao.value;

    //---------------------------------------------//

    document.body.appendChild(card);
    card.appendChild(titulo_card);
    card.appendChild(linha);
    card.appendChild(titulo_card2);
    card.appendChild(pg_card);
    rodape.parentNode.insertBefore(card, rodape);

    formulario.style.display='none';
})


cnc.addEventListener('click', function cancelar(){
    formulario.style.display = 'none';
})

