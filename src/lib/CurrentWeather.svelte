<script>
	import { lightFormat } from 'date-fns';
	import AirQualityBadge from './AirQualityBadge.svelte';

	/**
	 * @type {current}
	 */
	export let current;
	const { feels_like, dt: timestamp, weather, humidity, wind_speed, aqi } = current;

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
		<AirQualityBadge {aqi} />
	</p>
</div>
