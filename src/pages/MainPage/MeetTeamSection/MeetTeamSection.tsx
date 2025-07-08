import './MeetTheTeam.css';

import RepeatingBlock from '../../../components/RepeatingBlock/RepeatingBlock';
import Button from '../../../components/Button/Button';

function MeetTeamSection() {
	const repeatStalactite = 'src/assets/images/main-page/repCaveStal.png';
	const repeatStones = 'src/assets/images/repStone.png';
	const repeatCaveMountain = 'src/assets/images/main-page/repCaveMountain.png';

	return (
		<section className="relative">
			<div className="row flex justify-center py-20 bg-[#20100c]">
				<h1>Meet Our Team</h1>
				<aside>
					<h3>
						Who are we? <br /> Some information about us.
					</h3>
					<h3>Contact us via or simply complete our contact form…</h3>
				</aside>
			</div>
			<RepeatingBlock image={{ src: repeatStones, bgColor: '#111010' }}>
				<RepeatingBlock
					image={{ src: repeatStalactite }}
					settings={{
						height: '49px',
					}}></RepeatingBlock>
				<div className="py-50">
					<RepeatingBlock
						image={{ src: repeatCaveMountain }}
						settings={{ height: '223px' }}></RepeatingBlock>
				</div>
				<RepeatingBlock
					image={{ src: repeatStalactite }}
					settings={{
						height: '49px',
						flipImg: true,
					}}></RepeatingBlock>
			</RepeatingBlock>

			<div className="row flex justify-center py-20 bg-[#20100c]">
				<Button text="See Who We Are"></Button>
				<Button text="Serices We Offer"></Button>
			</div>
		</section>
	);
}

export default MeetTeamSection;
