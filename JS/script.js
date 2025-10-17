ntrf = document.getElementById('btn_tarefa');
formulario = document.getElementById('formulario');
formu_edit = document.getElementById('form_edit');
adc = document.getElementById('adc');
cnc = document.getElementById('cnc');
cnc2 = document.getElementById('cnc2');
nome_tarefa = document.getElementById('nome_tarefa');
nome_tarefa2 = document.getElementById('nome_tarefa2');
descricao = document.getElementById('descricao');
rodape = document.getElementById('rodape');
adc_nova = document.getElementById('adc_nova');
alt = document.getElementById('alt');
    //---------------------------------------------//

ntrf.addEventListener('click', function novatarefa(){
    adc_nova.innerText = 'Adicionar nova tarefa:';
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

    titulo_card.innerText= nome_tarefa.value;
    titulo_card2.innerText='Descrição da Tarefa';
    pg_card.innerText=descricao.value;

    //---------------------------------------------//
    const concluir = document.createElement('button');
    concluir.innerText= 'Concluir';
    concluir.classList.add('concluir');
    
    concluir.addEventListener('click', function novatarefa(){
        alert('Parabéns por concluir a tarefa!');
        card.remove();
    })

    const editar = document.createElement('button');
    editar.innerText= 'Editar'
    editar.classList.add('editar');
    
    editar.addEventListener('click', function novatarefa(){
        form_edit.style.display = 'block';
    })

    alt.addEventListener('click', function editar(){
        titulo_card.innerText = nome_tarefa2.value
        form_edit.style.display = 'none';
    })


    const apagar = document.createElement('button');
    apagar.innerText= 'Deletar'
    apagar.classList.add('apagar');

    apagar.addEventListener('click', function novatarefa(){
    alert('Tarefa deletada!')
        card.remove();
    })

    
  //---------------------------------------------//

    //---------------------------------------------//

    if (nome_tarefa.value == ''){
        alert('Coloque ao menos o nome da tarefa.')
    }

    else if (nome_tarefa.value != '' && descricao.value == ''){
        document.body.appendChild(card);
        card.classList.add('card2');
        card.appendChild(titulo_card);
        card.appendChild(concluir);
        card.appendChild(editar);
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
        card.appendChild(editar);
        card.appendChild(apagar);
        rodape.parentNode.insertBefore(card, rodape);
        formulario.style.display='none';
    }
   
})

//---------------------------------------------//



cnc.addEventListener('click', function cancelar(){
    formulario.style.display = 'none';
})

cnc2.addEventListener('click', function cancelar(){
    form_edit.style.display = 'none';
})