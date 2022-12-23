const url = 'https://www.themoviedb.org/movie/76600-avatar-the-way-of-water'

const btn = document.querySelector('#btn2')

function openInNewtab(url) {
    const win = window.open(url,'_blank')
    win.focus()
}

btn.addEventListener('click', () => {
    openInNewtab(url)
})