import "css-wipe";
import jsonData from "./data/pokemon-gen1.json";
import type { Pokemon } from "./types";
import pokemonLogo from "./img/pokemon-logo.png";
import styles from "./App.module.css";

const data = jsonData as Pokemon[];

function App() {
	return (
		<>
			<nav className={styles.nav}>
				<img alt="Pokémon Logo" className={styles.logo} src={pokemonLogo} />
			</nav>
			<main className={styles.content}>
				<p>Your content here!</p>
				<div className={styles.listContainer}>Pokemon here!</div>
			</main>
		</>
	);
}

export default App;
