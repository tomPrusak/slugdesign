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
				{/* <section className="text-center p-20">
					<h2>Graphic Design & Web Developing</h2>
					<p>
						Slugdesign is a Freelance Graphic Design & Web Developing studio
						based in Ireland Co.Kerry. We work hard at providing quality web
						resources, online advertising and clean responsive design. Find us
						on social media, find us in Kerry
					</p>
				</section> */}

				<ContentBlock
					header={props.header}
					subHeader={props.subHeader}
					content={props.content}></ContentBlock>

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
