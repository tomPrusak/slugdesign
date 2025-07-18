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
		<nav className="flex justify-center p-20">
			<img
				className="w-fit "
				src={responsiveMac}
				alt=""
			/>
			<ul className="flex">
				{navigationData.map((data: HeaderProps) => {
					return (
						<li className="p-3 hover:text-amber-300">
							<Link
								to={data.link}
								target="blank">
								{data.text}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Header;
