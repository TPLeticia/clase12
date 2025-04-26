
//const url = 'https://futuramaapi.com/api/characters/{character_id}';
const url = 'https://futuramaapi.com/api/characters/1'; // Replace with your API endpoint

fetch(url)
.then(response => {
    if(!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
})
.then((data) => {
    console.log(data); // Handle the data from the API
})  
.catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
})