import Button from '../../../components/Button/Button';
import RepeatingBlock from '../../../components/RepeatingBlock/RepeatingBlock';

function WhatCanDoSection() {
	const repeatStonesKex = 'src/assets/images/repStoneKex.png';
	const repeatKex = 'src/assets/images/main-page/repKex.png';
	const repeatStalctics = 'src/assets/images/main-page/repStalactics.png';

	return (
		<section className="relative">
			<RepeatingBlock image={{ src: repeatStonesKex, bgColor: '#321d00' }}>
				<RepeatingBlock
					image={{ src: repeatStalctics }}
					settings={{ height: '64px' }}></RepeatingBlock>
				<div className="p-50 row flex">
					<h2>What We Can Do For You?</h2>
					<aside>
						<p>
							“ We can’t just design an item that looks great. We also have to
							anticipate how it is boxed up, distributed, and shipped, as well
							as whether or not a seventeen-year-old kid with a summer job can
							stock it on the store shelf without ruining it “
						</p>
					</aside>
				</div>
				<Button text="Work With Us"></Button>
				<RepeatingBlock
					image={{ src: repeatKex }}
					settings={{ height: '91px' }}></RepeatingBlock>
			</RepeatingBlock>
		</section>
	);
}

export default WhatCanDoSection;
