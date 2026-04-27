<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<main class="bg-luxury-black min-h-screen py-16 px-4 relative overflow-hidden">
	<!-- Subtle background image overlay -->
	<div class="absolute inset-0 opacity-10" style="background: url('/images/car2.jpg'); background-size: cover; background-position: center;"></div>
	
	<div class="max-w-md mx-auto relative z-10 py-16">
		<!-- Logo Section -->
		<div class="text-center mb-12">
			<h1 class="text-5xl font-display text-white mb-2">Luxury Car Hire</h1>
			<p class="text-accent-gold">Welcome Back</p>
		</div>

		<!-- Gold Divider -->
		<div class="h-0.5 bg-gradient-to-r from-transparent via-accent-gold to-transparent mb-12"></div>

		<!-- Login Form -->
		<form method="post" use:enhance class="space-y-6">
			<!-- Email Input -->
			<div>
				<label for="email" class="block text-white font-display text-sm mb-3 uppercase tracking-widest">
					Email Address
				</label>
				<input 
					id="email"
					type="email" 
					name="email" 
					required
					placeholder="your@email.com"
					class="w-full px-4 py-3 bg-luxury-dark border-2 border-luxury-charcoal text-white placeholder-luxury-gray-dark rounded-lg focus:border-accent-gold focus:outline-none transition-all duration-300"
				/>
			</div>

			<!-- Password Input -->
			<div>
				<label for="password" class="block text-white font-display text-sm mb-3 uppercase tracking-widest">
					Password
				</label>
				<input 
					id="password"
					type="password" 
					name="password" 
					required
					placeholder="••••••••"
					class="w-full px-4 py-3 bg-luxury-dark border-2 border-luxury-charcoal text-white placeholder-luxury-gray-dark rounded-lg focus:border-accent-gold focus:outline-none transition-all duration-300"
				/>
			</div>

			<!-- Error Message -->
			{#if form?.message}
				<div class="bg-red-900 bg-opacity-20 border border-red-500 rounded-lg p-4">
					<p class="text-red-400 text-sm">{form.message}</p>
				</div>
			{/if}

			<!-- Login Button -->
			<button type="submit" class="btn btn-gold w-full py-4 text-lg font-bold mt-8">
				Sign In
			</button>
		</form>

		<!-- Divider -->
		<div class="relative my-8">
			<div class="absolute inset-0 flex items-center">
				<div class="w-full border-t border-luxury-charcoal"></div>
			</div>
			<div class="relative flex justify-center text-sm">
				<span class="px-2 bg-luxury-black text-luxury-gray-medium">New to our service?</span>
			</div>
		</div>

		<!-- Register Link -->
		<p class="text-center text-luxury-gray-light">
			Don't have an account? <a href="/register" class="text-accent-gold hover:text-accent-gold-light font-semibold transition-colors">Create one</a>
		</p>

		<!-- Footer Info -->
		<div class="mt-12 p-6 bg-luxury-dark rounded-lg border border-luxury-charcoal">
			<p class="text-luxury-gray-light text-xs text-center leading-relaxed">
				Your login information is secure and encrypted. We never share your personal data.
			</p>
		</div>
	</div>
</main>
