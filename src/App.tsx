import { Link, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div>
      <header>
        <Link to="/" >Charecters</Link>
        <Link to="/locations" >Locations</Link>
        <Link to="/episodes" >Episodes</Link>
      </header>
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
