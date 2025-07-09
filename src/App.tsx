import './App.css';
import FontAwesomeLib from './util/fontAwesomeIcons';
import { Fragment, useState } from 'react';
import Footer from './components/Footer/Footer';
import Button from './components/Button/Button';
import MainPage from './pages/MainPage/MainPage';

function App() {
	FontAwesomeLib();
	const [count, setCount] = useState(0);

	return (
		<Fragment>
			<MainPage></MainPage>
			<Footer></Footer>
		</Fragment>
	);
}

export default App;
