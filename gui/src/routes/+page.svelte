<script>
	import Navbar from '../components/Navbar/Navbar.svelte';
	import styles from './index.module.scss';
	import '../main.scss';
</script>

<main class={styles.page}>
	<Navbar />
	<h1 class={styles.title}>Welcome to Nebel.</h1>
	<h2 class={styles.lowTitle}>Easy Solutions for Your Business and Personal Needs </h2>
	<button class={styles.button}>
		<span>Contact Us</span>
	</button>
</main>
