import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchFolio from './SearchFolio/SearchFolio';
import ReportGenerator from './ReportGenerator/ReportGenerator';
import ReportCaptcha from './ReportGenerator/ReportCaptcha';
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
            <Route exact path="/prueba" element={<ReportCaptcha />}>
            </Route>

          </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
