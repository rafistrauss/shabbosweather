<script>
  import WeatherDisplay from "./WeatherDisplay.svelte";
  import CurrentWeather from "./CurrentWeather.svelte";
  import DailyWeather from "./DailyWeather.svelte";

  export let current, hourly, daily;
</script>

<style>
  .hourlyData,
  .dailyData {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
</style>

<CurrentWeather {current} />
<div class="hourlyData">
  {#each hourly as weatherDataInstance}
    <WeatherDisplay {weatherDataInstance} />
  {/each}
</div>
<div class="dailyData">
  {#each daily as weatherDataInstance}
    <DailyWeather {weatherDataInstance} />
  {/each}
</div>
