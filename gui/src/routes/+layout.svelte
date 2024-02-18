<script>
	import Navbar from '../components/Navbar/Navbar.svelte';
	import Starfield from '../components/Starfield/Starfield.svelte';
</script>

<Starfield />
<Navbar />
<slot />

<style>
	:global(body) {
		font-family: 'specter', sans-serif;
		font-weight: 300;
		color: white;
	}

	:global(button) {
		all: unset;
	}

	:global(textarea) {
		all: unset;
	}

	:global(html, body, #app) {
		height: 100%;
		margin: 0;
	}

	:global(html) {
		background: #0c0e14 radial-gradient(#111921 0%, #090A0F 100%);
	}

	:global(h1, h2) {
		margin: 0;
	}
</style>
