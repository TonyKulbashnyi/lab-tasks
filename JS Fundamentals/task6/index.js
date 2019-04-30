const open = document.querySelector('.site_button');
const aside = document.querySelector('.site_window');
const close = document.querySelector('.site_close');

open.addEventListener('click', function () {
    open.classList.add('hidden');
    aside.classList.remove('hidden');
});

close.addEventListener('click', function () {
    open.classList.remove('hidden');
    aside.classList.add('hidden');
});
