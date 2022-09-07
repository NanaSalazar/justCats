const urlBase = 'https://api.thecatapi.com/v1/images/search?limit=10'
const cat = document.querySelector('#cat')
const btn = document.querySelector('#btn')



function getCat() {
    try {
        fetch(urlBase)
        .then(response => response.json())
        .then(data => {
        console.log(typeof data)
        console.log(typeof data.url)
        for(i = 0; i <= data.length; i++) {
            
            cat.src = data[i].url
            cat.style = 'max-height: 300px'
            
        }
})
    } catch(e) {
        alert('Ops! Algo deu errado.')
    }
    
    
}

btn.addEventListener('click', getCat)
getCat()


