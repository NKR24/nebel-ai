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
		background: #0b0c12 radial-gradient(#0f151e 0%, #090a0f 100%);
	}

	:global(h1, h2) {
		margin: 0;
	}
</style>
