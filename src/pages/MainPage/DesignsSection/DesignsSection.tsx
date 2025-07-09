import './DesignSection.css';
import Button from '../../../components/Button/Button';

function DesignsSection() {
	const bubleFire = 'src/assets/images/main-page/anBubleFire.png';
	const breenSchool = 'src/assets/images/main-page/breenschool.jpg';
	const allosales = 'src/assets/images/main-page/allosales.jpg';
	const polcutting = 'src/assets/images/main-page/polcutting.jpg';

	return (
		<div className="bg-gradient-to-t from-[#11708a] to-[#00a0b7] flex relative z-20">
			<div className="column w-screen">
				<section className="justify-start w-200 text-center">
					<h2 className="">
						Design, <br /> Development, Online <br /> advertising …
					</h2>
					<h3>
						We Are Constantly Innovating, To Make A Better Website For You!
					</h3>
					<p>
						At SlugDesign, we always take care to understand the business we are
						representing, and we work closely with our clients to Build websites
						to exact specifications. At SlugDesign will craft a contemporary and
						unique website just for you.
					</p>
					<Button text="Want To See More?"></Button>
				</section>
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
