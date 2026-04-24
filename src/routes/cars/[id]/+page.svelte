<script>
	let { data } = $props();
</script>

<h1>{data.car.name}</h1>
<p>Price : {data.car.price}</p>

<a href={`/book/${data.car.id}`}>Book This Car</a>