import { Fragment } from 'react';
import ContactSection from './ContactSection/ContactSection';
import DesignsSection from './DesignsSection/DesignsSection';
import MeetTeamSection from './MeetTeamSection/MeetTeamSection';
import WhatCanDoSection from './WhatCanDoSection/WhatCanDoSection';
import HelloSection from './HelloSection/HelloSection';

function MainPage() {
	return (
		<Fragment>
			<HelloSection></HelloSection>
			<WhatCanDoSection></WhatCanDoSection>
			<MeetTeamSection></MeetTeamSection>
			<DesignsSection></DesignsSection>
			<ContactSection></ContactSection>
		</Fragment>
	);
}

export default MainPage;
