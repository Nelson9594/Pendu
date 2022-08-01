import './../App.css';
import './../components/content/content.css';
import logo from './../logo.svg';
import Button from './../components/Button';
import BtnToggle from '../components/BtnToggle/BtnToggle';
import { ThemeContext } from "../context/ThemeContext";
import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';

function App() {
    const {theme} = useContext(ThemeContext);
    const navigate = useNavigate();
    const play = () => navigate('/play');
  return (
    <div className={theme ? 'contenu light ' : 'contenu dark'}>
        <BtnToggle />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          ✨Welcome to <b>Pendu Paradise</b>✨
        </h1>
        <Button value={"✅"} onClick={play}/>
    </div>
  );
}
export default App;