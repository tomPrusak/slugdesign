import Button from '../../../components/Button/Button';
import ContentBlock from '../../../components/ContentBlock/ContentBlock';

import { type ContentBlockProps } from '../../../components/ContentBlock/ContentBlockProps';

function HelloSection(props: ContentBlockProps) {
	// const responsiveMac = 'src/assets/images/main-page/responsiveMac.png';

	return (
		<div className=" bg-black relative z-50">
			<ContentBlock
				header={props.header}
				subHeader={props.subHeader}
				content={props.content}>
				{/* <img
					src={responsiveMac}
					alt=""
				/> */}
				<Button text="Contact Us"></Button>
				<Button text="Discover More About Slugdesing!"></Button>
			</ContentBlock>
		</div>
	);
}

export default HelloSection;
