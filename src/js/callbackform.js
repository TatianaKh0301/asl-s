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

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert("Error PHP server");
            }
        } else {
            alert('Please, fill in required fields');
            form.classList.remove('_sending');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)){
                    formAddError(input);
                    error++;
                }
            } else  if (phoneTest(input)){
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    function phoneTest(input) {
        return !/[0-9]{3}[-][0-9]{2}[-][0-9]{2}/.test(input.value);
    }
});