<script>
	import cars from '$lib/data/cars.json';
</script>

<main class="bg-luxury-black min-h-screen py-16 px-4">
	<div class="max-w-7xl mx-auto">
		<!-- Page Header -->
		<div class="text-center mb-16">
			<h1 class="text-6xl font-display text-white mb-4">Our Luxury Fleet</h1>
			<p class="text-xl text-luxury-gray-light max-w-3xl mx-auto leading-relaxed">
				Browse our premium collection of wedding, executive and VIP hire vehicles. Each vehicle is meticulously maintained and offers an unparalleled experience of elegance and comfort.
			</p>
		</div>

		<!-- Gold Divider -->
		<div class="divider"></div>

		<!-- Cars Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each cars as car}
				<div class="car-card card group overflow-hidden">
					<!-- Image Container -->
					<div class="relative overflow-hidden rounded-t-lg">
						<img 
							src={car.image} 
							alt={car.name}
							class="w-full h-40 max-w-md object-cover transform group-hover:scale-110 transition-transform duration-300"
						/>
						<div class="absolute top-4 right-4 bg-accent-gold text-luxury-black px-4 py-2 rounded-lg font-bold text-sm">
							{car.category}
						</div>
					</div>

					<!-- Car Info -->
					<div class="p-6">
						<h2 class="text-2xl font-display text-white mb-4">{car.name}</h2>

						<!-- Specs Grid -->
						<div class="grid grid-cols-2 gap-4 mb-6 text-sm">
							<div>
								<p class="text-accent-gold font-semibold mb-1">Seats</p>
								<p class="text-luxury-gray-light">{car.seats} Passengers</p>
							</div>
							<div>
								<p class="text-accent-gold font-semibold mb-1">Colour</p>
								<p class="text-luxury-gray-light">{car.colour}</p>
							</div>
						</div>

						<!-- Price -->
						<div class="mb-6 pb-6 border-b border-luxury-charcoal">
							<p class="text-2xl font-display text-accent-gold">€{car.price}/hr</p>
							<p class="text-xs text-luxury-gray-light">Starting from</p>
						</div>

						<!-- Description -->
						<p class="text-luxury-gray-light text-sm mb-6 line-clamp-3">
							{car.description}
						</p>

						<!-- Action Buttons -->
						<div class="flex flex-col gap-3">
							<a 
								href={`/cars/${car.id}`}
								class="btn btn-outline text-center py-3 w-full"
							>
								View Details
							</a>
							<a 
								href={`/book/${car.id}`}
								class="btn btn-gold text-center py-3 w-full"
							>
								Book Now
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</main>

<style>
	.car-card {
		display: flex;
		flex-direction: column;
	}

	.car-card > div:not(:first-child) {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}
</style>