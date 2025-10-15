ntrf = document.getElementById('btn_tarefa');
formulario = document.getElementById('formulario');
adc = document.getElementById('adc');
cnc = document.getElementById('cnc');

ntrf.addEventListener('click', function novatarefa(){
    formulario.style.display = 'block';
})

adc.addEventListener('click', function adicionar(){
    formulario.style.display = 'none';
})


cnc.addEventListener('click', function cancelar(){
    formulario.style.display = 'none';
})

