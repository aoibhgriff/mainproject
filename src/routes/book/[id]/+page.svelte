<script>
	let { data, form } = $props();
</script>

<h1>Book {data.car.name}</h1>

<form method="POST">

	<label for="date">Booking Date</label>
	<input
		id="date"
		type="date"
		name="date"
		required
		min={new Date().toISOString().split('T')[0]}
	>

	<label for="eventType">Event Type</label>
	<select
		id="eventType"
		name="eventType"
		required
	>
		<option value="">Select Event</option>
		<option>Wedding</option>
		<option>Prom</option>
		<option>Corporate</option>
		<option>VIP Event</option>
	</select>

	<label for="pickupLocation">Pickup Location</label>
	<input
		id="pickupLocation"
		name="pickupLocation"
		required
		placeholder="Hotel / Church / Venue"
	>

	<label for="duration">Hire Duration</label>
	<select
		id="duration"
		name="duration"
		required
	>
		<option value="">Select Duration</option>
		<option>2 Hours</option>
		<option>4 Hours</option>
		<option>Full Day</option>
	</select>

	<label for="requests">Special Requests</label>
	<textarea
		id="requests"
		name="requests"
		rows="4"
		placeholder="Decorations, ribbon colour, champagne, etc."
	></textarea>

	<button type="submit" formaction="?/book">
		Submit Booking
	</button>

</form>

{#if form?.success}
	<p>Booking submitted successfully!</p>
{/if}

{#if form?.error}
	<p>{form.error}</p>
{/if}