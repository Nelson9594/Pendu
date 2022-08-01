import React, {useContext} from "react";
import './navButton.css';
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from 'react-router-dom';

export default function NavButtons() {
    const {theme} = useContext(ThemeContext)
    const navigate = useNavigate();
    const play = () => navigate('/play');
    const stats = () => navigate('/statistics');
    const disc = () => navigate('/');
    return (
        <div>
            <div 
            className={theme ? 'btn-nav light' : 'btn-nav dark'}
            onClick={stats}
            >
                {theme ? "📝" : "📝"}
            </div>
            <div 
            className={theme ? 'btn-nav light' : 'btn-nav dark'}
            onClick={play}
            >
                {theme ? "🎮" : "🎮"}
            </div>
            <div 
            className={theme ? 'btn-nav light' : 'btn-nav dark'}
            onClick={disc}
            >
                {theme ? "🏡" : "🏡"}
            </div>
        </div>
    );
}