<script>
    export let latitude;
    export let longitude;

    import WeatherDisplay from './WeatherDisplay.svelte';
    import CurrentWeather from './CurrentWeather.svelte';
    import DailyWeather from './DailyWeather.svelte';
    import Encapsulator from './Encapsulator.svelte';

    let cachedWeather = localStorage.getItem('cachedWeather');
    let cachedCurrent, cachedHourly, cachedDaily;

    let promise;

    if (cachedWeather) {
        console.debug('In cachedWeather if statement');
        const cachedWeatherObj = JSON.parse(cachedWeather);
        cachedCurrent = cachedWeatherObj.current;
        cachedHourly = cachedWeatherObj.hourly;
        cachedDaily = cachedWeatherObj.daily;
    }

    if (typeof fetch !== "function") {
        fetch = require('node-fetch');
    }

    import { apiKey, convertKelvinToFahrenheit, zip } from './utils.svelte'

    // const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`
    // const url = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=${apiKey}`

    async function getWeatherData() {

        if (!(latitude && longitude)) {
            return null;
        }

        const part = 'minutely';
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${part}&appid=${apiKey}`
        // const url = `https://example.com`;


        const res = await fetch(url);
        const json = await res.json();

        const { current, daily, hourly } = json;




        const newHourly = hourly.slice(2, 5);

        const newDaily = daily.slice(1, 5);

        const weatherObject = { current, daily: newDaily, hourly: newHourly };

        localStorage.setItem('cachedWeather', JSON.stringify(weatherObject));

        return weatherObject;


        // const { main: { feels_like } } = json;
        // // return json;
        // // return JSON.stringify(json);
        // return `${convertKelvinToFahrenheit(feels_like)}\xB0 F`;

    }

    promise = getWeatherData();
    setInterval(() => {
        promise = getWeatherData();
    }, 1000 * 60 * 5)

</script>


{#await promise}
    {#if cachedCurrent}
        <Encapsulator isCached current={cachedCurrent} hourly={cachedHourly} daily={cachedDaily} />
    {:else}
        No cached weather data: waiting
    {/if}
    {:then weatherData}
        {#if weatherData}
            <Encapsulator current={weatherData.current} hourly={weatherData.hourly} daily={weatherData.daily} />
        {/if}
    {:catch error}
        {#if cachedCurrent}
            <Encapsulator isCached current={cachedCurrent} hourly={cachedHourly} daily={cachedDaily} />
        {:else}
            Failed
        {/if}
{/await}
