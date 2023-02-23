import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/library/shared/Header";
import Footer from "./components/library/shared/Footer";
import Charecters from "./pages/Charecters";

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Charecters/>}/>
        <Route path="/locations" element={<h1>Locations</h1>}/>
        <Route path="/episodes" element={<h1>Episodes</h1>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
