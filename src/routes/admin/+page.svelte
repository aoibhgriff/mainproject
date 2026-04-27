<script>
	let { data } = $props();
</script>

<h1>Admin Dashboard</h1>

{#if data.bookings.length === 0}

	<p>No bookings found.</p>

{:else}

	{#each data.bookings as b}

		<div>

			<h3>{b.userName}</h3>

			<p>Car: {b.carName}</p>
			<p>Date: {b.date}</p>
			<p>Event: {b.eventType}</p>
            <p>Package: {b.package}</p>
			<p>Status: {b.status}</p>

			{#if b.status === 'pending'}

				<form method="POST">

					<input type="hidden" name="id" value={b.id}>

					<button formaction="?/approve">
						Approve
					</button>

					<button formaction="?/reject">
						Reject
					</button>

				</form>

			{:else}

				<p><strong>Decision made</strong></p>

			{/if}

			<hr>

		</div>

	{/each}

{/if}