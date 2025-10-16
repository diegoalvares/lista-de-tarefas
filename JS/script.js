ntrf = document.getElementById('btn_tarefa');
formulario = document.getElementById('formulario');
adc = document.getElementById('adc');
cnc = document.getElementById('cnc');
nome_tarefa = document.getElementById('nome_tarefa');
descricao = document.getElementById('descricao');
rodape = document.getElementById('rodape');

    //---------------------------------------------//


ntrf.addEventListener('click', function novatarefa(){
    formulario.style.display = 'block';
    nome_tarefa.value='';
    descricao.value='';
})

adc.addEventListener('click', function adicionar(e){
    e.preventDefault();
    
//---------------------------------------------//
    const card = document.createElement("div");
    const titulo_card = document.createElement("h3");
    const linha = document.createElement("hr");
    const titulo_card2 = document.createElement("h4");
    const pg_card = document.createElement("p");

    //---------------------------------------------//
    const concluir = document.createElement('button');
    concluir.innerText= 'Concluir';
    concluir.classList.add('concluir');
    
    concluir.addEventListener('click', function novatarefa(){
    alert('Parabéns por concluir a tarefa!')
        card.remove();
    })

    const apagar = document.createElement('button');
    apagar.innerText= 'X Deletar'
    apagar.classList.add('apagar');

    apagar.addEventListener('click', function novatarefa(){
    alert('Tarefa deletada!')
        card.remove();
    })
  //---------------------------------------------//

    titulo_card.innerText= nome_tarefa.value;
    titulo_card2.innerText='Descrição da Tarefa';
    pg_card.innerText=descricao.value;

    //---------------------------------------------//

    if (nome_tarefa.value == ''){
        alert('Coloque ao menos o nome da tarefa.')
    }

    else if (nome_tarefa.value != '' && descricao.value == ''){
        document.body.appendChild(card);
        card.classList.add('card2');
        card.appendChild(titulo_card);
        card.appendChild(concluir);
        card.appendChild(apagar);
        rodape.parentNode.insertBefore(card, rodape);
        formulario.style.display='none';
    }

    else if (nome_tarefa.value != ''){
        document.body.appendChild(card);
        card.classList.add('card');
        card.appendChild(titulo_card);
        card.appendChild(linha);
        card.appendChild(titulo_card2);
        card.appendChild(pg_card);
        card.appendChild(concluir);
        card.appendChild(apagar);
        rodape.parentNode.insertBefore(card, rodape);
        formulario.style.display='none';
    }
   
})

    //---------------------------------------------//

cnc.addEventListener('click', function cancelar(){
    formulario.style.display = 'none';
})

