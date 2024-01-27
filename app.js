const SUPERHERO_TOKEN = '2084611028579258'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`


function randomSuperHero(){
const randomSuperHero = () => {
    return Math.floor(Math.random() *731) + 1
}


const getSuperHero = (id,name) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        const name = `<h2>${json.name}</h2>`
       document.querySelector('body').innerHTML +=`${name}<img src="${json.image.url}" height= 300 width=300>`
       const powerStats = `<h3>power:${json.powerstats.power}</h3>`
       document.querySelector('body').innerHTML += powerStats

        console.log(json)
    })

}	
getSuperHero(randomSuperHero())
}

const searchInput = document.getElementById("search-hero")

function getSearchSuperHero(){
const searchSuperHero = (name) =>{
    console.log(searchInput.value)

    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        
        const hero = json.results[0]
        document.querySelector('body').innerHTML +=`<img src="${hero.image.url}" height= 300 width=300>`

    })

    
}
searchSuperHero(searchInput.value)

}



