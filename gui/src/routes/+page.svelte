<main class="page">
	<h1 class="title">Welcome to Nebel.</h1>
	<h2 class="lowTitle">Easy Solutions for Your Business and Personal Needs</h2>
	<button class="button">
		<span>Contact Us</span>
	</button>
</main>

<style lang="scss">
	.page {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.container {
		width: 7.92vw;
		height: 3.18vw;
	}

	.container:hover {
		transform: scale(1.1);
	}

	.button {
		z-index: 3;
		margin-top: 34px;
		border-radius: 7px;
		opacity: 1;
		background-color: rgba(255, 255, 255, 1);
		box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
		width: 134px;
		height: 62px;

		color: rgba(0, 0, 0, 1);
		font-size: 20px;
		font-weight: 400;
		text-align: center;

		@media (max-width: 768px) {
			position: fixed;
			bottom: 82px;
			right: 15px;
			width: 99px;
			height: 39px;
			font-size: 15px;
		}
	}

	.lowTitle {
		opacity: 1;
		color: rgba(255, 255, 255, 1);
		font-weight: 300;
		text-align: center;

		font-size: clamp(
			1.147321025468409rem,
			calc(
				1.057321025468409rem +
					((4.449725439999998 - 3.747321025468409) * ((100vw - 20rem) / (96 - 20)))
			),
			2.449725439999998rem
		);

		@media (max-width: 768px) {
			font-size: 15px;
			width: 205px;
		}
	}

	.title {
		// font color
		color: #775be2;
		background-image: -webkit-linear-gradient(-75deg, #775be2 25%, #ce59b6 65%);
		background-clip: text;
		text-fill-color: transparent;
		-webkit-text-fill-color: transparent;
		font-weight: 900;

		// glow effect
		filter: drop-shadow(0px 0px 80px rgba(206, 89, 182, 0.4));

		// font size
		font-size: clamp(
			3.247321025468409rem,
			calc(
				3.247321025468409rem +
					((6.449725439999998 - 3.247321025468409) * ((100vw - 20rem) / (96 - 20)))
			),
			6.449725439999998rem
		);

		@media (max-width: 768px) {
			font-size: clamp(
				2.247321025468409rem,
				calc(
					2.247321025468409rem +
						((4.449725439999998 - 2.247321025468409) * ((100vw - 20rem) / (96 - 20)))
				),
				4.449725439999998rem
			);
		}
	}
</style>
