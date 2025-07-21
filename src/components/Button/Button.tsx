import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { type ButtonProps } from './ButtonProps';
function Button({ settings, text }: ButtonProps) {
	return (
		<>
			<button
				className={` border-1 px-10 py-3 m-3 rounded-xl cursor-pointer text-white transition ease-in-out duration-500  hover:bg-sluggreen-300   hover:border-sluggreen-100 hover:shadow-lg   ${
					settings?.oragneColor == true
						? ' border-slugornage-200 bg-slugornage-200 shadow-none hover:bg-slugorange-300   hover:border-slugornage-200'
						: 'border-white shadow-sluggreen-300 '
				} `}>
				{text}
				<span className="ml-7">
					<FontAwesomeIcon icon="chevron-right" />{' '}
				</span>
			</button>
		</>
	);
}

export default Button;
