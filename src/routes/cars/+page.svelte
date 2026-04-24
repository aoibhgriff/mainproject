<script>
    import cars from '$lib/data/cars.json';
	let { data } = $props();
</script>

{#each cars as car}
    <div>
        <h2>{car.name}</h2>
        <a href={`/cars/${car.id}`}>View Details</a>
    </div>
{/each}
