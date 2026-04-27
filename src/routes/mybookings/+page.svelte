<script>
	let { data } = $props();
</script>

<h1>My Bookings</h1>

{#if data.bookings.length === 0}

	<p>No bookings yet.</p>

{:else}

	{#each data.bookings as b}

		<div>

			<h3>{b.carName}</h3>

			<p>Date: {b.date}</p>
			<p>Event: {b.eventType}</p>
            <p>Package: {b.package}</p>
			<p>Status: {b.status}</p>
            
			{#if b.status === 'pending'}

				<form method="POST">

					<input type="hidden" name="id" value={b.id}>

					<button formaction="?/cancel">
						Cancel Booking
					</button>

				</form>

			{/if}

			<hr>

		</div>

	{/each}

{/if}