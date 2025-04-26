
import axios from 'axios'

//const url = 'https://futuramaapi.com/api/characters/{character_id}';
const url = 'https://futuramaapi.com/api/characters/1'; // Replace with your API endpoint

axios.get(url)
.then(response => {
  // Handle the response data
  console.log(response.data);
})
.catch(error => {
  // Handle any errors
  console.error('Error fetching data:', error);
}); 