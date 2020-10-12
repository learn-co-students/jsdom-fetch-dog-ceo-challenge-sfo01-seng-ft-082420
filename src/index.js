let dogImage = document.querySelector('#dog-image-container')
let dogList = document.querySelector('ul')
let select = document.querySelector('select')
let dogBreeds = []

select.addEventListener('change', (e) => handleFilter(e, dogBreeds))

//Server Communication

const fetchDogs = () => {
fetch('https://dog.ceo/api/breeds/image/random/4')
.then(res => res.json())
.then(dogs => dogs.message.forEach(dog => buildImages(dog)))
}
fetchDogs()

const fetchBreeds = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(breeds => {
        let dogBreedsTemp = Object.keys(breeds.message)
        dogBreedsTemp.forEach(breed =>buildLi(breed))
        dogBreeds = dogBreedsTemp
    })
}
    fetchBreeds()
    fetchDogs()

//Handlers

function handleFilter(e, breeds){
    let filterDogs = breeds.filter(dog => dog[0] == e.target.value)
    dogList.innerHTML = ''
    filterDogs.forEach(dog => buildLi(dog))
    
}



//Builds Dom items    

const buildImages= (dog) => {
    let img = document.createElement('img')
    img.src = dog
    img.style = 'width: 150px'
    dogImage.appendChild(img)
    console.log(img)
}

const buildLi = (breed) => {
    let li = document.createElement('li')
    li.textContent = breed
    li.id = breed

    dogList.appendChild(li)
    
    li.addEventListener('click', () => li.style='color:red')
}

