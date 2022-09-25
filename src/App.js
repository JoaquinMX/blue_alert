import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchFolio from './SearchFolio/SearchFolio';

function App() {
  return (
    
    <BrowserRouter>
      <header>Hola</header>
      <main>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact path="/">
            <ReportGenerator></ReportGenerator>
          </Route>
          <Route path="/search" element={<SearchFolio />}>
          </Route>
        </Routes>
      </main>
      <footer>Adios</footer>
    </BrowserRouter>
  );
}

export default App;
