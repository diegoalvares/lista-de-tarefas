ntrf = document.getElementById('btn_tarefa');
formulario = document.getElementById('formulario');
formu_edit = document.getElementById('form_edit');
adc = document.getElementById('adc');
cnc = document.getElementById('cnc');
cnc2 = document.getElementById('cnc2');
nome_tarefa = document.getElementById('nome_tarefa');
nome_tarefa2 = document.getElementById('nome_tarefa2');
descricao = document.getElementById('descricao');
descricao2 = document.getElementById('descricao2');
rodape = document.getElementById('rodape');
adc_nova = document.getElementById('adc_nova');
alt = document.getElementById('alt');
let titulo_em_ed = null
let desc_em_ed = null
let titulo_desc = null
let linha_desc = null
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

    titulo_card.textContent= nome_tarefa.value;
    titulo_card2.innerText='Descrição da Tarefa:';
    pg_card.textContent=descricao.value;

    //---------------------------------------------//
    const concluir = document.createElement('button');
    concluir.innerText= 'Concluir';
    concluir.classList.add('concluir');
    
    concluir.addEventListener('click', function(){
        alert('Parabéns por concluir a tarefa!');
        card.remove();
    })

    const editar = document.createElement('button');
    editar.innerText= 'Editar'
    editar.classList.add('editar');
    
    editar.addEventListener('click', function (e){
        e.preventDefault();
        form_edit.style.display = 'block';
        nome_tarefa2.value = titulo_card.textContent;
        descricao2.value = pg_card.textContent;
        titulo_em_ed = titulo_card;
        titulo_desc = titulo_card2;
        linha_desc = linha;
        desc_em_ed = pg_card;
    })


    const apagar = document.createElement('button');
    apagar.innerText= 'Deletar'
    apagar.classList.add('apagar');

    apagar.addEventListener('click', function (){
    alert('Tarefa deletada!')
        card.remove();
    })

    
  //---------------------------------------------//

    //---------------------------------------------//

    if (nome_tarefa.value == '' || nome_tarefa.value == '' && descricao.value != ''){
        alert('Coloque ao menos o nome da tarefa.')
    }

    else if (nome_tarefa.value != '' && descricao.value == ''){
        document.body.appendChild(card);
        card.classList.add('card');
        card.appendChild(titulo_card);
        card.appendChild(linha);
        card.appendChild(titulo_card2);
        card.appendChild(pg_card);
        linha.style.display = 'none';
        titulo_card2.style.display = 'none';
        pg_card.style.display = 'none';
        card.appendChild(concluir);
        card.appendChild(editar);
        card.appendChild(apagar);
        rodape.parentNode.insertBefore(card, rodape);
        formulario.style.display='none';
    }

    else if (nome_tarefa.value != '' && descricao.value != ''){
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


alt.addEventListener('click', function (e) {

    if (nome_tarefa2.value == '' || nome_tarefa2.value == '' && descricao2.value !== ''){
        alert('Coloque ao menos o nome da tarefa.')
    }

    else if (nome_tarefa2.value !== '' && descricao2.value == '') {
        e.preventDefault();
        titulo_em_ed.textContent = nome_tarefa2.value;
        linha_desc.style.display='none';
        titulo_desc.style.display='none';
        desc_em_ed.style.display = 'none';
        desc_em_ed.textContent = descricao2.value;
        form_edit.style.display = 'none';
        titulo_em_ed = null;
        titulo_desc=null;
        linha_desc = null;
    }

    else if (nome_tarefa2.value != '' && descricao2.value != '') {
        e.preventDefault();
        titulo_em_ed.textContent = nome_tarefa2.value;
        linha_desc.style.display='block';
        titulo_desc.style.display='block';
        desc_em_ed.style.display = 'block';
        desc_em_ed.textContent = descricao2.value;

        if (titulo_em_ed.parentNode.classList.contains('card2')) {
            titulo_em_ed.parentNode.classList.remove('card2');
            titulo_em_ed.parentNode.classList.add('card');
        }

        form_edit.style.display = 'none';
        titulo_em_ed = null;
        titulo_desc=null;
        linha_desc = null;
    }
});


cnc.addEventListener('click', function cancelar(){
    formulario.style.display = 'none';
})

cnc2.addEventListener('click', function cancelar(){
    form_edit.style.display = 'none';
})

