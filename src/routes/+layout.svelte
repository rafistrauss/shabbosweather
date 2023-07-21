<script>
	import { base } from '$app/paths';

	import '../app.css';
</script>

<svelte:head>
	<link rel="stylesheet" href="{base}/weather-icons.min.css" />
	<link rel="apple-touch-icon" sizes="180x180" href="{base}/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="{base}/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="{base}/favicon-16x16.png" />
	<link rel="manifest" href="{base}/site.webmanifest" />
	<link rel="mask-icon" href="{base}/safari-pinned-tab.svg" color="#5bbad5" />
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
