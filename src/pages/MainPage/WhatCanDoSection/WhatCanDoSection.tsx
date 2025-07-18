import Button from '../../../components/Button/Button';
import ContentBlock from '../../../components/ContentBlock/ContentBlock';
import type { ContentBlockProps } from '../../../components/ContentBlock/ContentBlockProps';
import Hexagon from '../../../components/Hexagon/Hexagon';
import RepeatingBlock from '../../../components/RepeatingBlock/RepeatingBlock';

function WhatCanDoSection(props: ContentBlockProps) {
	const repeatStonesKex = 'src/assets/images/repStoneKex.png';
	const repeatKex = 'src/assets/images/main-page/repKex.png';
	const repeatStalctics = 'src/assets/images/main-page/repStalactics.png';

	return (
		<RepeatingBlock image={{ src: repeatStonesKex, bgColor: '#321d00' }}>
			<RepeatingBlock
				image={{ src: repeatStalctics }}
				settings={{ height: '64px', zIndex: 20 }}></RepeatingBlock>

			<ContentBlock
				header={props.header}
				subHeader={props.subHeader}>
				<Hexagon content={props.content}></Hexagon>
				<Button text="Work With Us"></Button>
			</ContentBlock>

			<RepeatingBlock
				image={{ src: repeatKex }}
				settings={{ height: '91px', zIndex: 20 }}></RepeatingBlock>
		</RepeatingBlock>
	);
}

export default WhatCanDoSection;
