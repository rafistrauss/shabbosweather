<script>
  import { onMount } from "svelte";
  import WeatherData from "../components/WeatherData.svelte";
  import TempWeatherData from "../components/TempWeatherData.svelte";
  import { latitude, longitude } from "../components/stores.js";

  import { version } from "../../package.json";

  onMount(async () => {
    console.debug("Mounted index");

    latitude.set(localStorage.getItem("latitude"));
    longitude.set(localStorage.getItem("longitude"));

    function success(position) {
      console.debug("geolocation succcess");
      latitude.set(position.coords.latitude);
      longitude.set(position.coords.longitude);
      localStorage.setItem("latitude", position.coords.latitude);
      localStorage.setItem("longitude", position.coords.longitude);
    }

    function error(err) {
      console.error(err);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  });
</script>

<style>
  .grid {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;
  }
</style>

<svelte:head>
  <title>Weather</title>
</svelte:head>
{#if $latitude && $longitude}
  <div class="grid">
    <WeatherData latitude={$latitude} longitude={$longitude} />
  </div>
{:else}
  <p>SSR Here</p>
{/if}
<h2>Weather v{version}:</h2>
