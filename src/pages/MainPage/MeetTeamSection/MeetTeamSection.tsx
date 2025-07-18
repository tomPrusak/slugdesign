import './MeetTheTeam.css';

import RepeatingBlock from '../../../components/RepeatingBlock/RepeatingBlock';
import Button from '../../../components/Button/Button';
import { Fragment } from 'react/jsx-runtime';
import type { ContentBlockProps } from '../../../components/ContentBlock/ContentBlockProps';
import ContentBlock from '../../../components/ContentBlock/ContentBlock';

function MeetTeamSection(props: ContentBlockProps) {
	const repeatStalactite = 'src/assets/images/main-page/repCaveStal.png';
	const repeatStones = 'src/assets/images/repStone.png';
	const repeatCaveMountain = 'src/assets/images/main-page/repCaveMountain.png';
	const river = 'src/assets/images/main-page/anRiver.png';

	return (
		<Fragment>
			<div className="row flex justify-center z-20 relative py-20 bg-[#20100c]">
				<ContentBlock
					header={props.header}
					subHeader={props.subHeader}
					content={props.content}></ContentBlock>
			</div>
			<RepeatingBlock image={{ src: repeatStones, bgColor: '#111010' }}>
				<RepeatingBlock
					image={{ src: repeatStalactite }}
					settings={{
						height: '49px',
						zIndex: 20,
					}}></RepeatingBlock>
				<div className="py-50">
					<RepeatingBlock
						image={{ src: repeatCaveMountain }}
						settings={{ height: '223px' }}>
						<section className="row">
							<div className="box-border w-[321px] h-[148px] absolute left-120 top-9 bg-[url(assets/images/main-page/anCaveSigns.png)]"></div>
							<div className="box-border w-[270px] h-[45px] absolute right-7  top-41 z-20 bg-[url(assets/images/main-page/elbridge.png)]"></div>
						</section>
					</RepeatingBlock>
				</div>
				<RepeatingBlock
					image={{ src: repeatStalactite }}
					settings={{
						height: '49px',
						zIndex: 20,
						flipImg: true,
					}}></RepeatingBlock>
			</RepeatingBlock>

			<div className="row  relative z-20 bg-[#20100c]">
				<div className="justify-center flex py-20">
					<Button text="See Who We Are"></Button>
					<Button text="Serices We Offer"></Button>
				</div>

				<RepeatingBlock
					image={{ src: river }}
					settings={{
						height: '47px',
					}}></RepeatingBlock>
			</div>
		</Fragment>
	);
}

export default MeetTeamSection;
