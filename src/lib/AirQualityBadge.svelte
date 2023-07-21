<script>
	import { aqiObject } from './utils.js';

	/** @type {number} */
	export let aqi;
	const airQualityText = {
		1: 'Good',
		2: 'Fair',
		3: 'Moderate',
		4: 'Poor',
		5: 'Very Poor'
	};

	const airQualityBadgeColor = {
		1: 'green',
		2: 'yellow',
		3: 'orange',
		4: 'red',
		5: 'purple'
	};

	const airQualityTextColor = {
		1: '#2a2a2a',
		2: '#2a2a2a',
		3: '#2a2a2a',
		4: 'whitesmoke',
		5: 'whitesmoke',
		6: 'whitesmoke'
	};
</script>

<span
	id="airQuality"
	style="color: {airQualityTextColor[aqi]};background-color: {aqiObject[aqi].Color};"
>
	{aqiObject[aqi].Description}
</span>

<style>
	#airQuality {
		padding: 0.5em;
		border-radius: 5px;
		margin: 1em 0;
	}
</style>
