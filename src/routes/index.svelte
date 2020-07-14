<script>
	import { onMount } from 'svelte';
	import WeatherData from '../components/WeatherData.svelte';
	import TempWeatherData from '../components/TempWeatherData.svelte';

	import { version } from "../../package.json";

	let latitude = null;
	let longitude = null;

	let client = false;
	console.debug('Opened index');
	onMount(async () => {

		console.debug('Mounted index');

		client = true;

		latitude = localStorage.getItem('latitude');
		longitude = localStorage.getItem('longitude');

		function success(position) {
			console.debug('geolocation succcess');
			latitude = position.coords.latitude;
			longitude = position.coords.longitude;
			localStorage.setItem('latitude', latitude)
			localStorage.setItem('longitude', longitude)
			console.log('latitude', latitude)
			console.log('long', longitude)
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

	}
</style>

<svelte:head>
	<title>Weather</title>
</svelte:head>
{#if client}
	 <div class="grid">
		 <WeatherData latitude={latitude} longitude={longitude} />
	</div>
{:else}
	<p>
		SSR Here
	</p>
{/if}
<h2>Weather v{version}:</h2>
