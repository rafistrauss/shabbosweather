<script>
  import {
    getIcon,
    convertKelvinToFahrenheit,
  } from "./utils.svelte";
  import { formatDistanceToNow, lightFormat } from "date-fns";

  /**
   * @type {CurrentWeather}
   */
  export let current;
  const { feels_like: temp, dt: timestamp, weather, humidity } = current;

  const { icon, id } = weather[0];

  const timeOfDay = icon.endsWith("n") ? "night" : "day";

  const myTemp = `${convertKelvinToFahrenheit(temp)} \xB0F`;

  const imgSrc = getIcon(icon);

  const date = new Date();
  const formattedTime = lightFormat(timestamp * 1000, "h:mm aaa");
</script>

<!-- <WeatherDisplay temp={temp} timestamp={timestamp} icon={icon} /> -->
<div>
  <!-- <img src={imgSrc} alt="" style="vertical-align: middle; width: 100px; height: 100px;" /> -->
  <span class={`wi wi-owm-${timeOfDay}-${id}`} style="font-size: 48px;" />
  <span style="font-size: 48px; margin-right: 1em;">{myTemp}</span>
  <p style="display: inline-block;">
    {formattedTime}
    <br />
    Humidity: {humidity}%
  </p>
</div>
