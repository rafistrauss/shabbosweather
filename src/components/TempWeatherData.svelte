<script>
  import {
    apiKey,
    zip,
    getIcon,
    convertKelvinToFahrenheit,
  } from "../components/utils.svelte";

  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`;

  const {
    main: { feels_like },
    weather,
  } = data;
  // return JSON.stringify(json);
  const display = `${convertKelvinToFahrenheit(feels_like)} \xB0F`;

  // const asdf = JSON.stringify(data)
  const mainWeather = weather[0].icon;

  const imgSrc = getIcon(mainWeather);

  let promise = getWeatherData();

  async function getWeatherData() {
    const res = await fetch(url);
    const json = await res.json();

    // const { main: { feels_like } } = json;
    return json;
    // // return JSON.stringify(json);
    // return `${convertKelvinToFahrenheit(feels_like)}\xB0 F`;
  }
</script>

{#await promise}
  <p>Waiting</p>
{:then list}
  <img src={imgSrc} alt="" />
  <span style="font-size: 48px;">{display}</span>

{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
