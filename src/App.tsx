import { Route, Routes } from "react-router-dom";
import Header from "./components/library/shared/Header";

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Charecters</h1>}/>
        <Route path="/locations" element={<h1>Locations</h1>}/>
        <Route path="/episodes" element={<h1>Episodes</h1>}/>
      </Routes>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
