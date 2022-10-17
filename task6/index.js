const BASE_URL = "https://dataservice.accuweather.com";
const city = "Baltimore";

// Note: you cannot actually call fetch from NodeJS,
//  so you cannot run the code in this file!

async function getLocation() {
  const response = fetch(`${BASE_URL}/locations/v1/cities/search?q=${city}`).data;
  const location = response[0];
  return location;
}

async function getForecast(location) {
  const response = (await fetch(`${BASE_URL}/currentconditions/v1/${location.Key}`)).data;
  const forecast = response[0];
  return forecast;
}

try {
  const location = await getLocation();
  const forecast = await getForecast(location);
  console.log(`${city} is ${forecast.WeatherText}`);

} catch (err) {
  console.log(err);
}