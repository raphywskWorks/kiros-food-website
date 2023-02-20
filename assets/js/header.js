const header = document.querySelector('.primary-header')
const headerMustAppears = 50;
let lastScroll = 0

window.addEventListener('scroll', e => {
    const position = window.scrollY
    if( position < lastScroll && position > headerMustAppears ) {
        showHeaderOnScrollUp()
        lastScroll = position
        return
    }

    showHeaderOnTop()
    lastScroll = position
})

const showHeaderOnTop = () => {
    header.classList.remove('header-on-scroll')
    header.classList.add('header-on-top')
}

const showHeaderOnScrollUp = () => {
    header.classList.remove('header-on-top')
    header.classList.add('header-on-scroll')
}
