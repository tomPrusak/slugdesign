import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { HeaderProps, MenuLinksProps } from './HeaderProps';
import parse from 'html-react-parser';

function Header() {
	const logo = 'src/assets/images/main-page/header/sluglogo2.png';
	const path = 'http://localhost:8080/api/nav';
	const [navigationData, setNavigationData] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const responne = await fetch(path);
			try {
				const resData = await responne.json();
				setNavigationData(resData.data);
			} catch (error) {
				console.log('Data not loaded', error);
			}
		}
		fetchData();
	}, []);

	return (
		<div className="grid grid-cols-4 gap-2 py-20">
			{navigationData.map((nav: HeaderProps) => {
				return (
					<Fragment>
						<nav className="col-span-4 col-start-2 col-end-4">
							<div className="flex justify-between pb-2">
								<Link to={nav.homeLink}>
									<img
										className="w-[232px] h-[44px]"
										src={logo}
									/>
								</Link>
								<ul className="self-end flex ">
									{nav.menuLinks.map((menu: MenuLinksProps) => {
										return (
											<li className="p-3 transition ease-in-out duration-500 hover:text-sluggreen-200 hover:text-shadow-lg text-white">
												<Link to={menu.link}>{menu.text}</Link>
											</li>
										);
									})}
								</ul>
							</div>
							<hr className="border-white " />
						</nav>
						<div className="col-span-4 col-start-2 col-end-2 z-20">
							<h1 className="text-white">
								{nav.menuHeader ? parse(nav.menuHeader) : undefined}
							</h1>
						</div>
					</Fragment>
				);
			})}
		</div>
	);
}

export default Header;

// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import type { HeaderProps, MenuLinksProps } from './HeaderProps';

// function Header() {
// 	const logo = 'src/assets/images/main-page/header/sluglogo2.png';
// 	const path = 'http://localhost:8080/api/nav';
// 	const [navigationData, setNavigationData] = useState<HeaderProps>({
// 		menuHeader: '',
// 		homeLink: '',
// 		menuLinks: [],
// 	});
// 	useEffect(() => {
// 		async function fetchData() {
// 			const responne = await fetch(path);
// 			try {
// 				const resData = await responne.json();
// 				setNavigationData(resData.data);
// 			} catch (error) {
// 				console.log('Data not loaded', error);
// 			}
// 		}
// 		fetchData();
// 	}, []);

// 	return (
// 		<div className="grid grid-cols-4 gap-2 py-20">
// 			<nav className="col-span-4 col-start-2 col-end-4">
// 				<div className="flex justify-between pb-2">
// 					<img
// 						className="w-[232px] h-[44px]"
// 						src={logo}
// 						alt=""
// 					/>
// 					<ul className="self-end flex ">
// 						{navigationData ? navigationData?.menuLinks.map((menu: MenuLinksProps) => {
// 							return (
// 								<li className="p-3 transition ease-in-out duration-500 hover:text-sluggreen-200 hover:text-shadow-lg text-white">
// 									<Link to={menu.link}>{menu.text}</Link>
// 								</li>
// 							);
// 						}): null}
// 					</ul>
// 				</div>
// 				<hr className="border-white " />
// 			</nav>
// 		</div>
// 	);
// }

// export default Header;
