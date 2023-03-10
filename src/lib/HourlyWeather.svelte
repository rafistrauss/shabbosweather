<script>
  import { formatDistanceToNow } from "date-fns";
  
  /**
   * @type {hourly}
   */
  export let weatherDataInstance;

  const {
    dt: timestamp,
    feels_like,
    weather,
    humidity,
    pop,
    wind_speed
  } = weatherDataInstance;

  const { icon, id } = weather[0];

  const timeOfDay = icon.endsWith("n") ? "night" : "day";

  const temperature = `${Math.round(feels_like)} \xB0F`;

</script>

<div>
  <span class={`wi wi-owm-${timeOfDay}-${id}`} style="font-size: 48px;" />
  <span style="font-size: 32px;">{temperature}</span>
  <p>
    {formatDistanceToNow(new Date(timestamp * 1000), { addSuffix: true })}
    <br />
    Humidity: {humidity}%
    <br />
    Chance of Rain: {pop * 100}%
    <br />
    Wind: {Math.round(wind_speed)}mph
  </p>
</div>
