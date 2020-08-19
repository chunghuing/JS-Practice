
const getElemt = (el) => {
    return document.querySelector(el)
};

// #45
getElemt('.google').addEventListener('click', (e) => {
    let url = 'https://www.google.com/'
    // window.open(url) // 另開新分頁
    location.assign(url)
})
getElemt('.yahoo').addEventListener('click', (e) => {
    let url = 'https://tw.yahoo.com/'
    location.assign(url)
})