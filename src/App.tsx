import "css-wipe";
import styles from "./App.module.css";
import jsonData from "./data/pokemon-gen1.json";
import type { Pokemon } from "./types";
import { Header } from "./components/Header";
import { Tag } from "./components/Tag";
import { useState } from "react";

const data = jsonData as Pokemon[];

const pokemonTypes = [
	...new Set(
		data.flatMap((pokemon) => pokemon.types.map((type) => type.type_name))
	),
];

function App() {
	const [selectedFilters, setSelectedFilters] = useState<Array<string>>([]);

	const createFilterClickHandler = (pokemonType: string) => () => {
		if (selectedFilters.includes(pokemonType)) {
			setSelectedFilters(
				selectedFilters.filter((type) => type !== pokemonType)
			);
		} else {
			setSelectedFilters([...selectedFilters, pokemonType]);
		}
	};

	return (
		<>
			<Header />
			<main className={styles.content}>
				<div className={styles.filterContainer}>
					{pokemonTypes.map((pokemonType) => (
						<Tag
							key={pokemonType}
							name={pokemonType}
							active={selectedFilters.includes(pokemonType)}
							onClick={createFilterClickHandler(pokemonType)}
						/>
					))}
				</div>
				<div className={styles.listContainer}>Pokemon here!</div>
			</main>
		</>
	);
}

export default App;
