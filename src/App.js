import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchFolio from './SearchFolio/SearchFolio';
import ReportGenerator from './ReportGenerator/ReportGenerator';
function App() {
  return (

    <div className='App'>
      <header className='App-header'>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ReportGenerator />}>
              
            </Route>
            <Route exact path="/search" element={<SearchFolio />}>
            </Route>
          </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
