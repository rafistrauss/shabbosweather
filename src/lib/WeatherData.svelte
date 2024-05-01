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

	// if (typeof fetch !== 'function') {
	// 	// @ts-ignore
	// 	fetch = require('node-fetch');
	// }

	import { openweathermapApiKey, airnow_api_key } from './utils.js';

	async function getWeatherData() {
		if (!(latitude && longitude)) {
			return null;
		}

		// Get air quality from airNow api
		const airNowUrl = `https://www.airnowapi.org/aq/observation/latLong/current/?format=application/json&latitude=${latitude}&longitude=${longitude}&distance=25&API_KEY=${airnow_api_key}`;

		const airNowRes = await fetch(airNowUrl);
		/** @type {import('types').AirNowData[]} */
		const airNowJson = await airNowRes.json();

		let airQualityCategory = 1;
		for (const airQuality of airNowJson) {
			if (airQuality.Category.Number > airQualityCategory) {
				airQualityCategory = airQuality.Category.Number;
			}
		}

		const part = 'minutely';
		const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=${part}&appid=${openweathermapApiKey}&units=imperial`;

		const res = await fetch(url);
		/** @type {one_call_weather_data_response} */
		const json = await res.json();

		const { current, daily, hourly } = json;

		current.aqi = airQualityCategory;

		const newHourly = hourly.slice(2, 5);

		const newDaily = daily.slice(1, 5);

		const weatherObject = { current, daily: newDaily, hourly: newHourly };

		localStorage.setItem('cachedWeather', JSON.stringify(weatherObject));

		return weatherObject;
	}

	promise = getWeatherData();
	setInterval(
		() => {
			console.log('getting weather');
			cachedWeather = localStorage.getItem('cachedWeather');
			promise = getWeatherData();
		},
		1000 * 60 * 5
	);
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
