import { Fragment, useEffect, useState } from 'react';
import ContactSection from './ContactSection/ContactSection';
import DesignsSection from './DesignsSection/DesignsSection';
import MeetTeamSection from './MeetTeamSection/MeetTeamSection';
import WhatCanDoSection from './WhatCanDoSection/WhatCanDoSection';
import HelloSection from './HelloSection/HelloSection';
import Elevator from '../../components/Elevator/Elevator';
import WelcomeSection from './WelcomeSection/WelocmeSectiion';
import type { ContentBlockProps } from '../../components/ContentBlock/ContentBlockProps';
import DesDevSection from './DesDevSection/DesDevSection';

function MainPage() {
	const path = 'http://localhost:8080/api/landing';
	const [sectionData, setSectionData] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const responne = await fetch(path);
			try {
				const resData = await responne.json();
				setSectionData(resData.data);
			} catch (error) {
				console.log('Data not loaded', error);
			}
		}
		fetchData();
	}, []);
	return (
		<Fragment>
			<WelcomeSection></WelcomeSection>
			<Elevator>
				{sectionData.map((data: ContentBlockProps) => {
					switch (data.section) {
						case '1':
							return <DesDevSection {...data}></DesDevSection>;
						case '2':
							return <HelloSection {...data}></HelloSection>;
						case '3':
							return <WhatCanDoSection {...data}></WhatCanDoSection>;
						case '4':
							return <MeetTeamSection {...data}></MeetTeamSection>;
						case '5':
							return <DesignsSection {...data}></DesignsSection>;
						case '6':
							return <ContactSection {...data}></ContactSection>;
					}
				})}
			</Elevator>
		</Fragment>
	);
}

export default MainPage;
