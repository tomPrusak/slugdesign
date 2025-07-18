import Header from '../../../components/Header/Header';
import RepeatingBlock from '../../../components/RepeatingBlock/RepeatingBlock';

function WelcomeSection() {
	const sky = 'src/assets/images/main-page/sky.jpg';

	return (
		<RepeatingBlock
			image={{ src: sky }}
			settings={{
				height: '646px',
			}}>
			<section className="row">
				<Header></Header>
				<div className="box-border w-[167px] h-[165px] absolute right-10 top-10 bg-[url(assets/images/main-page/sun.png)]"></div>
				<div className="box-border w-full h-[157px] absolute top-35 bg-[url(assets/images/main-page/clouds.png)]"></div>
			</section>
			<section className="row">
				<div className="box-border  w-full h-[385px] absolute bottom-0 right-0 bg-[url(assets/images/main-page/MountainBack.png)]"></div>
				<div className="box-border w-full h-[445px] absolute bottom-0 left-0 bg-[url(assets/images/main-page/MountainFront.png)]"></div>
			</section>
			<section className="row">
				<div className="box-border w-full h-[118px] absolute bottom-0 left-0 bg-[url(assets/images/main-page/land.png)]"></div>
				<div className="box-border w-[1080px] h-[298px] absolute bottom-0 right-0 bg-[url(assets/images/main-page/house.png)]"></div>
			</section>
		</RepeatingBlock>
	);
}
export default WelcomeSection;
