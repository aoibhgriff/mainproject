<script>
	let { data } = $props();
</script>

<main class="bg-luxury-black min-h-screen py-16 px-4">
	<div class="max-w-7xl mx-auto">
		<!-- Breadcrumb -->
		<a href="/cars" class="text-accent-gold hover:text-accent-gold-light transition-colors mb-8 inline-block">
			← Back to Fleet
		</a>

		<!-- Car Detail Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
			<!-- Car Image -->
			<div class="car-image">
				<img
					src={data.car.image}
					alt={data.car.name}
					class="w-full h-auto max-w-md max-h-80 rounded-lg shadow-2xl object-cover"
				/>
			</div>

			<!-- Car Information -->
			<div class="car-info">
				<!-- Category Badge -->
				<div class="inline-block mb-6">
					<span class="category bg-accent-gold text-luxury-black px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-widest">
						{data.car.category}
					</span>
				</div>

				<!-- Title -->
				<h1 class="text-5xl font-display text-white mb-8">{data.car.name}</h1>

				<!-- Price -->
				<div class="mb-8 pb-8 border-b border-luxury-charcoal">
					<p class="text-accent-gold text-sm mb-2 uppercase tracking-widest font-semibold">Price</p>
					<p class="text-4xl font-display text-white">€{data.car.price}<span class="text-lg text-luxury-gray-light">/hour</span></p>
				</div>

				<!-- Specifications Grid -->
				<div class="grid grid-cols-2 gap-8 mb-8 pb-8 border-b border-luxury-charcoal">
					<div>
						<p class="text-accent-gold text-sm mb-3 uppercase tracking-widest font-semibold">Seats</p>
						<p class="text-2xl font-display text-white">{data.car.seats}</p>
						<p class="text-luxury-gray-light text-sm">Passengers</p>
					</div>
					<div>
						<p class="text-accent-gold text-sm mb-3 uppercase tracking-widest font-semibold">Colour</p>
						<p class="text-2xl font-display text-white">{data.car.colour}</p>
					</div>
				</div>

				<!-- Description -->
				<div class="mb-8">
					<p class="text-accent-gold text-sm mb-4 uppercase tracking-widest font-semibold">About This Vehicle</p>
					<p class="description text-luxury-gray-light text-lg leading-relaxed">
						{data.car.description}
					</p>
				</div>

				<!-- Quote Note -->
				<div class="bg-luxury-dark border border-accent-gold border-opacity-20 rounded-lg p-6 mb-8">
					<p class="quote-note text-accent-gold italic text-sm">
						💎 Final quotation confirmed after booking approval.
					</p>
				</div>

				<!-- Call to Action -->
				<div class="flex flex-col sm:flex-row gap-4">
					<a href={`/book/${data.car.id}`} class="book-btn btn btn-gold text-lg py-4 flex-1 text-center">
						Book This Car
					</a>
					<a href="/cars" class="btn btn-outline text-lg py-4 flex-1 text-center">
						View More Cars
					</a>
				</div>
			</div>
		</div>

		<!-- Additional Features Section -->
		<div class="divider"></div>

		<div class="py-12">
			<h2 class="text-4xl font-display text-white mb-12 text-center">What's Included</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div class="card text-center">
					<div class="text-4xl mb-4">🚗</div>
					<h3 class="text-white font-display mb-2">Premium Vehicle</h3>
					<p class="text-luxury-gray-light text-sm">Meticulously maintained</p>
				</div>
				<div class="card text-center">
					<div class="text-4xl mb-4">👨‍💼</div>
					<h3 class="text-white font-display mb-2">Professional Driver</h3>
					<p class="text-luxury-gray-light text-sm">Experienced & discreet</p>
				</div>
				<div class="card text-center">
					<div class="text-4xl mb-4">🛡️</div>
					<h3 class="text-white font-display mb-2">Full Insurance</h3>
					<p class="text-luxury-gray-light text-sm">Complete coverage</p>
				</div>
				<div class="card text-center">
					<div class="text-4xl mb-4">⏰</div>
					<h3 class="text-white font-display mb-2">Flexible Booking</h3>
					<p class="text-luxury-gray-light text-sm">Your schedule, our priority</p>
				</div>
			</div>
		</div>
	</div>
</main>