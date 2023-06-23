import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Character from "../component/character";

export const Home = () => {

	const [characters, setCharacters] = useState([])

	useEffect(() => {
		getPeople();
	},[])


	const getPeople = () => {
		fetch('https://www.swapi.tech/api/people/', {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(resp => {
			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			// console.log(data); //this will print on the console the exact object received from the server
			setCharacters(data.results)
		})
		.catch(error => {
			console.log(error);
		});
	}

	const showCharacters = () => {
		return characters.map((character) => {
			return <Character character={character} />
		})
	}

	return (
		<div class="py-2" style={{ overflowX: 'auto', overflowY: 'hidden', paddingLeft: 10, paddingRight: 10}}>
			<h2 class="font-weight-light">Characters</h2>
			<div class="d-flex flex-row flex-nowrap">
				{characters.length !== 0 ? showCharacters() : (
					<div class="spinner-border" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				)}
			</div>
		</div>
	)
};
