import { Pokemon, StatName } from "../types";
import styles from "./PokemonTable.module.css";
import { Tag } from "./Tag";

const statistics = [
	{
		displayName: "Attack",
		statName: "attack",
	},
	{
		displayName: "Sp. Attack",
		statName: "special-attack",
	},
	{
		displayName: "Defense",
		statName: "defense",
	},
	{
		displayName: "Sp. Defense",
		statName: "special-defense",
	},
	{
		displayName: "Speed",
		statName: "speed",
	},
	{
		displayName: "Hit Points",
		statName: "hp",
	},
] satisfies Array<{ displayName: string; statName: StatName }>;

const getPokemonStat = (pokemon: Pokemon, statName: StatName) => {
	return pokemon.stats.filter((stat) => stat.stat_name === statName).at(0)
		?.base_stat;
};

interface PokemonTableProps {
	pokemons: Array<Pokemon>;
	selectedFilters: Array<string>;
}

export const PokemonTable = ({
	pokemons,
	selectedFilters,
}: PokemonTableProps) => {
	const filteredPokemons =
		selectedFilters.length === 0
			? pokemons
			: pokemons.filter((pokemon) =>
					pokemon.types.some((type) => selectedFilters.includes(type.type_name))
			  );
	return (
		<table>
			<thead>
				<tr>
					<td className={styles.textLeft}>Pokemon</td>
					<td className={styles.textLeft}>Type(s)</td>
					{statistics.map(({ displayName }) => (
						<td key={displayName}>{displayName}</td>
					))}
				</tr>
			</thead>
			<tbody>
				{filteredPokemons.map((pokemon) => (
					<tr key={pokemon.id}>
						<td className={styles.pokemonName}>
							<div className={styles.pokemonImageWrapper}>
								<img src={pokemon.sprite.front_url} alt={pokemon.name} />
							</div>
							<span>{pokemon.name}</span>
						</td>
						<td className={styles.pokemonTypes}>
							{pokemon.types.map((type) => (
								<Tag
									key={type.type_name}
									name={type.type_name}
									active={selectedFilters.includes(type.type_name)}
								/>
							))}
						</td>
						{statistics.map(({ statName }) => (
							<Statistic
								key={statName}
								value={getPokemonStat(pokemon, statName)}
							/>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

interface StatisticProps {
	value?: number;
}

const Statistic = ({ value }: StatisticProps) => {
	return (
		<td
			className={styles.statistic}
			style={{ color: value && value >= 90 ? `var(--color-red)` : undefined }}
		>
			{value}
		</td>
	);
};
