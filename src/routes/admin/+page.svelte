<script>
	let { data } = $props();

	// Status color mapping
	const statusColor = (status) => {
		switch(status) {
			case 'pending': return 'bg-yellow-900 text-yellow-200';
			case 'approved': return 'bg-green-900 text-green-200';
			case 'rejected': return 'bg-red-900 text-red-200';
			default: return 'bg-blue-900 text-blue-200';
		}
	};

	const statusIcon = (status) => {
		switch(status) {
			case 'pending': return '⏳';
			case 'approved': return '✅';
			case 'rejected': return '❌';
			default: return '📋';
		}
	};
</script>

<main class="bg-luxury-black min-h-screen py-16 px-4">
	<div class="max-w-7xl mx-auto">
		<!-- Page Header -->
		<div class="mb-12">
			<div class="flex items-center gap-4 mb-4">
				<h1 class="text-6xl font-display text-white">Admin Dashboard</h1>
				<span class="bg-accent-gold text-luxury-black px-4 py-2 rounded-lg font-bold text-sm">Elite</span>
			</div>
			<p class="text-luxury-gray-light text-lg">Manage booking requests and customer reservations</p>
		</div>

		<!-- Gold Divider -->
		<div class="divider"></div>

		<!-- Statistics Cards -->
		{#if data.bookings.length > 0}
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
				<div class="card text-center">
					<p class="text-4xl font-display text-accent-gold mb-2">{data.bookings.filter(b => b.status === 'pending').length}</p>
					<p class="text-white font-display mb-1">Pending</p>
					<p class="text-luxury-gray-light text-sm">Awaiting approval</p>
				</div>
				<div class="card text-center">
					<p class="text-4xl font-display text-green-400 mb-2">{data.bookings.filter(b => b.status === 'approved').length}</p>
					<p class="text-white font-display mb-1">Approved</p>
					<p class="text-luxury-gray-light text-sm">Confirmed bookings</p>
				</div>
				<div class="card text-center">
					<p class="text-4xl font-display text-red-400 mb-2">{data.bookings.filter(b => b.status === 'rejected').length}</p>
					<p class="text-white font-display mb-1">Rejected</p>
					<p class="text-luxury-gray-light text-sm">Declined requests</p>
				</div>
			</div>

			<div class="divider"></div>
		{/if}

		{#if data.bookings.length === 0}
			<!-- Empty State -->
			<div class="text-center py-20">
				<div class="text-7xl mb-6">📭</div>
				<h2 class="text-3xl font-display text-white mb-4">No Bookings</h2>
				<p class="text-luxury-gray-light text-lg">
					All booking requests have been processed or there are no pending reservations
				</p>
			</div>

		{:else}
			<!-- Bookings List -->
			<div class="space-y-6">
				{#each data.bookings as booking}
					<div class="card border-l-4 border-l-accent-gold">
						<!-- Header with Status -->
						<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-luxury-charcoal">
							<div>
								<h3 class="text-2xl font-display text-white">{booking.userName}</h3>
								<p class="text-accent-gold text-sm mt-2">Request ID: #{booking.id}</p>
							</div>
							<span class="inline-block px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest {statusColor(booking.status)}">
								{statusIcon(booking.status)} {booking.status}
							</span>
						</div>

						<!-- Booking Details Grid -->
						<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
							<div>
								<p class="text-accent-gold text-xs uppercase tracking-widest font-semibold mb-2">Vehicle</p>
								<p class="text-white font-display">{booking.carName}</p>
							</div>
							<div>
								<p class="text-accent-gold text-xs uppercase tracking-widest font-semibold mb-2">Date</p>
								<p class="text-white">{booking.date}</p>
							</div>
							<div>
								<p class="text-accent-gold text-xs uppercase tracking-widest font-semibold mb-2">Event Type</p>
								<p class="text-white">{booking.eventType}</p>
							</div>
							<div>
								<p class="text-accent-gold text-xs uppercase tracking-widest font-semibold mb-2">Package</p>
								<p class="text-white">{booking.package}</p>
							</div>
						</div>

						<!-- Additional Details -->
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
							<div>
								<p class="text-accent-gold text-xs uppercase tracking-widest font-semibold mb-2">Pickup Location</p>
								<p class="text-luxury-gray-light">{booking.pickupLocation}</p>
							</div>
							<div>
								<p class="text-accent-gold text-xs uppercase tracking-widest font-semibold mb-2">Duration</p>
								<p class="text-luxury-gray-light">{booking.duration}</p>
							</div>
						</div>

						<!-- Special Requests -->
						{#if booking.requests}
							<div class="bg-luxury-dark rounded-lg p-4 mb-8">
								<p class="text-accent-gold text-xs uppercase tracking-widest font-semibold mb-2">Special Requests</p>
								<p class="text-luxury-gray-light text-sm italic">{booking.requests}</p>
							</div>
						{/if}

						<!-- Action Buttons -->
						{#if booking.status === 'pending'}
							<form method="POST" class="flex flex-col sm:flex-row gap-3">
								<input type="hidden" name="id" value={booking.id} />
								<button 
									formaction="?/approve"
									class="btn btn-gold py-3 px-6 flex-1"
								>
									✓ Approve
								</button>
								<button 
									formaction="?/reject"
									class="btn btn-outline py-3 px-6 flex-1"
								>
									✗ Reject
								</button>
							</form>
						{:else if booking.status === 'approved'}
							<div class="bg-green-900 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg p-4">
								<p class="text-green-300 text-sm font-semibold">
									✓ This booking has been approved
								</p>
							</div>
						{:else if booking.status === 'rejected'}
							<div class="bg-red-900 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg p-4">
								<p class="text-red-300 text-sm font-semibold">
									✗ This booking has been rejected
								</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</main>