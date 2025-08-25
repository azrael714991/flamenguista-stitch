ocument.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const galleryImages = document.querySelectorAll('.gallery-img');
    const closeBtn = document.querySelector('.close-btn');

    // Abre o modal ao clicar em uma imagem da galeria
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
        });
    });

    // Fecha o modal ao clicar no botão 'x'
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fecha o modal ao clicar fora da imagem
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});