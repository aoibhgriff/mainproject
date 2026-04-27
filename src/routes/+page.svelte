<script>
	let { data } = $props();
</script>

<main class="bg-luxury-black min-h-screen">

	<!-- Hero Section -->
	<section class="py-16 px-4">
		<div class="max-w-7xl mx-auto">

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

				<!-- Hero Image -->
				<div class="order-2 lg:order-1 flex justify-center">
					<img
						src="/images/car1.jpg"
						alt="Premium Luxury Vehicle"
						class="w-full max-w-xl h-80 rounded-lg shadow-2xl object-cover mx-auto"
					/>
				</div>

				<!-- Hero Content -->
				<div class="order-1 lg:order-2 text-center lg:text-left">

					<h1 class="text-5xl lg:text-6xl font-display text-white mb-6 leading-tight">
						Premium Luxury Services
					</h1>

					<p class="text-xl text-accent-gold font-sans mb-8">
						Exceptional Experiences for Every Occasion
					</p>

					<p class="text-luxury-gray-light text-lg mb-12 leading-relaxed">
						Experience the pinnacle of automotive elegance with our curated collection of luxury vehicles.
						Whether you're seeking executive transportation or dreaming of the perfect wedding day entrance,
						we deliver uncompromising quality and sophistication.
					</p>

					<div class="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
						<a href="/cars" class="btn btn-gold text-lg">Browse Our Fleet</a>
						<a href="/register" class="btn btn-outline text-lg">Get Started</a>
					</div>

				</div>

			</div>

		</div>
	</section>

	<div class="divider"></div>

	<!-- Services -->
	<section class="py-20 px-4">
		<div class="max-w-7xl mx-auto">

			<h2 class="text-5xl font-display text-white text-center mb-4">
				Our Services
			</h2>

			<p class="text-center text-luxury-gray-light text-lg mb-16">
				Tailored solutions for your most important moments
			</p>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

				<!-- Card 1 -->
				<div class="card group">

					<div class="overflow-hidden rounded-lg mb-8">
						<img
							src="/images/car2.jpg"
							alt="Luxury Car Hire"
							class="w-full h-64 rounded-lg object-cover transform group-hover:scale-105 transition-transform duration-300"
						/>
					</div>

					<h3 class="text-3xl font-display text-white mb-4">
						Luxury Car Hire
					</h3>

					<p class="text-luxury-gray-light text-lg mb-8 leading-relaxed">
						Experience unparalleled luxury transportation for your most important moments.
						Our exclusive fleet provides the perfect complement to executive travel,
						special occasions and unforgettable experiences.
					</p>

					<a href="/cars" class="btn btn-outline">
						Explore Our Fleet
					</a>

				</div>

				<!-- Card 2 -->
				<div class="card group">

					<div class="overflow-hidden rounded-lg mb-8">
						<img
							src="/images/car3.jpg"
							alt="Wedding Cars"
							class="w-full h-64 rounded-lg object-cover transform group-hover:scale-105 transition-transform duration-300"
						/>
					</div>

					<h3 class="text-3xl font-display text-white mb-4">
						Wedding Cars
					</h3>

					<p class="text-luxury-gray-light text-lg mb-8 leading-relaxed">
						Elevate your wedding day with our stunning luxury vehicles.
						Professional drivers and premium presentation ensure your special day is unforgettable.
					</p>

					<a href="/cars" class="btn btn-outline">
						Book Your Dream Car
					</a>

				</div>

			</div>

		</div>
	</section>

	<div class="divider"></div>

	<!-- Featured Section -->
	<section class="py-20 px-4">
		<div class="max-w-7xl mx-auto">

			<h2 class="text-5xl font-display text-white text-center mb-4">
				Featured Selection
			</h2>

			<p class="text-center text-luxury-gray-light text-lg mb-16">
				Discover the finest vehicles in our portfolio
			</p>

			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

				<!-- Large Showcase -->
				<div class="lg:col-span-2">

					<div class="overflow-hidden rounded-lg shadow-2xl">
						<img
							src="/images/car4.jpg"
							alt="Featured Luxury Vehicle"
							class="w-full h-96 object-cover"
						/>
					</div>

				</div>

				<!-- CTA -->
				<div class="flex flex-col justify-center">

					<h3 class="text-4xl font-display text-accent-gold mb-6">
						Experience Excellence
					</h3>

					<p class="text-luxury-gray-light text-lg mb-8 leading-relaxed">
						Every vehicle in our collection represents the pinnacle of craftsmanship and luxury.
						Find the perfect match for your occasion.
					</p>

					<div class="space-y-4">
						<a href="/cars" class="btn btn-gold block text-center text-lg">
							View All Vehicles
						</a>

						<a href="/register" class="btn btn-outline block text-center text-lg">
							Create Account
						</a>
					</div>

				</div>

			</div>

		</div>
	</section>

	<div class="divider"></div>

	<!-- Why Choose Us -->
	<section class="py-20 px-4">
		<div class="max-w-7xl mx-auto">

			<h2 class="text-5xl font-display text-white text-center mb-16">
				Why Choose Us
			</h2>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">

				<div class="card text-center">
					<div class="text-5xl text-accent-gold mb-6">✨</div>
					<h3 class="text-2xl font-display text-white mb-4">Premium Fleet</h3>
					<p class="text-luxury-gray-light">
						World-class vehicles representing true automotive luxury.
					</p>
				</div>

				<div class="card text-center">
					<div class="text-5xl text-accent-gold mb-6">🎯</div>
					<h3 class="text-2xl font-display text-white mb-4">Professional Service</h3>
					<p class="text-luxury-gray-light">
						Experienced drivers and exceptional customer care.
					</p>
				</div>

				<div class="card text-center">
					<div class="text-5xl text-accent-gold mb-6">⭐</div>
					<h3 class="text-2xl font-display text-white mb-4">Memorable Experience</h3>
					<p class="text-luxury-gray-light">
						Every journey designed to exceed expectations.
					</p>
				</div>

			</div>

		</div>
	</section>

</main>
