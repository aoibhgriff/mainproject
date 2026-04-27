<script>
	import { page } from '$app/stores';
	let { data } = $props();
</script>

<nav class="bg-luxury-dark border-b border-luxury-charcoal sticky top-16 md:top-20 z-40">
	<div class="max-w-7xl mx-auto px-4 flex items-center gap-3 h-14 md:h-16 overflow-x-auto">
		<a 
			href="/" 
			class="nav-link whitespace-nowrap flex-shrink-0"
			class:active={$page.url.pathname === '/'}
		>
			Home
		</a>
		<a 
			href="/cars" 
			class="nav-link whitespace-nowrap flex-shrink-0"
			class:active={$page.url.pathname === '/cars'}
		>
			Our Fleet
		</a>

		{#if data.isLoggedIn}
			<a 
				href="/mybookings" 
				class="nav-link whitespace-nowrap flex-shrink-0"
				class:active={$page.url.pathname === '/mybookings'}
			>
				My Bookings
			</a>
		{/if}

		{#if data.user?.category === 'elite'}
			<a 
				href="/admin" 
				class="nav-link whitespace-nowrap flex-shrink-0"
				class:active={$page.url.pathname === '/admin'}
			>
				Admin
			</a>
		{/if}
	</div>
</nav>

<style>
	.nav-link {
		padding: 0.5rem 0.875rem;
		border-radius: 4px;
		background-color: transparent;
		color: #ffffff;
		font-family: 'Raleway', sans-serif;
		font-weight: 600;
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		border: 1px solid transparent;
		transition: all 0.3s ease;
		text-decoration: none;
		display: inline-block;
	}

	.nav-link:hover {
		background-color: rgba(212, 175, 55, 0.1);
		color: #D4AF37;
		border-color: rgba(212, 175, 55, 0.3);
	}

	:global(.nav-link.active) {
		color: #D4AF37 !important;
		background-color: rgba(212, 175, 55, 0.15) !important;
		border-color: rgba(212, 175, 55, 0.4) !important;
	}
</style>