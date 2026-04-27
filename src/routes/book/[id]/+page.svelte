<script>
	let { data, form } = $props();
</script>

<main class="bg-luxury-black min-h-screen py-16 px-4">
	<div class="max-w-4xl mx-auto">
		<!-- Breadcrumb -->
		<a href="/cars" class="text-accent-gold hover:text-accent-gold-light transition-colors mb-8 inline-block">
			← Back to Fleet
		</a>

		<!-- Page Header -->
		<div class="mb-12">
			<h1 class="text-5xl font-display text-white mb-6">Reserve Your Dream Car</h1>
			
			<!-- Car Summary Card -->
			<div class="card grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<p class="text-accent-gold text-sm uppercase tracking-widest font-semibold mb-2">Vehicle</p>
					<p class="text-2xl font-display text-white">{data.car.name}</p>
				</div>
				<div>
					<p class="text-accent-gold text-sm uppercase tracking-widest font-semibold mb-2">Category</p>
					<p class="text-2xl font-display text-white">{data.car.category}</p>
				</div>
				<div>
					<p class="text-accent-gold text-sm uppercase tracking-widest font-semibold mb-2">From</p>
					<p class="text-2xl font-display text-accent-gold">€{data.car.price}/hr</p>
				</div>
			</div>

			<div class="mt-4 bg-luxury-dark border border-accent-gold border-opacity-20 rounded-lg p-4">
				<p class="text-accent-gold italic text-sm">
					💎 Final quotation confirmed after booking approval.
				</p>
			</div>
		</div>

		<!-- Gold Divider -->
		<div class="divider"></div>

		<!-- Booking Form -->
		<form method="POST" class="space-y-12">
			<!-- Event Details Section -->
			<div>
				<h2 class="text-3xl font-display text-white mb-8 flex items-center gap-4">
					<span class="text-accent-gold text-2xl">1</span>
					Event Details
				</h2>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<!-- Booking Date -->
					<div>
						<label for="date" class="block text-white font-display text-sm mb-3 uppercase tracking-widest">
							Booking Date
						</label>
						<input
							id="date"
							type="date"
							name="date"
							required
							min={new Date().toISOString().split('T')[0]}
							class="w-full px-4 py-3 bg-luxury-dark border-2 border-luxury-charcoal text-white rounded-lg focus:border-accent-gold focus:outline-none transition-all duration-300"
						/>
					</div>

					<!-- Event Type -->
					<div>
						<label for="eventType" class="block text-white font-display text-sm mb-3 uppercase tracking-widest">
							Event Type
						</label>
						<select 
							id="eventType" 
							name="eventType" 
							required
							class="w-full px-4 py-3 bg-luxury-dark border-2 border-luxury-charcoal text-white rounded-lg focus:border-accent-gold focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
						>
							<option value="">Select Event Type</option>
							<option>Wedding</option>
							<option>Prom</option>
							<option>Corporate</option>
							<option>VIP Event</option>
						</select>
					</div>

					<!-- Package Selection -->
					<div class="md:col-span-2">
						<label for="package" class="block text-white font-display text-sm mb-3 uppercase tracking-widest">
							Service Package
						</label>
						<select 
							id="package" 
							name="package" 
							required
							class="w-full px-4 py-3 bg-luxury-dark border-2 border-luxury-charcoal text-white rounded-lg focus:border-accent-gold focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
						>
							<option value="">Select Package</option>
							<option>Standard Hire</option>
							<option>Chauffeur Service</option>
							<option>Wedding Premium</option>
							<option>VIP Executive</option>
						</select>
					</div>
				</div>
			</div>

			<!-- Collection Details Section -->
			<div>
				<h2 class="text-3xl font-display text-white mb-8 flex items-center gap-4">
					<span class="text-accent-gold text-2xl">2</span>
					Collection Details
				</h2>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<!-- Pickup Location -->
					<div>
						<label for="pickupLocation" class="block text-white font-display text-sm mb-3 uppercase tracking-widest">
							Pickup Location
						</label>
						<input
							id="pickupLocation"
							name="pickupLocation"
							required
							placeholder="Hotel / Church / Venue"
							class="w-full px-4 py-3 bg-luxury-dark border-2 border-luxury-charcoal text-white placeholder-luxury-gray-dark rounded-lg focus:border-accent-gold focus:outline-none transition-all duration-300"
						/>
					</div>

					<!-- Hire Duration -->
					<div>
						<label for="duration" class="block text-white font-display text-sm mb-3 uppercase tracking-widest">
							Hire Duration
						</label>
						<select 
							id="duration" 
							name="duration" 
							required
							class="w-full px-4 py-3 bg-luxury-dark border-2 border-luxury-charcoal text-white rounded-lg focus:border-accent-gold focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
						>
							<option value="">Select Duration</option>
							<option>2 Hours</option>
							<option>4 Hours</option>
							<option>Full Day</option>
						</select>
					</div>
				</div>
			</div>

			<!-- Additional Requests Section -->
			<div>
				<h2 class="text-3xl font-display text-white mb-8 flex items-center gap-4">
					<span class="text-accent-gold text-2xl">3</span>
					Additional Requests
				</h2>

				<div>
					<label for="requests" class="block text-white font-display text-sm mb-3 uppercase tracking-widest">
						Special Requests
					</label>
					<textarea
						id="requests"
						name="requests"
						rows="5"
						placeholder="Decorations, champagne, ribbon colour, music preferences..."
						class="w-full px-4 py-3 bg-luxury-dark border-2 border-luxury-charcoal text-white placeholder-luxury-gray-dark rounded-lg focus:border-accent-gold focus:outline-none transition-all duration-300 resize-none"
					></textarea>
					<p class="text-luxury-gray-light text-xs mt-2">Tell us about any special requirements for your event</p>
				</div>
			</div>

			<!-- Error Message -->
			{#if form?.error}
				<div class="bg-red-900 bg-opacity-20 border border-red-500 rounded-lg p-4">
					<p class="text-red-400 text-sm">{form.error}</p>
				</div>
			{/if}

			<!-- Submit Button -->
			<div class="divider"></div>
			<div class="flex flex-col sm:flex-row gap-4">
				<button 
					type="submit" 
					formaction="?/book"
					class="btn btn-gold flex-1 py-4 text-lg font-bold"
				>
					Submit Booking Request
				</button>
				<a 
					href="/cars" 
					class="btn btn-outline flex-1 py-4 text-lg text-center"
				>
					Browse More Cars
				</a>
			</div>
		</form>

		<!-- Information Box -->
		<div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
			<div class="card text-center">
				<div class="text-4xl mb-4">⏱️</div>
				<h3 class="text-white font-display mb-2">Quick Approval</h3>
				<p class="text-luxury-gray-light text-sm">Booking approvals within 24 hours</p>
			</div>
			<div class="card text-center">
				<div class="text-4xl mb-4">💬</div>
				<h3 class="text-white font-display mb-2">24/7 Support</h3>
				<p class="text-luxury-gray-light text-sm">Dedicated concierge service</p>
			</div>
			<div class="card text-center">
				<div class="text-4xl mb-4">✅</div>
				<h3 class="text-white font-display mb-2">Flexible Changes</h3>
				<p class="text-luxury-gray-light text-sm">Modify your booking anytime</p>
			</div>
		</div>
	</div>
</main>