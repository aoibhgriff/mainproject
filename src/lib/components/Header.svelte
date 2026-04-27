<script>
	let { data } = $props();
</script>

<header class="bg-luxury-black border-b-2 border-accent-gold py-4 sticky top-0 z-50">
	<div class="max-w-7xl mx-auto px-4 flex justify-between items-center gap-2">
		<!-- Logo/Title -->
		<div class="flex-1 text-center md:text-left">
			<h1 class="text-2xl md:text-3xl font-display text-white tracking-tight">Luxury Car Hire</h1>
			<p class="text-accent-gold text-xs font-sans tracking-wider mt-0.5 hidden sm:block">Premium Wedding & Executive Services</p>
		</div>

		<!-- User Section -->
		<div class="flex items-center gap-2 flex-shrink-0 mr-4">
			{#if data.isLoggedIn}
				<div class="text-right whitespace-nowrap">
					<p class="text-white font-sans text-xs md:text-sm leading-tight">Welcome, <strong>{data.user.name}</strong></p>
					<p class="text-accent-gold text-xs mt-0.5 uppercase tracking-widest font-semibold">{data.user.category}</p>
				</div>

				<form method="post" action="/logout" class="flex-shrink-0">
					<button type="submit" class="btn btn-outline text-xs md:text-sm py-2 px-3 md:px-4 whitespace-nowrap">Logout</button>
				</form>

			{:else}

				<p class="text-luxury-gray-light font-sans text-xs hidden sm:block whitespace-nowrap">Welcome, Guest</p>
				<a href="/login" class="btn btn-gold text-xs md:text-sm py-2 px-3 md:px-4 whitespace-nowrap flex-shrink-0">Login</a>

			{/if}
		</div>
	</div>
</header>

<style>
	header {
		box-shadow: 0 4px 12px rgba(212, 175, 55, 0.1);
	}
</style>