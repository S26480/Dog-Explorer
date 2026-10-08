// API endpoint for fetching a random dog image

const api_base_url="https://dog.ceo/api/breeds/image/random";

// Select the dog image element from the HTML
const dogImage=document.querySelector(".dog-image");

// Select the fetch button from the HTML
const fetchButton=document.querySelector(".fetch-button");

// Function to fetch and display a random dog
async function fetchDogExplorer(){
    try{

        // Send a request to the Dog CEO API
        const response=await fetch(api_base_url);

        // Check whether the API request was successful
        if (!response.ok){
            throw new Error("Failed to fetch dog image");
        }

        // Convert the JSON response into a JavaScript object
        const data= await response.json();

        // Display the dog image returned by the API
        dogImage.src=data.message;
    }
    catch(error){

        // Display the error in the browser console
        console.log(error);
    }
}

// Fetch a new dog whenever the button is clicked
fetchButton.addEventListener("click", fetchDogExplorer);

// Fetch and display a dog when the page loads
fetchDogExplorer();
