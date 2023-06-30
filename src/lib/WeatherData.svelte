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

		const airPollutionUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

		const airPollutionRes = await fetch(airPollutionUrl);
		const airPollutionJson = await airPollutionRes.json();

		const { list } = airPollutionJson;

		const airQuality = list[0].main.aqi;

		//  Air Quality Index. Possible values: 1, 2, 3, 4, 5. Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor.

		console.log(airPollutionJson);

		const res = await fetch(url);
		/** @type {one_call_weather_data_response} */
		const json = await res.json();

		const { current, daily, hourly } = json;

		current.aqi = airQuality;

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
