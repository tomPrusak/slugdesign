import { Fragment } from 'react/jsx-runtime';
import RepeatingBlock from '../../../components/RepeatingBlock/RepeatingBlock';
import ContentBlock from '../../../components/ContentBlock/ContentBlock';
import { type ContentBlockProps } from '../../../components/ContentBlock/ContentBlockProps';

function DesDevSection(props: ContentBlockProps) {
	const repeatTri = 'src/assets/images/repTriBlack.png';
	const repeatNoise = 'src/assets/images/img-noise.png';

	return (
		<Fragment>
			<RepeatingBlock image={{ src: repeatNoise }}>
				<ContentBlock
					header={props.header}
					subHeader={props.subHeader}
					content={props.content}
					settings={{txtCenter:true}}></ContentBlock>

				<RepeatingBlock
					image={{ src: repeatTri }}
					settings={{
						height: '37px',
						zIndex: 20,
					}}></RepeatingBlock>
			</RepeatingBlock>
		</Fragment>
	);
}

export default DesDevSection;
