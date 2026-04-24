import cars from '$lib/data/cars.json';
import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { booking } from '$lib/server/db/schema';

export const load = async ({ params, locals }) => {

	if (!locals.user) {
		throw redirect(302, '/login');
	}

	const car = cars.find(c => c.id === params.id);

	return { car };
};

export const actions = {
	book: async ({ request, params, locals }) => {

		if (!locals.user) {
			throw redirect(302, '/login');
		}

		const form = await request.formData();

		const car = cars.find(c => c.id === params.id);

		await db.insert(booking).values({
			userId: locals.user.id,
			userName: locals.user.name,

			carId: car.id,
			carName: car.name,

			date: form.get('date'),
			eventType: form.get('eventType'),

			status: 'pending'
		});

		return {
			success: true
		};
	}
};