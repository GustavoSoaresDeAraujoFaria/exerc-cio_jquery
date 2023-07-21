$(document).ready(function() {
    $('#form-lista').on('submit', function(e){
        e.preventDefault();
        const tarefaColada = $('#Tarefa').val();
        const novaTarefa = $(`<td>${tarefaColada}</td>`);
        const novaLinha = $('<tr>').append(novaTarefa);
        $('#tabela-corpo').append(novaLinha);
        $('#Tarefa').val('');
    });

    $('#tabela-corpo').on('click', 'td', function(){
        $(this).css('text-decoration', 'line-through');
    });
});

