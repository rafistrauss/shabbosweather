<script>
  import { format } from "date-fns";
  import {
    getIcon,
    convertKelvinToFahrenheit,
  } from "./utils.svelte";

  /**
   * @type {WeatherData}
   */
  export let weatherDataInstance;
  // export let temp, timestamp, icon;

  const {
    dt: timestamp,
    temp,
    feels_like,
    weather,
    humidity,
    rain,
    pop,
  } = weatherDataInstance;

  const { icon, id } = weather[0];

  const timeOfDay = icon.endsWith("n") ? "night" : "day";

  const { day: day_feels_like } = feels_like;

  // const { main: { feels_like }, weather } = data;
  // return JSON.stringify(json);
  const myTemp = `${convertKelvinToFahrenheit(day_feels_like)} \xB0F`;

  const imgSrc = getIcon(icon);
</script>

<div>
  <!-- <img src={imgSrc} alt="" style="vertical-align: middle; width: 100px; height: 100px;" /> -->
  <span class={`wi wi-owm-${timeOfDay}-${id}`} style="font-size: 48px;" />
  <span style="font-size: 24px;">{myTemp}</span>
  <p>
    {format(new Date(timestamp * 1000), 'EEEE')}
    <br />
    Humidity: {humidity}%
    <br />
    Chance of Rain: {pop * 100}%
  </p>
</div>
