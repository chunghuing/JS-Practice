const getElemt = (el) => {
    return document.querySelector(el)
};

// #46-1
const hexSchool = 'https://www.hexschool.com/'
const Tom = getElemt('.Tom')
const John = getElemt('.John')
function getDataId (item){
    return item.getAttribute('data-id')
}
Tom.addEventListener('click', function(){
    location.href = `${hexSchool}?recommend=${getDataId(Tom)}`
})
John.addEventListener('click', function(){
    location.href = `${hexSchool}?recommend=${getDataId(John)}`
})

// #46-2
getElemt('#addCmd').addEventListener('click', () => {
    location.href = location.pathname + `?recommend=Tom`
})
getElemt('#getValue').addEventListener('click', () => {
   const str = location.search.split('?recommend=')[1]
   getElemt('.ans46').innerHTML = str
})