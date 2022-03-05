// baseURL declration
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
// declration API key 
const apiKey = ',us&appid=2552b7be25c65f606cd45b1556d0ba87&units=metric'; // Personal API Key for OpenWeatherMap API
/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
// add 1 to getMonth() because it count month from 0 t0 11
let newDate = d.getMonth() + 1 +'.'+ d.getDate()+'.'+ d.getFullYear();
// declare generateBtn
let generateBtn = document.getElementById("generate");
// Event listener to add function to existing HTML DOM element
generateBtn.addEventListener("click", executionBtn);
// post data in api
// Function called by event listener
function executionBtn(e) {
  //  input value to zip code and feeling 
  const zipCode = document.getElementById('zip').Value;
  const content = document.getElementById('feelings').Value;
  console.log(newDate);
     getWeather(baseURL, zipCode, apiKey)
        .then((data) => {
          console.log(data);
          postWeather('/addData',{ date:newDate, temp:data.main.temp, content: content});
         })
         // Call function to Get data and update UI
         .then(function(){
          updateUI()})
         //.then(() => updateUI()); 
        };
 /* GET web API Data */
  const getWeather = async(baseURL, zipCode, apiKey)=>{
   // fetch API to retrieve the current weather data for the users zip code
   const res = await fetch(baseURL+zipCode+apiKey)
   try {
      const data = await res.json();
      console.log(data)
      return data;
   }  
   catch(error) {
      //to display error
      console.log('error', error);
   }
}
// POST Request - Function to post data and save data in server
const postWeather = async ( url = ' ', data = {})=>{
  console.log(data);
    const res = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin',
      headers: { 
        'Content-Type': 'application/json' 
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
       // Body data type must match "Content-Type" header        
       body: JSON.stringify(data),
  });
  try {
    const newData = await res.json;
    console.log(newData);
    return newData;
  }
  catch(error) {
    //to display error
  console.log("error", error);
  }
}
/* test post -> */
// postWeatherTest('/add', {date:'today', temp:'35',feeling: 'hot' });
// Function to get data from server and update UI
const updateUI = async() => {
  const req = await fetch('/all');
  try {
    // Transform data into JSON
    const allData = await req.json()
    console.log(allData);
          // updating the ui with date
          document.getElementById('date').innerHTML = `The Date Is: ${allData.date}`;
          // updating the ui with temp
          document.getElementById('temp').innerHTML = `The Temperture Is: ${allData.temp}`;
          // updating the ui with felling          
          document.getElementById('content').innerHTML = `you Feel : ${allData.content}`;
  } catch (error) {
      //to display error
      console.log('error', error);
  }
}
 