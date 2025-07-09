import { Children } from 'react';

function Elevator({ children }) {
	const elevatorTunel = 'src/assets/images/main-page/elevator/repElevator.png';

	return (
		<section className=" relative ">
			<div
				className="bg-[url(assets/images/main-page/elevator/repElevator.png)] w-[228px] absolute min-h-full 
  bg-repeat-y right-12 top-0 z-10"></div>

			{children}
		</section>
	);
}

export default Elevator;
