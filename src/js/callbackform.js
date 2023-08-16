(() => {
    const refsModalCallback = {
        openModalCallbackBtn: document.querySelector('.modal-open-btn'),
        closeModalCallbackBtn: document.querySelector('.modal-close-btn'),
        modalCallback: document.querySelector('.backdrop-send-form'),
        body: document.querySelector('body'),
    };

    const { openModalCallbackBtn, closeModalCallbackBtn, modalCallback, body, form } =
    refsModalCallback;
    openModalCallbackBtn.addEventListener('click', onOpenModalCallbackBtn);
    closeModalCallbackBtn.addEventListener('click', onCloseModalCallbackBtn);
    modalCallback.addEventListener('click', onBackdropCallbackClick);

    function onCloseModalCallbackBtn(e) {
        modalCallback.classList.toggle('is-hidden');
        body.classList.toggle('no-scroll');
        window.removeEventListener('keydown', onEscKeyPress);
    }

    function onOpenModalCallbackBtn(e) {
        window.addEventListener('keydown', onEscKeyPress);
        modalCallback.classList.toggle('is-hidden');
        body.classList.toggle('no-scroll');
    }

    function onEscKeyPress(e) {
        if (e.key === 'Escape') {
            onCloseModalCallbackBtn();
        }
    }

    function onBackdropCallbackClick(e) {
        if (e.currentTarget === e.target) {
            onCloseModalCallbackBtn();
        }
    }
})();