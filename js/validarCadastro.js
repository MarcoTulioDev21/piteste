document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        var idadeInput = document.getElementById('idade');
        var idade = parseInt(idadeInput.value);

        if (idade < 18) {
            alert('Você precisa ter pelo menos 18 anos para se cadastrar.');
            event.preventDefault(); // Evita que o formulário seja enviado
        }
    });
});