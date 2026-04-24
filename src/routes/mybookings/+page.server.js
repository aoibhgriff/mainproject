import { db } from '$lib/server/db';
import { booking } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
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

	return {
		bookings
	};
};