import './DesignSection.css';
import Button from '../../../components/Button/Button';
import type { ContentBlockProps } from '../../../components/ContentBlock/ContentBlockProps';
import ContentBlock from '../../../components/ContentBlock/ContentBlock';

function DesignsSection(props: ContentBlockProps) {
	const bubleFire = 'src/assets/images/main-page/anBubleFire.png';
	const breenSchool = 'src/assets/images/main-page/breenschool.jpg';
	const allosales = 'src/assets/images/main-page/allosales.jpg';
	const polcutting = 'src/assets/images/main-page/polcutting.jpg';

	return (
		<div className="bg-gradient-to-t from-[#11708a] to-[#00a0b7] flex relative z-20">
			<div className="column w-screen">
				<ContentBlock
					header={props.header}
					subHeader={props.subHeader}
					content={props.content}
					>
					<Button text="Want To See More"></Button>
				</ContentBlock>
				<div className="row flex">
					<div className="bubles flex items-center justify-center">
						<figure>
							<a href="">
								<img
									src={polcutting}
									alt=""
								/>
							</a>
						</figure>
					</div>
					<div className="bubles flex items-center justify-center">
						<figure>
							<a href="">
								<img
									src={breenSchool}
									alt=""
								/>
							</a>
						</figure>
					</div>
					<div className="bubles flex items-center justify-center">
						<figure>
							<a href="">
								<img
									src={allosales}
									alt=""
								/>
							</a>
						</figure>
					</div>
				</div>
				<div className="justify-center flex opacity-10 ">
					<img
						src={bubleFire}
						alt="Logo"
					/>
				</div>
			</div>
		</div>
	);
}

export default DesignsSection;
