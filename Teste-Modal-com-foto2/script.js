// script.js
document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('documentModal');
    const fileInput = document.getElementById('fileInput');
    const previewArea = document.getElementById('previewArea');

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        previewArea.innerHTML = ''; // Limpa a área de pré-visualização
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            previewArea.innerHTML = ''; // Limpa a área de pré-visualização
        }
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const fileType = file.type;
                let preview;

                console.log(fileType)

                if (fileType.startsWith('image/')) {
                    preview = `<img src="${e.target.result}" alt="Documento Adicionado">`;
                } else if (fileType === 'application/pdf') {
                    preview = `<div class="icon">📄</div>`; // Aqui você pode usar uma imagem de ícone de PDF
                } else if (fileType === 'application/msword' || fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                    preview = `<div class="icon">📄</div>`; // Aqui você pode usar uma imagem de ícone de DOC
                } else {
                    preview = `<div class="icon">📄</div>`; // Para outros tipos de documentos
                }

                previewArea.innerHTML = preview;
            };
            reader.readAsDataURL(file);
        }
    });
});
