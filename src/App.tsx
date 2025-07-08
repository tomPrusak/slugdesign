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
			{/* <h1 className="underline">some sample o text</h1>
			<h2>
				Improve <br />
				Your Website <br />
				Visuality <br />
				& Online <br />
				Visibility
				<span>Tomek</span>
			</h2>
			<button className="bg-red-300 text-white">Send Email</button>
			<Button text="tomek"></Button> */}
			<MainPage></MainPage>
			<Footer></Footer>
		</Fragment>
	);
}

export default App;
