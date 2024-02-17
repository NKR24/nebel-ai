<script>
	import axios from 'axios';

	let showForm = false;

	function toggleForn(){
		showForm = !showForm
	}

	async function sendData(email, name, commentary) {
		try {
			const response = await axios.post('https://api.nebel.ai/contact', {
				email: email,
				name: name,
				commentary: commentary
			});
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	}

	// Пример вызова функции при отправке формы
	function handleSubmit(event) {
		event.preventDefault();
		const email = event.target.elements.email.value;
		const name = event.target.elements.name.value;
		const commentary = event.target.elements.commentary.value;
		sendData(email, name, commentary);
	}
</script>

<form on:submit={handleSubmit}>
	<input type="email" name="email" placeholder="Email" required>
	<input type="text" name="name" placeholder="Name" required>
	<textarea name="commentary" placeholder="Commentary" required></textarea>
	<button type="submit">Submit</button>
</form>

<style>
	form{
			margin-top: 20px;
			display: flex;
			flex-direction: column;
	}
</style>