<script>
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Luxury Car Hire</title>
</svelte:head>

<Header data={data} />

<Nav data={data} />

<main>
	{@render children()}
</main>

<Footer />