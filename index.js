const dialog = document.querySelector('dialog');
const showButton = document.querySelector('#btn-add');
const close = document.querySelector('#btn-close');

showButton.addEventListener('click', () => {
    dialog.showModal();
});

close.addEventListener('click', () => {
    dialog.close();
})