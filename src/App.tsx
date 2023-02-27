import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/library/shared/Header";
import Footer from "./components/library/shared/Footer";
import Characters from "./pages/Characters";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";
import Character from "./pages/Character";
import Location from "./pages/Location";
import Episode from "./pages/Episode";

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Characters/>}/>
        <Route path="/:id" element={<Character/>}/>
        <Route path="/locations" element={<Locations/>}/>
        <Route path="/locations/:id" element={<Location/>}/>
        <Route path="/episodes" element={<Episodes/>}/>
        <Route path="/episodes/:id" element={<Episode/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
