import React, { useContext, useState } from "react";
import './content.css';
import { ThemeContext } from "../../context/ThemeContext";
import Button from "../Button";
import NavButtons from "../navButtons";

export default function Content() {
    const [lives, setLives] = useState(10);
    const [GOver, setGOver] = useState(false);
    const [motadev, setMotadev] = useState("");
    const [guessed, setGuessed] = useState("");
    const {theme} = useContext(ThemeContext);
    const fetchWord = async () => {
        setGOver(false);
        fetch(`https://animalfinderapi.herokuapp.com/word`)
            .then(response => response.json())
            .then(json => handleData(json.data.word));
    }

    function handleData(joliMot) {
        setMotadev(joliMot);
        setGuessed(hideWord(joliMot));
        console.log(joliMot);
    }

    function hideWord(str) {
        let hidden = '';
        for(let i = 0; i < str.length; i++){
            hidden += '_';
        }
        return hidden;
    }

    function prettyGuessed() {
        let output = '';
        for(let i = 0; i < guessed.length; i++){
            output += ` ${guessed[i]} `;
        }
        return output;
    }

    function compareW(charToCompare) {
        let temp = guessed;
        let bravo = false;
        for(let i = 0; i < motadev.length; i++){
            if(motadev[i].toUpperCase() === charToCompare.toUpperCase()){
               temp = setCharAt(temp, i, charToCompare);
               bravo = true;
            } 
        }
        if (temp.toUpperCase() === motadev.toUpperCase()) {
            setGOver(true);
        }
        if (!bravo) {
            if(lives - 1 <= 0) {
                setGOver(true);
            }
            setLives(lives - 1);
        }
        setGuessed(temp);
    }

    function setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substring(0,index) + chr + str.substring(index+1);
    }

    return (
        <div className={theme ? 'contenu light ' : 'contenu dark'}>
            <h1>Trouveur d'animaux</h1>
            <p>Trouve dont l'animal qu'est caché et engrange des points</p>
            <NavButtons /><Button value={'🔁'} onClick={() => fetchWord()}/>
            {theme}
            <p>You got {lives} lives left</p>
            <p>{prettyGuessed(guessed)}</p>
            {GOver ? <p>SsélafinDuJeu</p> : <p>Partie en cours</p> }
            <input 
                value="" 
                type="text" 
                placeholder="a"
                onChange={(event) => compareW(event.target.value)}
                style={{
                    width:"15px"
                }}
            ></input>
        </div>
    )
}