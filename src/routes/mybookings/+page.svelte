<script>
	let { data } = $props();
</script>

<h1>My Bookings</h1>

{#if data.bookings.length === 0}
	<p>You have no bookings yet.</p>
{:else}

	{#each data.bookings as b}
		<div>
			<h3>{b.carName}</h3>
			<p>Date: {b.date}</p>
			<p>Event: {b.eventType}</p>
			<p>Status: {b.status}</p>
			<hr>
		</div>
	{/each}

{/if}
