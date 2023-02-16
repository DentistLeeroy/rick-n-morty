import "./App.css";
import { Route, Routes } from "react-router-dom";
import CardGrid from "./components/giga-components/card-grid";
import Header from "./components/library/shared/Header";
import Footer from "./components/library/shared/Footer";

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<CardGrid></CardGrid>}/>
        <Route path="/locations" element={<h1>Locations</h1>}/>
        <Route path="/episodes" element={<h1>Episodes</h1>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
