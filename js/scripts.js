const header = document.querySelector('.header')
const navList = document.querySelector('.nav__list')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('#modal__close')

const handlerHeader = (e) => {
    if (e.target.id === 'hamburger-menu'){
        console.log(navList)
        navList.classList.toggle('open')
    }
}

const handlerModal = (e) => {
    if (e.target.id === 'modal__close'){
        modal.classList.add('hide-modal')
    }
}



modal.addEventListener('click', handlerModal)
header.addEventListener('click', handlerHeader)
window.addEventListener('load', (e) => {
    setTimeout(() => {
        modal.classList.remove('hide-modal')
    }, 1000)
})