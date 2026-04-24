import cars from '$lib/data/cars.json';

export function load({ params }) {
    const car = cars.find(c => String(c.id) === String(params.id));
    
    if(!car){
        return {
            status: 404
        };
    }
    return{
        car
    };
}