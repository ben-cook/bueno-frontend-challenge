import "css-wipe";
import styles from "./App.module.css";
import jsonData from "./data/pokemon-gen1.json";
import type { Pokemon } from "./types";
import { Header } from "./components/Header";

const data = jsonData as Pokemon[];

function App() {
	return (
		<>
			<Header />
			<main className={styles.content}>
				<p>Your content here!</p>
				<div className={styles.listContainer}>Pokemon here!</div>
			</main>
		</>
	);
}

export default App;
