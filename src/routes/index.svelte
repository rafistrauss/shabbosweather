<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import WeatherData from '$lib/WeatherData.svelte';
	import { latitude, longitude } from '$lib/stores.js';
	import X from '$lib/Icons/x.svelte';
	import Fullscreen from '$lib/Icons/fullscreen.svelte';

	import { version } from '../../package.json';

	let errorMessage = null;

	/**
	 *
	 * @param {string} zip
	 * @returns {Promise<PostalCodes>?}
	 */
	async function getLatLongFromZip(zip) {
		const response = await fetch(
			`https://secure.geonames.org/postalCodeSearchJSON?postalcode=${zip}&country=us&maxRows=1&username=rafistrauss`
		);
		if (response.ok) {
			return await response.json();
		} else {
			console.error(`Failed to fetch latLong from zip: ${response.statusText}`);
			errorMessage = response.statusText;
			return null;
		}
	}

	/**
	 *
	 * @param {string} zip
	 */
	async function setLatLongFromZip(zip) {
		if (zip.match(/\d{5}/)) {
			clearErrorMessage();
			let res = await getLatLongFromZip(zip);
			const { lat, lng } = res.postalCodes[0];
			setLatLong(lat, lng);
		}
	}

	function clearLatLong() {
		localStorage.clear();
		latitude.set(null);
		longitude.set(null);
	}

	/**
	 *
	 * @param {number} lat
	 * @param {number} long
	 */
	function setLatLong(lat, long) {
		latitude.set(lat);
		longitude.set(long);
		localStorage.setItem('latitude', lat);
		localStorage.setItem('longitude', long);
	}

	function clearErrorMessage() {
		errorMessage = null;
	}

	function useGeoLocator() {
		clearErrorMessage();
		/**
		 *
		 * @param {GeolocationPosition} position
		 */
		function success(position) {
			setLatLong(position.coords.latitude, position.coords.longitude);
		}

		/**
		 *
		 * @param {GeolocationPositionError} err
		 */
		function error(err) {
			errorMessage = err.message;
			console.error(err);
		}

		navigator.geolocation.getCurrentPosition(success, error);
	}

	onMount(async () => {
		console.debug('Mounted index');

		latitude.set(localStorage.getItem('latitude'));
		longitude.set(localStorage.getItem('longitude'));
	});
</script>

<svelte:head>
	<title>Weather v{version}</title>
</svelte:head>

{#if $latitude && $longitude}
	<div class="grid">
		<X on:click={clearLatLong} style="position: absolute; right: 1em;" />
		<Fullscreen />

		<WeatherData latitude={$latitude} longitude={$longitude} />
	</div>
{:else}
	<p style="height: 50px; text-align: center; color: #ff0000">
		{errorMessage ? errorMessage : ''}
	</p>
	<div style="display: flex; justify-content: space-between;">
		<button on:click={useGeoLocator}>Use Current Location</button>
		<span>or</span>
		<div>
			<label for="zip">Enter zip code:</label><input
				name="zip"
				type="text"
				pattern={'[0-9]{5}'}
				on:keyup={(el) => setLatLongFromZip(el.target.value)}
			/>
		</div>
	</div>
{/if}
<h2>Weather v{version}:</h2>

<style>
	.grid {
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		gap: 20px;
	}
</style>
