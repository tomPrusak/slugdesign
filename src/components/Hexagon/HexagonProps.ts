import { type ContentProps } from '../ContentBlock/ContentBlockProps';
import { type SettingsProps } from '../ContentBlock/ContentBlockProps';
import type { ReactNode } from 'react';
export interface HexagonProps {
	content?: ContentProps[];
	settings?: SettingsProps;
	children?: ReactNode;
}
