document.addEventListener('DOMContentLoaded', () => {
    const passos = document.querySelectorAll('.passo');
    const buttons = document.querySelectorAll('.btn-proximo');

    function mostrarPasso(id) {
        passos.forEach(passo => {
            passo.classList.remove('ativo');
            if (passo.id === `passo-${id}`) {
                passo.classList.add('ativo');
            }
        });
    }
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const proximo = button.getAttribute('data-proximo');
            mostrarPasso(proximo);
        });
    });
});
