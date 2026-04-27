<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<main class="bg-luxury-black min-h-screen py-16 px-4 relative overflow-hidden">
	<!-- Subtle background image overlay -->
	<div class="absolute inset-0 opacity-10" style="background: url('/images/car3.jpg'); background-size: cover; background-position: center;"></div>
	
	<div class="max-w-md mx-auto relative z-10 py-16">
		<!-- Logo Section -->
		<div class="text-center mb-12">
			<h1 class="text-5xl font-display text-white mb-2">Luxury Car Hire</h1>
			<p class="text-accent-gold">Join Our Community</p>
		</div>

		<!-- Gold Divider -->
		<div class="h-0.5 bg-gradient-to-r from-transparent via-accent-gold to-transparent mb-12"></div>

		<!-- Registration Form -->
		<form method="post" use:enhance class="space-y-6">
			<!-- Name Input -->
			<div>
				<label for="name" class="block text-white font-display text-sm mb-3 uppercase tracking-widest">
					Full Name
				</label>
				<input 
					id="name"
					type="text" 
					name="name" 
					required
					placeholder="John Doe"
					class="w-full px-4 py-3 bg-luxury-dark border-2 border-luxury-charcoal text-white placeholder-luxury-gray-dark rounded-lg focus:border-accent-gold focus:outline-none transition-all duration-300"
				/>
			</div>

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
					Create Password
				</label>
				<input 
					id="password"
					type="password" 
					name="password" 
					required
					placeholder="••••••••"
					class="w-full px-4 py-3 bg-luxury-dark border-2 border-luxury-charcoal text-white placeholder-luxury-gray-dark rounded-lg focus:border-accent-gold focus:outline-none transition-all duration-300"
				/>
				<p class="text-luxury-gray-light text-xs mt-2">Minimum 8 characters recommended</p>
			</div>

			<!-- Error Message -->
			{#if form?.message}
				<div class="bg-red-900 bg-opacity-20 border border-red-500 rounded-lg p-4">
					<p class="text-red-400 text-sm">{form.message}</p>
				</div>
			{/if}

			<!-- Register Button -->
			<button type="submit" class="btn btn-gold w-full py-4 text-lg font-bold mt-8">
				Create Account
			</button>
		</form>

		<!-- Divider -->
		<div class="relative my-8">
			<div class="absolute inset-0 flex items-center">
				<div class="w-full border-t border-luxury-charcoal"></div>
			</div>
			<div class="relative flex justify-center text-sm">
				<span class="px-2 bg-luxury-black text-luxury-gray-medium">Already registered?</span>
			</div>
		</div>

		<!-- Login Link -->
		<p class="text-center text-luxury-gray-light">
			Have an account? <a href="/login" class="text-accent-gold hover:text-accent-gold-light font-semibold transition-colors">Sign in here</a>
		</p>

		<!-- Features -->
		<div class="mt-12 space-y-4">
			<div class="flex items-start gap-3">
				<span class="text-accent-gold text-xl mt-1">✓</span>
				<p class="text-luxury-gray-light text-sm">Access exclusive luxury vehicle collection</p>
			</div>
			<div class="flex items-start gap-3">
				<span class="text-accent-gold text-xl mt-1">✓</span>
				<p class="text-luxury-gray-light text-sm">Book and manage your reservations</p>
			</div>
			<div class="flex items-start gap-3">
				<span class="text-accent-gold text-xl mt-1">✓</span>
				<p class="text-luxury-gray-light text-sm">Enjoy priority customer support</p>
			</div>
		</div>
	</div>
</main>
