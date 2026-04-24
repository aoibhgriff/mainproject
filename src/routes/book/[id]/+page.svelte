<script>
	let { data, form } = $props();
</script>

<h1>Book {data.car.name}</h1>

<form method="POST">
	<label>Date</label>
	<input type="date" name="date" required>

	<label>Event Type</label>
	<select name="eventType">
		<option>Wedding</option>
		<option>Prom</option>
	</select>

	<button type="submit" formaction="?/book">
		Submit Booking
	</button>
</form>

{#if form?.success}
	<p>Booking submitted!</p>
{/if}