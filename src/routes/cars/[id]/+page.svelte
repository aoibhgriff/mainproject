<script>
	let { data } = $props();
</script>

<div class="car-page">

	<img
		src={data.car.image}
		alt={data.car.name}
		class="car-image"
	>

	<div class="car-info">

		<h1>{data.car.name}</h1>

		<p class="category">{data.car.category}</p>

		<p><strong>Seats:</strong> {data.car.seats}</p>

		<p><strong>Colour:</strong> {data.car.colour}</p>

		<p><strong>From:</strong> €{data.car.price} / hour</p>

		<p class="description">
			{data.car.description}
		</p>

		<p class="quote-note">
			Final quotation confirmed after booking approval.
		</p>

		<a href={`/book/${data.car.id}`} class="book-btn">
			Book This Car
		</a>

	</div>

</div>