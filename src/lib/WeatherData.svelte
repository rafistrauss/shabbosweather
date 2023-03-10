<script>
	export let latitude;
	export let longitude;

	import Encapsulator from './Encapsulator.svelte';

	let cachedWeather = localStorage.getItem('cachedWeather');
	let cachedCurrent, cachedHourly, cachedDaily;

	let promise;

	$: {
		try {
			let cachedWeatherObj = JSON.parse(cachedWeather);
			cachedCurrent = cachedWeatherObj?.current;
			cachedHourly = cachedWeatherObj?.hourly;
			cachedDaily = cachedWeatherObj?.daily;
		} catch (error) {}
	}

	if (typeof fetch !== 'function') {
		// @ts-ignore
		fetch = require('node-fetch');
	}

	import { apiKey } from './utils.svelte';

	async function getWeatherData() {
		if (!(latitude && longitude)) {
			return null;
		}

		const part = 'minutely';
		const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${part}&appid=${apiKey}&units=imperial`;

		const res = await fetch(url);
		/** @type {one_call_weather_data_response} */
		const json = await res.json();

		const { current, daily, hourly } = json;

		const newHourly = hourly.slice(2, 5);

		const newDaily = daily.slice(1, 5);

		const weatherObject = { current, daily: newDaily, hourly: newHourly };

		localStorage.setItem('cachedWeather', JSON.stringify(weatherObject));

		return weatherObject;
	}

	promise = getWeatherData();
	setInterval(() => {
		console.log('getting weather');
		cachedWeather = localStorage.getItem('cachedWeather');
		promise = getWeatherData();
	}, 1000 * 60 * 5);
</script>

{#await promise}
	{#if cachedWeather}
		<Encapsulator current={cachedCurrent} hourly={cachedHourly} daily={cachedDaily} />
	{:else}
		No cached weather data: waiting
	{/if}
{:then weatherData}
	{#if weatherData}
		<Encapsulator
			current={weatherData.current}
			hourly={weatherData.hourly}
			daily={weatherData.daily}
		/>
	{/if}
{:catch error}
	{#if cachedCurrent}
		<Encapsulator current={cachedCurrent} hourly={cachedHourly} daily={cachedDaily} />
	{:else}Failed{/if}
{/await}
