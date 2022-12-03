import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const response = await axios.get(
  `https://api.openweathermap.org/data/2.5/weather?q=${process.argv[2]}&appid=${process.env.KEY}`
);

console.clear();

console.log(`@@@@@@@@@@@@@@@@@@@
@ WEATHER PROGRAM @
@@@@@@@@@@@@@@@@@@@`);

console.log(
  `It is now ${(response.data.main.temp - 273.15).toFixed(2)}°C in ${
    response.data.name
  }`
);
console.log(
  `The current weather conditions are: ${response.data.weather[0].description}`
);

// console.log(response.data);
