import RepeatingBlock from '../RepeatingBlock/RepeatingBlock';

function Footer() {
	const repeatTri = 'src/assets/images/repTriBlack.png';

	return (
		<footer className="grid grid-flow-row relative">
			<RepeatingBlock
				image={{ src: repeatTri }}
				settings={{
					height: '38px',
					positionAbsolute: true,
					top: '-38px',
					zIndex: 50,
				}}></RepeatingBlock>
			<div className="bg-black text-center w-screen pt-[60px] pb-[20px]  ">
				<p>
					© Drew & Coded by slugdesign. Freelance Design, Kerry 2015. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
