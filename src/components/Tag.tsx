import { type ElementType } from "react";
import styles from "./Tag.module.css";

/** TagProps is not a completely accurate type definition, because it always extends HTMLDivElement. */
interface TagProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	name: string;
	active?: boolean;
	as?: ElementType;
}

export const Tag = (props: TagProps) => {
	const { name, active = false, ...rest } = props;
	const Component = props.as || "div";
	return (
		<Component
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
		</Component>
	);
};

type FilterProps = Omit<TagProps, "as">;

export const Filter = (props: FilterProps) => {
	return <Tag as="button" role="button" {...props} />;
};
