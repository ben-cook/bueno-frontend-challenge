import styles from "./Tag.module.css";

interface TagProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	name: string;
	active?: boolean;
}

export const Tag = ({ name, active = false, ...rest }: TagProps) => {
	return (
		<button
			className={styles.tag}
			style={{
				borderColor: `var(--color-type-${name})`,
				color: active ? `var(--color-white)` : `var(--color-type-${name}-alt)`,
				backgroundColor: active
					? `var(--color-type-${name}-alt)`
					: `var(--color-white)`,
			}}
			{...rest}
		>
			{name}
		</button>
	);
};
