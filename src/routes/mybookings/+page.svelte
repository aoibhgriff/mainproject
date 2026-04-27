<script>
	let { data } = $props();

	// Status color mapping
	const statusColor = (status) => {
		switch(status) {
			case 'pending': return 'bg-yellow-900 text-yellow-200';
			case 'approved': return 'bg-green-900 text-green-200';
			case 'cancelled': return 'bg-red-900 text-red-200';
			default: return 'bg-blue-900 text-blue-200';
		}
	};

	const statusIcon = (status) => {
		switch(status) {
			case 'pending': return '⏳';
			case 'approved': return '✅';
			case 'cancelled': return '❌';
			default: return '📋';
		}
	};
</script>

<main class="bg-luxury-black min-h-screen py-16 px-4">
	<div class="max-w-7xl mx-auto">
		<!-- Page Header -->
		<div class="text-center mb-12">
			<h1 class="text-6xl font-display text-white mb-4">My Bookings</h1>
			<p class="text-luxury-gray-light text-lg">Manage and track your luxury car reservations</p>
		</div>

		<!-- Gold Divider -->
		<div class="divider"></div>

		{#if data.bookings.length === 0}
			<!-- Empty State -->
			<div class="text-center py-20">
				<div class="text-7xl mb-6">🚗</div>
				<h2 class="text-3xl font-display text-white mb-4">No Bookings Yet</h2>
				<p class="text-luxury-gray-light text-lg mb-8">
					Explore our premium fleet and create your first reservation
				</p>
				<a href="/cars" class="btn btn-gold text-lg">
					Browse Our Fleet
				</a>
			</div>

		{:else}
			<!-- Bookings Grid -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{#each data.bookings as booking}
					<div class="card group border-l-4 border-l-accent-gold">
						<!-- Header with Status -->
						<div class="flex justify-between items-start mb-6 pb-6 border-b border-luxury-charcoal">
							<div>
								<h3 class="text-2xl font-display text-white">{booking.carName}</h3>
								<p class="text-accent-gold text-sm mt-1">Booking ID: #{booking.id}</p>
							</div>
							<span class="inline-block px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest {statusColor(booking.status)}">
								{statusIcon(booking.status)} {booking.status}
							</span>
						</div>

						<!-- Booking Details Grid -->
						<div class="grid grid-cols-2 gap-6 mb-8">
							<div>
								<p class="text-accent-gold text-xs uppercase tracking-widest font-semibold mb-2">Date</p>
								<p class="text-white text-lg font-display">{booking.date}</p>
							</div>
							<div>
								<p class="text-accent-gold text-xs uppercase tracking-widest font-semibold mb-2">Event Type</p>
								<p class="text-white text-lg font-display">{booking.eventType}</p>
							</div>
							<div>
								<p class="text-accent-gold text-xs uppercase tracking-widest font-semibold mb-2">Package</p>
								<p class="text-luxury-gray-light">{booking.package}</p>
							</div>
							<div>
								<p class="text-accent-gold text-xs uppercase tracking-widest font-semibold mb-2">Pickup Location</p>
								<p class="text-luxury-gray-light">{booking.pickupLocation}</p>
							</div>
						</div>

						<!-- Duration and Requests -->
						<div class="bg-luxury-dark rounded-lg p-4 mb-6">
							<div class="mb-4">
								<p class="text-accent-gold text-xs uppercase tracking-widest font-semibold mb-2">Duration</p>
								<p class="text-white">{booking.duration}</p>
							</div>
							{#if booking.requests}
								<div>
									<p class="text-accent-gold text-xs uppercase tracking-widest font-semibold mb-2">Special Requests</p>
									<p class="text-luxury-gray-light text-sm italic">{booking.requests}</p>
								</div>
							{/if}
						</div>

						<!-- Action Buttons -->
						{#if booking.status === 'pending'}
							<form method="POST" class="flex gap-3">
								<input type="hidden" name="id" value={booking.id} />
								<button 
									formaction="?/cancel"
									class="btn btn-outline flex-1 py-3"
								>
									Cancel Booking
								</button>
							</form>
						{:else if booking.status === 'approved'}
							<div class="bg-green-900 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg p-4">
								<p class="text-green-300 text-sm">
									✓ Your booking has been approved. Contact us for further details.
								</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Action Section -->
			<div class="mt-12 text-center">
				<p class="text-luxury-gray-light text-lg mb-6">Looking for a different vehicle?</p>
				<a href="/cars" class="btn btn-outline text-lg">
					Browse More Cars
				</a>
			</div>
		{/if}

		<!-- Information Cards -->
		<div class="divider mt-20"></div>
		
		<div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
			<div class="card text-center">
				<div class="text-4xl mb-4">💎</div>
				<h4 class="text-white font-display mb-2">Premium Service</h4>
				<p class="text-luxury-gray-light text-sm">Dedicated concierge for every booking</p>
			</div>
			<div class="card text-center">
				<div class="text-4xl mb-4">🔒</div>
				<h4 class="text-white font-display mb-2">Secure Booking</h4>
				<p class="text-luxury-gray-light text-sm">Your data is fully protected</p>
			</div>
			<div class="card text-center">
				<div class="text-4xl mb-4">⭐</div>
				<h4 class="text-white font-display mb-2">Flexible Terms</h4>
				<p class="text-luxury-gray-light text-sm">Change or modify anytime</p>
			</div>
		</div>
	</div>
</main>