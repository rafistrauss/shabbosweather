<script>
    import { getIcon, convertKelvinToFahrenheit } from '../components/utils.svelte';
    import { formatDistanceToNow } from 'date-fns';

    export let current;
    const { feels_like: temp, dt: timestamp, weather } = current;
    const { icon } = weather[0];

    const myTemp = `${convertKelvinToFahrenheit(temp)} \xB0F`;

    const imgSrc = getIcon(icon)
</script>

<!-- <WeatherDisplay temp={temp} timestamp={timestamp} icon={icon} /> -->
<div>
    <img src="{imgSrc}" alt="" style="vertical-align: middle;">
    <span style="font-size: 48px;">{myTemp}</span>
</div>
