import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
function FontAwesomeLib() {
	// set FontAwesome Icons globaly
	return library.add(faChevronRight);
}
export default FontAwesomeLib;
