import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { HeaderProps } from './HeaderProps';

function Header() {
	const responsiveMac = 'src/assets/images/main-page/header/sluglogo2.png';
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
			<nav className="col-span-4 col-start-2 col-end-4">
				<div className="flex justify-between pb-2">
					<img
						className="w-[232px] h-[44px]  "
						src={responsiveMac}
						alt=""
					/>
					<ul className="self-end flex ">
						{navigationData.map((data: HeaderProps) => {
							return (
								<li className="p-3 transition ease-in-out duration-500 hover:text-sluggreen-200 hover:text-shadow-lg text-white">
									<Link to={data.link}>{data.text}</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<hr className="border-white " />
			</nav>
		</div>
	);
}

export default Header;
