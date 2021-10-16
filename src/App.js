import './App.css';
import { useEffect, useState } from "react";
import Card from './components/card/Card';

function App() {

	const [dataFromApi, setDataFromApi] = useState([]);

	const getRandomNum = () => parseInt(Math.random() * (10 - 1) + 1);

	const loadFromApi = () => {

		let randomPage = getRandomNum();

		const API_URL = `https://picsum.photos/v2/list?page=${randomPage}&limit=3`;

		fetch(API_URL)
			.then(response => response.json())
			.then(data => setDataFromApi(data));
	};

	// eslint-disable-next-line
	useEffect(() => loadFromApi(), []);

	return (
		<div className="container">
			<h1 className="container__title">Image cards with ReactJS</h1>

			<button className="container__refresh" onClick={ loadFromApi }>Load images</button>

			<div className="container__cards">
				{ dataFromApi.map(item => { return <Card key={ item.id } objData={ item } /> }) }
			</div>
        </div>
	);
}

export default App;