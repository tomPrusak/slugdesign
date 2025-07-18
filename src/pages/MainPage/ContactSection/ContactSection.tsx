import RepeatingBlock from '../../../components/RepeatingBlock/RepeatingBlock';
import Button from '../../../components/Button/Button';
import { Fragment } from 'react/jsx-runtime';
import type { ContentBlockProps } from '../../../components/ContentBlock/ContentBlockProps';
import ContentBlock from '../../../components/ContentBlock/ContentBlock';

function ContactSection(props: ContentBlockProps) {
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
						zIndex: 20,
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
					zIndex: 20,
				}}></RepeatingBlock>
			<RepeatingBlock
				image={{ src: repeatNoise }}
				settings={{ zIndex: 20 }}>
				<ContentBlock
					header={props.header}
					subHeader={props.subHeader}
					content={props.content}></ContentBlock>
			</RepeatingBlock>
		</Fragment>
	);
}

export default ContactSection;
