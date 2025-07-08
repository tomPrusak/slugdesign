import { type ReactNode } from 'react';

export interface RepeatingProps {
	image: {
		src: string;
		alt?: string;
		bgColor?: string;
	};
	settings?: {
		height?: string;
		padding?: string;
		index?: number;
		positionAbsolute?: boolean;
		top?: string;
		flipImg?: boolean;
	};
	children?: ReactNode;
}
//React.CSSProperties //TO DO - change to proper types
