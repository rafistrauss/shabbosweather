<script context="module">
    export const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

    export const apiKey = 'dcba0ed759c66085eaeeca7f746953d9';

    export const zip = '10033';

    export const convertKelvinToFahrenheit = (kelvin) => {
        return Math.round((kelvin - 273.15) * 9 / 5 + 32);
    }
</script>
