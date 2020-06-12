<script>
	import WeatherData from '../components/WeatherData.svelte';
	import TempWeatherData from '../components/TempWeatherData.svelte';

	let latitude = localStorage.getItem('latitude') || null;
	let longitude =  localStorage.getItem('longitude') || null;

	function success(position) {
		latitude = position.coords.latitude;
		longitude = position.coords.longitude;
		localStorage.setItem('latitude', latitude)
		localStorage.setItem('longitude', longitude)
		console.log('latitude',  latitude)
		console.log('long',  longitude)
	}

	navigator.geolocation.getCurrentPosition(success)
</script>
<style>
.grid {
	display: grid;
	grid-template-areas: 'main
	hourly
	daily
	';
}
</style>

<svelte:head>
	<title>Shabbos Weather</title>
</svelte:head>

<!-- <TempWeatherData /> -->
<div class="grid">
	<WeatherData latitude={latitude} longitude={longitude} />
</div>
