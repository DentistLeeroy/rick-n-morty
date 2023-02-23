import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/library/shared/Header";
import Footer from "./components/library/shared/Footer";
import Charecters from "./pages/Charecters";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Charecters/>}/>
        <Route path="/locations" element={<Locations/>}/>
        <Route path="/episodes" element={<Episodes/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
