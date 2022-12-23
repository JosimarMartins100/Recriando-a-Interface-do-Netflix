const url = 'https://www.youtube.com/watch?v=x5pZI-DmtrE'

const btn = document.querySelector('#btn1')

function openInNewtab(url) {
    const win = window.open(url,'_blank')
    win.focus()
}

btn.addEventListener('click', () => {
    openInNewtab(url)
})



