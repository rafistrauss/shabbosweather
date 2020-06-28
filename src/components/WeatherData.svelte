<script>
    export let latitude;
    export let longitude;

    import WeatherDisplay from './WeatherDisplay.svelte';
    import CurrentWeather from './CurrentWeather.svelte';
    import DailyWeather from './DailyWeather.svelte';
    if (typeof fetch !== "function") {
        fetch = require('node-fetch');
    }

    import { apiKey, convertKelvinToFahrenheit, zip } from './utils.svelte'

    // const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`
    // const url = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=${apiKey}`

    console.log('In WeatherData');

    async function getWeatherData() {

        if (!(latitude && longitude)) {
            return null;
        }

        const part = 'minutely';
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${part}&appid=${apiKey}`


        const res = await fetch(url);
        const json = await res.json();

        const { current, daily, hourly } = json;
        console.log("getWeatherData -> json", json)




        const newHourly = hourly.slice(2, 5);

        const newDaily = daily.slice(1, 5);

        return { current, daily: newDaily, hourly: newHourly };


        // const { main: { feels_like } } = json;
        // // return json;
        // // return JSON.stringify(json);
        // return `${convertKelvinToFahrenheit(feels_like)}\xB0 F`;

    }

    let promise = getWeatherData();
</script>

<style>
    .hourlyData,
    .dailyData {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
    }
</style>

{#await promise}
    <p>Waiting</p>
    {:then weatherData}
    {#if weatherData}
    
        <CurrentWeather current={weatherData.current} />
        <div class="hourlyData">
            {#each weatherData.hourly as weatherObject}
            <WeatherDisplay weatherDataInstance={weatherObject} />
            {/each}
        </div>
        <div class="dailyData">
            {#each weatherData.daily as weatherObject}
            <DailyWeather weatherDataInstance={weatherObject} />
            {/each}
        </div>
        {/if}
    {:catch error}
    <p style="color: red">{error.message}</p>
{/await}
