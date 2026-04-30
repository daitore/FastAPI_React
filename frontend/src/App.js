import './App.css';
import {Routes, Route, Router} from 'react-router-dom'
import Submit from "./components/pages/Submit";
import Results from "./components/pages/Results";


function App() {
  return(
    <>
        <Routes>
            <Route path="/" element={<Submit/>} />
            <Route path="/Results"  element={<Results />} />
        </Routes>
    </>
  );
}

export default App;
