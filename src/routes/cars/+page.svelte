<script>
	import cars from '$lib/data/cars.json';
</script>

<h1>Our Luxury Fleet</h1>

<p>Browse our premium collection of wedding, executive and VIP hire vehicles.</p>

<div class="cars-grid">

	{#each cars as car}

		<div class="car-card">

			<img src={car.image} alt={car.name}>

			<h2>{car.name}</h2>

			<p><strong>Category:</strong> {car.category}</p>

			<p><strong>Seats:</strong> {car.seats}</p>

			<p><strong>Colour:</strong> {car.colour}</p>

			<p><strong>From:</strong> €{car.price} / hour</p>

			<div class="buttons">

				<a href={`/cars/${car.id}`}>
					View Details
				</a>

				<a href={`/book/${car.id}`}>
					Book Now
				</a>

			</div>

		</div>

	{/each}

</div>