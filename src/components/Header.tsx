import styles from "./Header.module.css";
import pokemonLogo from "../img/pokemon-logo.png";

export const Header = () => {
	return (
		<header>
			<img className={styles.logo} src={pokemonLogo} alt="Pokémon Logo" />
		</header>
	);
};
