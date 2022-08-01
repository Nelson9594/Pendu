import React, { useContext, useState, useEffect } from "react";
import './../components/content/content.css';
import { ThemeContext } from "../context/ThemeContext";
import DisplayCard from "./../components/cardScores";
import NavButtons from "../components/navButtons";
import BtnToggle from '../components/BtnToggle/BtnToggle';

export default function Content() {
    const {theme} = useContext(ThemeContext);
    const [score, setscore] = useState([])
    useEffect(() => {
        (async()=>{
            const newScore = await getScore()
            setscore(newScore.data)
        })()
        return () => {}
    },[])
    const getScore = async () => {
        const scoreJson = await fetch ('https://animalfinderapi.herokuapp.com/score');
        return await scoreJson.json();
    }
    if (!score){

        return <p>Waiting</p>
    }
    return (
        <div className={theme ? 'contenu light ' : 'contenu dark'}>
            <h1>Statistiques et classement</h1>
            <p>Si t'es dans le top t'es beau</p>
            <BtnToggle />
            <NavButtons />
            <p>{score.map((result, index) => 
                <div 
                style={{
                    border: "5px solid transparent",
                    display: "inline-block"
                }}>
                    <DisplayCard position={result.position} username={result.username} score={result.score}/>
                </div>
            )}</p>
        </div>
    )
}