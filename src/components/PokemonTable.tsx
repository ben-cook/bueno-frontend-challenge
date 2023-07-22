import { Pokemon, StatName } from "../types";
import styles from "./PokemonTable.module.css";

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

interface PokemonTableProps {
	pokemons: Array<Pokemon>;
}

export const PokemonTable = ({ pokemons }: PokemonTableProps) => {
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
		</table>
	);
};
