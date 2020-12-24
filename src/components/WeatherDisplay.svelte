<script>
  import { formatDistanceToNow } from "date-fns";
  import {
    getIcon,
    convertKelvinToFahrenheit,
  } from "../components/utils.svelte";

  /**
   * @type {WeatherData}
   */
  export let weatherDataInstance;

  const {
    dt: timestamp,
    temp,
    feels_like,
    weather,
    humidity,
    pop,
  } = weatherDataInstance;

  const { icon, id } = weather[0];

  const timeOfDay = icon.endsWith("n") ? "night" : "day";

  const myTemp = `${convertKelvinToFahrenheit(feels_like)} \xB0F`;

  const imgSrc = getIcon(icon);
</script>

<div>
  <!-- <img src={imgSrc} alt="" style="vertical-align: middle; width: 100px; height: 100px;" /> -->
  <span class={`wi wi-owm-${timeOfDay}-${id}`} style="font-size: 48px;" />
  <span style="font-size: 32px;">{myTemp}</span>
  <p>
    {formatDistanceToNow(new Date(timestamp * 1000), { addSuffix: true })}
    <br />
    Humidity: {humidity}%
    <br />
    Chance of Rain: {pop * 100}%
  </p>
</div>
