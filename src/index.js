console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const allBreeds = []
fetchDogs()
fetchBreeds()

    function fetchDogs(){
        fetch(imgUrl)
            .then(res => res.json())
            .then(data => processImages(data))
    }

    function processImages(data){
        imageContainer = document.getElementById('dog-image-container');
        data['message'].forEach(image => {
            let imageTag = document.createElement('img');
            imageTag.src = image;
            imageContainer.appendChild(imageTag)
        })
    }

    function fetchBreeds(){
        fetch(breedUrl)
            .then(res => res.json())
            .then(data => {
                for (const breed in data.message) {
                    allBreeds.push(breed)
                }
                processBreeds(allBreeds)
            })
    }

    function processBreeds(data){
        let breedContainer = document.getElementById('dog-breeds')
        breedContainer.innerHTML = ""
        data.forEach(breed => {
            let li = document.createElement('li')
            li.innerText = breed
            li.addEventListener('click', (e) => e.target.style= "color:firebrick")
            breedContainer.appendChild(li)
        })
    }

    const breedDropdown = document.getElementById('breed-dropdown')
    breedDropdown.addEventListener('change', (e) => {
        let letter = e.target.value
        processBreeds(allbreeds)
        let filteredBreeds = allBreeds.filter(breed => breed.charAt(0) == letter)
        processBreeds(filteredBreeds)
    })
