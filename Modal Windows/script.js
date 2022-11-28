'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelectorAll('.show-modal')

const showModals = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const hideModals = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for (let i = 0; i < btnOpenModal.length ; i++) {
    btnOpenModal[i].addEventListener('click', showModals)
}

btnCloseModal.addEventListener('click', hideModals)
overlay.addEventListener('click', hideModals)

// looking for events everywhere
document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        // we want to close the modal only if it is open
        if(!modal.classList.contains('hidden'))
            // it is obligatory to call the function here!
            hideModals()
    }
})