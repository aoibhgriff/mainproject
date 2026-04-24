<script>
	let { data } = $props();
</script>

<header>
	<h1>Luxury Wedding Car Hire</h1>

	{#if data.isLoggedIn}
		<p>
			Welcome <strong>{data.user.name}</strong>
			({data.user.category})
		</p>

		<form method="post" action="/logout">
			<button type="submit">Logout</button>
		</form>

	{:else}

		<p>
			Welcome guest —
			<a href="/login">Login</a>
		</p>

	{/if}
</header>