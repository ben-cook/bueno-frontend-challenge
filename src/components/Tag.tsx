import styles from "./Tag.module.css";

interface TagProps {
	name: string;
	active?: boolean;
}

export const Tag = ({ name, active = false }: TagProps) => {
	return (
		<div
			className={styles.tag}
			style={{
				borderColor: `var(--color-type-${name})`,
				color: active ? `var(--color-white)` : `var(--color-type-${name})`,
			}}
		>
			{name}
		</div>
	);
};
