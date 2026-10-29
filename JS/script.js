document.addEventListener('DOMContentLoaded', function() {
    const formInscricao = document.getElementById('formInscricao');
    const mensagemSucesso = document.getElementById('mensagemSucesso');
    const btnNovaInscricao = document.getElementById('btnNovaInscricao');

    if (formInscricao) {
        formInscricao.addEventListener('submit', function(event) {
            event.preventDefault();

            formInscricao.classList.add('d-none');

            mensagemSucesso.classList.remove('d-none');
        });
    }

    if (btnNovaInscricao) {
        btnNovaInscricao.addEventListener('click', function() {
            formInscricao.reset();

            mensagemSucesso.classList.add('d-none');

            formInscricao.classList.remove('d-none');
        });
    }
});