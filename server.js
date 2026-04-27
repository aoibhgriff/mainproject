import express from 'express';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Load cars.json
const cars = JSON.parse(
	fs.readFileSync('./src/lib/data/cars.json', 'utf-8')
);

app.get('/cars', (req, res) => {
	res.json(cars);
});

app.get('/cars/:id', (req, res) => {

	const car = cars.find(c => c.id === req.params.id);

	if (!car) {
		return res.status(404).json({
			message: 'Car not found'
		});
	}

	res.json(car);
});


app.post('/cars', (req, res) => {

	const {
		name,
		price,
		image,
		seats,
		colour,
		category,
		description
	} = req.body;

	const newCar = {
		id: String(cars.length + 1),
		name,
		price,
		image,
		seats,
		colour,
		category,
		description
	};

	cars.push(newCar);

	res.status(201).json(newCar);
});

app.delete('/cars/:id', (req, res) => {

	const index = cars.findIndex(c => c.id === req.params.id);

	if (index === -1) {
		return res.status(404).json({
			message: 'Car not found'
		});
	}

	const deleted = cars.splice(index, 1);

	res.json(deleted[0]);
});


app.listen(PORT, () => {
	console.log(`Car API Server running on port ${PORT}`);
});