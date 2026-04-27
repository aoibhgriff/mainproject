import cars from '$lib/data/cars.json';
import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { booking } from '$lib/server/db/schema';
import { eq, and } from 'drizzle-orm';

export const load = async ({ params, locals }) => {

	if (!locals.user) {
		throw redirect(302, '/login');
	}

	const car = cars.find(c => c.id === params.id);

	if (!car) {
		throw redirect(302, '/cars');
	}

	return { car };
};

export const actions = {

	book: async ({ request, params, locals }) => {

		if (!locals.user) {
			throw redirect(302, '/login');
		}

		const form = await request.formData();

		const date = form.get('date');
		const eventType = form.get('eventType');
		const pickupLocation = form.get('pickupLocation');
		const duration = form.get('duration');
		const requests = form.get('requests');

		const car = cars.find(c => c.id === params.id);

		if (!car) {
			return {
				error: 'Invalid car selected.'
			};
		}

		if (!date || !pickupLocation || !duration || !eventType) {
			return {
				error: 'Please complete all required fields.'
			};
		}

		if (pickupLocation.length < 3) {
			return {
				error: 'Pickup location is too short.'
			};
		}

		if (pickupLocation.length > 100) {
			return {
				error: 'Pickup location is too long.'
			};
		}

		if (requests && requests.length > 250) {
			return {
				error: 'Special requests must be under 250 characters.'
			};
		}

		const existing = db
			.select()
			.from(booking)
			.where(
				and(
					eq(booking.carId, car.id),
					eq(booking.date, date),
					eq(booking.status, 'approved')
				)
			)
			.get();

		if (existing) {
			return {
				error: 'This vehicle is already booked for that date.'
			};
		}

		await db.insert(booking).values({
			userId: locals.user.id,
			userName: locals.user.name,
			carId: car.id,
			carName: car.name,
			date,
			eventType,
			pickupLocation,
			duration,
			requests,
			status: 'pending'
		});

		throw redirect(302, '/mybookings');

	}
};