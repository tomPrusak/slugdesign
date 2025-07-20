import parse from 'html-react-parser';
import type { HexagonProps } from './HexagonProps';
import { Link } from 'react-router-dom';

import './Hexagon.css';
function Hexagon({ content, settings, children }: HexagonProps) {
	return (
		<section className="row flex p-20 justify-center ">
			<div
				className={` grid grid-flow-col grid-cols-3 grid-rows-3 gap-8 ${
					settings?.center == true ? 'justify-center' : ''
				} ${settings?.left == true ? 'justify-start' : ''}${
					settings?.right == true ? 'justify-end' : ''
				}`}>
				{content
					? content?.map((txt) => (
                     
							<div className="hexagon ">
								<Link
									className="relative z-20 content-center"
									to="https://www.onet.pl">
									<b className='text-white text-md text-2xl '>{parse(txt.value)}</b>{' '}
								</Link>
							</div>
                         
					  ))
					: undefined}
				{children}
			</div>
		</section>
	);
}

export default Hexagon;

//grid grid-flow-col grid-rows-3 gap-8