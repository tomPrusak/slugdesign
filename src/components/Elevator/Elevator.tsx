import { Controller, Scene } from 'react-scrollmagic';
function Elevator({ children }) {
	return (
		<section className=" relative ">
			<div className="z-15 right-[72px] top-[-145px] absolute">
				<Controller>
					<Scene
						duration={0}
						pin={true}
						enabled={true}>
						<div className=" w-[186px] h-[161px] bg-[url(assets/images/main-page/elevator/anCabin.png)]"></div>
					</Scene>
				</Controller>
			</div>
			<div
				className="w-[228px] absolute min-h-full 
  bg-repeat-y right-12 top-0 z-10 bg-[url(assets/images/main-page/elevator/repElevator.png)]"></div>
			{children}
		</section>
	);
}
export default Elevator;

//:TODO implement later for all images
{
	/* <div
  style={{'--image-url': `url(${fetchedUrl})`}} 
  className='bg-[image:var(--image-url)]'>
    <!-- ... -->
</div> */
}
