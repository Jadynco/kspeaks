import logo from './logo.svg';
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Homepage from './homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <Homepage />
      </div>
    </Router>
  );
}

export default App;
