<script>
	let { data } = $props();
</script>

<nav>
	<a href="/">Home</a>
	<a href="/cars">Cars</a>

	{#if data.isLoggedIn}
		<a href="/my-bookings">My Bookings</a>
	{/if}

	{#if data.user?.role === 'ROLE_ADMIN'}
		<a href="/admin">Admin</a>
	{/if}
</nav>