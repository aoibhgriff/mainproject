<script>
	let { data, form } = $props();
</script>

<h1>Book {data.car.name}</h1>

<p><strong>Category:</strong> {data.car.category}</p>
<p><strong>From:</strong> €{data.car.price} / hour</p>
<p>Final quotation confirmed after booking approval.</p>

<form method="POST">

	<h2>Event Details</h2>

	<label for="date">Booking Date</label>
	<input
		id="date"
		type="date"
		name="date"
		required
		min={new Date().toISOString().split('T')[0]}
	>

	<label for="eventType">Event Type</label>
	<select id="eventType" name="eventType" required>
		<option value="">Select Event</option>
		<option>Wedding</option>
		<option>Prom</option>
		<option>Corporate</option>
		<option>VIP Event</option>
	</select>

	<label for="package">Package</label>
	<select id="package" name="package" required>
		<option value="">Select Package</option>
		<option>Standard Hire</option>
		<option>Chauffeur Service</option>
		<option>Wedding Premium</option>
		<option>VIP Executive</option>
	</select>

	<h2>Collection Details</h2>

	<label for="pickupLocation">Pickup Location</label>
	<input
		id="pickupLocation"
		name="pickupLocation"
		required
		placeholder="Hotel / Church / Venue"
	>

	<label for="duration">Hire Duration</label>
	<select id="duration" name="duration" required>
		<option value="">Select Duration</option>
		<option>2 Hours</option>
		<option>4 Hours</option>
		<option>Full Day</option>
	</select>

	<h2>Additional Requests</h2>

	<label for="requests">Special Requests</label>
	<textarea
		id="requests"
		name="requests"
		rows="4"
		placeholder="Decorations, champagne, ribbon colour..."
	></textarea>

	<button type="submit" formaction="?/book">
		Submit Booking
	</button>

</form>

{#if form?.error}
	<p>{form.error}</p>
{/if}