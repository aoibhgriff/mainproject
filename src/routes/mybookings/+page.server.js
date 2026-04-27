import { db } from '$lib/server/db';
import { booking } from '$lib/server/db/schema';
import { eq, and } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {

	if (!locals.user) {
		throw redirect(302, '/login');
	}

	const bookings = db
		.select()
		.from(booking)
		.where(eq(booking.userId, locals.user.id))
		.all();

	return { bookings };
};

export const actions = {

	cancel: async ({ request, locals }) => {

		const form = await request.formData();

		await db
			.delete(booking)
			.where(
				and(
					eq(booking.id, form.get('id')),
					eq(booking.userId, locals.user.id)
				)
			);

		return { success: true };
	}
};