import type { ReactNode } from 'react';
import { type ButtonProps } from '../Button/ButtonProps';
export interface ContentBlockProps {
	header?: string;
	subHeader?: string;
	buttons?: ButtonProps;
	content?: ContentProps[];
	settings?: SettingsProps;
	section?: string;
	children?: ReactNode;
}
export interface SettingsProps {
	center?: boolean;
	left?: boolean;
	right?: boolean;
}
export interface ContentProps {
	value: string;
	image?: string;
}
