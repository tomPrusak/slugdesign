import { Fragment } from 'react/jsx-runtime';
import Button from '../../../components/Button/Button';
import RepeatingBlock from '../../../components/RepeatingBlock/RepeatingBlock';

function HelloSection() {
	const repeatTri = 'src/assets/images/repTriBlack.png';
	const repeatNoise = 'src/assets/images/img-noise.png';
    const elevatorTunel = 'src/assets/images/main-page/elevator/repElevator.png';
	const responsiveMac = 'src/assets/images/main-page/responsiveMac.png';
	return (
		<Fragment>
			{/* <aside className=' w-[228px] h-[44px]'>
				<RepeatingBlock
					image={{ src: elevatorTunel }}
					settings={{
						height: '44px',
					}}></RepeatingBlock>
			</aside> */}
			<section className="relative">
				<RepeatingBlock image={{ src: repeatNoise }}>
					<section className="text-center p-20">
						<h2>Graphic Design & Web Developing</h2>
						<p>
							Slugdesign is a Freelance Graphic Design & Web Developing studio
							based in Ireland Co.Kerry. We work hard at providing quality web
							resources, online advertising and clean responsive design. Find us
							on social media, find us in Kerry
						</p>
					</section>
					<RepeatingBlock
						image={{ src: repeatTri }}
						settings={{
							height: '37px',
						}}></RepeatingBlock>
				</RepeatingBlock>
				<div className="p-50 bg-black">
					<h2>Hello</h2>
					<h4>
						We are creative thinkers witfh a focus on modern web production. We
						use the latest tools available to help build your brand's digital
						presence.
					</h4>
					<p>
						Slugdesign.ie was set up as a service, not just to offer amazing
						website design and graphics, but to get your site found by practical
						SEO tactics, written content, and social media integration. We offer
						the complete all in one package.f
					</p>
					<img
						src={responsiveMac}
						alt=""
					/>
					<div className="row">
						<Button text="Contact Us"></Button>
						<Button text="Discover More About Slugdesing!"></Button>
					</div>
				</div>
			</section>
		</Fragment>
	);
}

export default HelloSection;
