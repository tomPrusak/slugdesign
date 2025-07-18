import './App.css';
import FontAwesomeLib from './util/fontAwesomeIcons';
import { Fragment } from 'react';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';

function App() {
	FontAwesomeLib();

	return (
		<Fragment>
			<MainPage></MainPage>
			<Footer></Footer>
		</Fragment>
	);
}

export default App;
