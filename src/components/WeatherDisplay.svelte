<script>
  import { formatDistanceToNow } from "date-fns";
  import {
    getIcon,
    convertKelvinToFahrenheit,
  } from "../components/utils.svelte";

  export let weatherDataInstance;

  const {
    dt: timestamp,
    temp,
    feels_like,
    weather,
    humidity,
  } = weatherDataInstance;

  const { icon } = weather[0];

  const myTemp = `${convertKelvinToFahrenheit(feels_like)} \xB0F`;

  const imgSrc = getIcon(icon);
</script>

<div>
  <img src={imgSrc} alt="" style="vertical-align: middle;" />
  <span style="font-size: 32px;">{myTemp}</span>
  <p>
    {formatDistanceToNow(new Date(timestamp * 1000), { addSuffix: true })}
    <br />
    Humidity: {humidity}%
  </p>
</div>
