<nav class="nav">
	<div class="container">
		<div class="logo">
			<a href="/">
				<svg
					width="40"
					height="38"
					viewBox="0 0 40 38"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M13.6082 23.528L13.7162 38H0.702172V0.199997H14.3642L24.4622 14.348L26.4602 17.21L26.4062 14.348L26.2982 0.199997H39.3122V38H25.4882L15.0122 23.366L13.5542 21.26L13.6082 23.528Z"
						fill="white"
					/>
				</svg>
			</a>
		</div>
		<div class="pages">
			<a href="/about">
				<span class="text">About</span>
			</a>
			<a href="/portfolio">
				<span class="text">Portfolio</span>
			</a>
		</div>
	</div>
</nav>

<style lang="scss">
  .nav {
    flex-direction: column;
    display: flex;
    height: 100vh;
    z-index: 2;
    padding: 42px 58px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  @media (max-width: 768px) {
    .nav {
      padding: 100px 15px 12px 12px;
      flex-direction: column;
      justify-content: flex-end;
      bottom: 0;
    }
  }

  .container {
    height: 76px;
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 13px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    background-color: rgba(19, 22, 31, 0.9);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(16px);

    @media (max-width: 768px) {
      height: 50px;
    }
  }

  .logo {
    position: absolute;
    left: 20px;
    top: 19px;

    @media (max-width: 768px) {
      left: 17px;
      top: 0;
    }
  }

  .logo svg {
    @media (max-width: 768px) {
      width: 30px;
      height: 50px;
    }
  }

  .pages {
    z-index: 10;
    display: flex;
    column-gap: 17px;

    @media (max-width: 768px) {
      position: absolute;
      right: 20px;
      column-gap: 13px;
    }
  }

  .text {
    opacity: 1;
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    text-decoration: underline;

    @media (max-width: 768px) {
      opacity: 1;
      color: rgba(255, 255, 255, 1);
      font-size: 16px;
      font-weight: 700;
      text-align: center;
      text-decoration: underline;
    }
  }
</style>