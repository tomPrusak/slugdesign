import RepeatingBlock from '../RepeatingBlock/RepeatingBlock';

function Footer() {
	const repeatTri = 'src/assets/images/repTriBlack.png';

	return (
		<footer className="relative">
			<RepeatingBlock
				image={{ src: repeatTri }}
				settings={{
					height: '38px',
					positionAbsolute: true,
					top: '-38px',
					zIndex: 50,
				}}></RepeatingBlock>
			<section className="grid grid-cols-4 gap-2 py-10 bg-black">
				<div className="col-span-4 col-start-2 col-end-4 text-center">
					<p className="text-white">
						© Drew & Coded by <em className="gr">slugdesign</em>. Freelance
						Design, Kerry 2015. All rights reserved.
					</p>
				</div>
			</section>
		</footer>
	);
}

export default Footer;
