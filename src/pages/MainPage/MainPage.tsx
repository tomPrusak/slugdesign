import { Fragment } from 'react';
import ContactSection from './ContactSection/ContactSection';
import DesignsSection from './DesignsSection/DesignsSection';
import MeetTeamSection from './MeetTeamSection/MeetTeamSection';
import WhatCanDoSection from './WhatCanDoSection/WhatCanDoSection';
import HelloSection from './HelloSection/HelloSection';
import Elevator from '../../components/Elevator/Elevator';
import WelcomeSection from './WelcomeSection/WelocmeSectiion';

function MainPage() {
	return (
		<Fragment>
			<WelcomeSection></WelcomeSection>
			<Elevator>
				<HelloSection></HelloSection>
				<WhatCanDoSection></WhatCanDoSection>
				<MeetTeamSection></MeetTeamSection>
				<DesignsSection></DesignsSection>
				<ContactSection></ContactSection>
			</Elevator>
		</Fragment>
	);
}

export default MainPage;
