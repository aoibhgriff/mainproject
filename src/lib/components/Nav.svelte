<script>
	let { data } = $props();
</script>

<nav>
	<a href="/">Home</a>
	<a href="/cars">Cars</a>

	{#if data.isLoggedIn}
		<a href="/mybookings">My Bookings</a>
	{/if}

	{#if data.user?.category === 'elite'}
		<a href="/admin">Admin</a>
	{/if}
</nav>