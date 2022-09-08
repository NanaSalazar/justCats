const urlBase = 'https://api.thecatapi.com/v1/images/search?limit=1'
const cat = document.querySelector('#cat')
const btn = document.querySelector('#btn')



function getCat() {
    try {
        fetch(urlBase)
        .then(response => response.json())
        .then(data => {
            
        for(let value of data) {
            console.log(data)
            cat.src = value.url
            cat.style = 'max-height: 300px'
            
        }
})
    } catch(e) {
        alert('Ops! Algo deu errado.')
    }
    
    
}

btn.addEventListener('click', getCat)
getCat()


