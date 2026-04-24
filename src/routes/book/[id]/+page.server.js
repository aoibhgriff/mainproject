import cars from '$lib/data/cars.json';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params, locals }) => {

	if (!locals.user) {
		throw redirect(302, '/login');
	}

	const car = cars.find(c => c.id === params.id);

	return {
		car
	};
};

export const actions = {
	book: async ({ request, params, locals }) => {

		if (!locals.user) {
			throw redirect(302, '/login');
		}

		const form = await request.formData();

		console.log("Booking by:", locals.user.name);
		console.log("Car:", params.id);
		console.log("Date:", form.get('date'));

		return { success: true };
	}
};