<script>
	import '../app.css';
</script>

<svelte:head>
	<title>ShabbosWeather 2.0</title>
	<link rel="stylesheet" href="weather-icons.min.css" />
	<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
	<link rel="manifest" href="site.webmanifest" />
	<link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
	<meta name="msapplication-TileColor" content="#b91d47" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
