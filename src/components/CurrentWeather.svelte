<script>
  import {
    getIcon,
    convertKelvinToFahrenheit,
  } from "../components/utils.svelte";
  import { formatDistanceToNow, lightFormat } from "date-fns";

  export let current;
  const { feels_like: temp, dt: timestamp, weather, humidity } = current;
  console.log(timestamp);
  const { icon } = weather[0];

  const myTemp = `${convertKelvinToFahrenheit(temp)} \xB0F`;

  const imgSrc = getIcon(icon);

  const date = new Date();
  const formattedTime = lightFormat(timestamp * 1000, "h:mm aaa");
</script>

<!-- <WeatherDisplay temp={temp} timestamp={timestamp} icon={icon} /> -->
<div>
  <img src={imgSrc} alt="" style="vertical-align: middle;" />
  <span style="font-size: 48px; margin-right: 1em;">{myTemp}</span>
  <p style="display: inline-block;">
    {formattedTime}
    <br />
    Humidity: {humidity}%
  </p>
</div>
