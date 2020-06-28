<script>
    import { format } from 'date-fns';
    import { getIcon, convertKelvinToFahrenheit } from '../components/utils.svelte';

    export let weatherDataInstance;
    // export let temp, timestamp, icon;

    const { dt: timestamp, temp, feels_like, weather } = weatherDataInstance;

    const { icon } = weather[0];

    const { day: day_feels_like } = feels_like;

    // const { main: { feels_like }, weather } = data;
    // return JSON.stringify(json);
    const myTemp = `${convertKelvinToFahrenheit(day_feels_like)} \xB0F`;

    const imgSrc = getIcon(icon)

</script>

<div>
    <img src="{imgSrc}" alt="" style="vertical-align: middle;">
    <span style="font-size: 24px;">{myTemp}</span>
    <p>{format(new Date(timestamp * 1000), 'EEEE')}</p>
</div>
