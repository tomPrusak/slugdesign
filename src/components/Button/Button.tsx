import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { type ButtonProps } from './ButtonProps';
function Button(props: ButtonProps) {
	return (
		<>
			<button
				style={{ background: props.color }}>
				{props.text} <FontAwesomeIcon icon="chevron-right" />
			</button>
		</>
	);
}

export default Button;
