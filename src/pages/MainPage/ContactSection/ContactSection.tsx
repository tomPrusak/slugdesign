import RepeatingBlock from '../../../components/RepeatingBlock/RepeatingBlock';
import Button from '../../../components/Button/Button';
import { Fragment } from 'react/jsx-runtime';

function ContactSection() {
	const repeatNoise = 'src/assets/images/img-noise.png';
	const repeatStones = 'src/assets/images/repStone.png';
	const repeatFloor = 'src/assets/images/main-page/repFloor.jpg';
	const repeatUnderWater = 'src/assets/images/main-page/repUnderWater.png';

	const bottomOfficeLeft = 'src/assets/images/main-page/bottomOfficeLeft.png';
	const bottomOfficeRight = 'src/assets/images/main-page/bottomOfficeright.png';

	return (
		<Fragment>
			<RepeatingBlock image={{ src: repeatStones, bgColor: '#111010' }}>
				<RepeatingBlock
					image={{ src: repeatUnderWater }}
					settings={{
						height: '286px',
					}}></RepeatingBlock>
				<div className=" relative z-40 top-[20px] px-5">
					<div className="row flex">
						<img
							src={bottomOfficeLeft}
							alt="Logo"
						/>
						<div className="absolute bottom-[10px] right-[140px]">
							<img
								src={bottomOfficeRight}
								alt="Logo"
							/>
						</div>
					</div>
				</div>
			</RepeatingBlock>
			<RepeatingBlock
				image={{ src: repeatFloor }}
				settings={{
					height: '40px',
				}}></RepeatingBlock>
			<RepeatingBlock image={{ src: repeatNoise }}>
				<section className="text-center p-20">
					<h3>Let's make something great together</h3>
					<p>Get in touch with us and send some basic info for a quick quote</p>

					<Button
						text="Start The Business With Us"
						color="#D9420B"></Button>
				</section>
			</RepeatingBlock>
		</Fragment>
	);
}

export default ContactSection;
