<script>
	import { lightFormat } from 'date-fns';

	/**
	 * @type {current}
	 */
	export let current;
	const { feels_like, dt: timestamp, weather, humidity, wind_speed, aqi } = current;

	const airQualityText = {
		1: 'Good',
		2: 'Fair',
		3: 'Moderate',
		4: 'Poor',
		5: 'Very Poor'
	};

	const airQualityColor = {
		1: 'green',
		2: 'yellow',
		3: 'orange',
		4: 'red',
		5: 'purple'
	};

	const { icon, id } = weather[0];

	const timeOfDay = icon.endsWith('n') ? 'night' : 'day';

	const myTemp = `${Math.round(feels_like)} \xB0F`;

	const formattedTime = lightFormat(timestamp * 1000, 'h:mm aaa');
</script>

<div>
	<span class={`wi wi-owm-${timeOfDay}-${id}`} style="font-size: 48px;" />
	<span style="font-size: 48px; margin-inline-end: 1em;">{myTemp}</span>
	<p style="display: inline-block;">
		{formattedTime}
		<br />
		Humidity: {humidity}%
		<br />
		Wind: {Math.round(wind_speed)}mph
		<br />
		<!-- Display air quality color based on the quality -->
		Air Quality:
		<span id="airQuality" style="background-color: {airQualityColor[aqi]};">
			{airQualityText[aqi]}
		</span>
	</p>
</div>

<style>
	#airQuality {
		color: gainsboro;
		padding: 0.5em;
		border-radius: 5px;
		margin: 1em 0;
	}
</style>
