<script>
	import { format } from 'date-fns';

	/**
	 * @type {daily}
	 */
	export let weatherDataInstance;

	const { dt: timestamp, feels_like, weather, humidity, pop, wind_speed } = weatherDataInstance;

	const { icon, id } = weather[0];

	const timeOfDay = icon.endsWith('n') ? 'night' : 'day';

	const { day: day_feels_like } = feels_like;

	const myTemp = `${Math.round(day_feels_like)} \xB0F`;
</script>

<div>
	<span class={`wi wi-owm-${timeOfDay}-${id}`} style="font-size: 48px;" />
	<span style="font-size: 24px;">{myTemp}</span>
	<p>
		{format(new Date(timestamp * 1000), 'EEEE')}
		<br />
		Humidity: {humidity}%
		<br />
		Chance of Rain: {pop * 100}%
		<br />
		Wind: {Math.round(wind_speed)}mph
	</p>
</div>
