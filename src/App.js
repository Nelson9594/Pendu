import './App.css';
import Game from './pages/Game';
import Login from './pages/Login';
import Stats from './pages/Stats';

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/play' element={<Game/>}/>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/statistics' element={<Stats/>}/>
      </Routes>
    </Router>
  );
}
export default App;