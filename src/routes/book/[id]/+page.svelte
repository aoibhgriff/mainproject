<script>
	let { data, form } = $props();
</script>

<h1>Book {data.car.name}</h1>

<form method="POST">
	<label for="date">Date</label>
    <input id="date" type="date" name="date" required>

    <label for="eventType">Event Type</label>
    <select id="eventType" name="eventType">
		<option>Wedding</option>
		<option>Prom</option>
		<option>Corporate</option>
	</select>

	<button type="submit" formaction="?/book">
		Submit Booking
	</button>
</form>

{#if form?.success}
	<p>Booking submitted successfully!</p>
{/if}