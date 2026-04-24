import { db } from '$lib/server/db';
import { booking } from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const load = async ({ locals }) => {

	// Must be logged in
	if (!locals.user) {
		throw redirect(302, '/login');
	}

	// Must be elite user (admin)
	if (locals.user.category !== 'elite') {
		throw redirect(302, '/');
	}

	const bookings = db
		.select()
		.from(booking)
		.all();

	return {
		bookings
	};
};

export const actions = {

	approve: async ({ request }) => {

		const form = await request.formData();

		await db
			.update(booking)
			.set({ status: 'approved' })
			.where(eq(booking.id, form.get('id')));

		return { success: true };
	},

	reject: async ({ request }) => {

		const form = await request.formData();

		await db
			.delete(booking)
			.where(eq(booking.id, form.get('id')));

		return { success: true };
	}
};