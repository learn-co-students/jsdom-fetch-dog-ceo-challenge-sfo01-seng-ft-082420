console.log('%c HI', 'color: firebrick')

let dogImage = document.querySelector('#dog-image-container')
let dogList = document.querySelector('#dog-breeds')
let select = document.querySelector('#breed-dropdown')
let dogBreeds = []


select.addEventListener('change', (e) => handleFilter(e, dogBreeds))

// Fetch 
function fetchDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(res => res.json())
        .then(dogs => dogs.message.forEach(dog => buildImage(dog)))
}

const fetchBreeds = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(breeds => {
            let dogBreedsTemp = Object.keys(breeds.message)
            dogBreedsTemp.forEach(breed => buildLi(breed))
            dogBreeds = dogBreedsTemp
        })
}

fetchBreeds()
fetchDogs()

// Handlers
function handleFilter(e, breeds) {
    let filterDogs = breeds.filter(dog => dog.charAt(0) == e.target.value)
    dogList.innerHTML = ''
    filterDogs.forEach(dog => buildLi(dog))
}

// DOM Events
const buildImage = (dog) => {
    let img = document.createElement('img')
    img.src = dog

    dogImage.appendChild(img)
    img.style = 'width: 250px'
}

const buildLi = (breed) => {
    let li = document.createElement('li')
    li.textContent = breed
    li.id = breed
    dogList.appendChild(li)

    li.addEventListener('click', () => li.style = 'color:red')
}