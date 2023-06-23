import React, { useEffect, useState } from "react";

const Character = (props) => {

    console.log('character', props.character);

    const [character, setCharacter] = useState()

    useEffect(() => {
        getCharacter()
    },[])

    const getCharacter = () => {
        fetch('https://www.swapi.tech/api/people/' + props.character.uid, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(resp => {
			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			console.log(data);
            setCharacter(data.result.properties) //this will print on the console the exact object received from the server
		})
		.catch(error => {
			console.log(error);
		});
    }

    return (
        <div class="card card-body">
            <img src="https://picsum.photos/id/237/400/200" class="card-img-top" alt="..." style={{ borderRadius: 5 }}></img>
            <h5 class="card-title mt-3 mb-4">{props.character.name}</h5>
            {character ? (
                <p class="card-text">
                    <p class='mt-0 mb-0'>Gender: {character.gender}</p>
                    <p class='mt-0 mb-0'>Hair Color: {character.hair_color}</p> 
                    <p class='mt-0 mb-0'>Eye Color: {character.eye_color}</p>
                </p>
            ) : (
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            )}
            <button type="button" class="btn btn-outline-success mt-4">Learn More!</button>
        </div>
    )
}

export default Character