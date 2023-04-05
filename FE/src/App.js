import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Create } from "./components/Create";
import { Menu } from "./components/Menu";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/themhd" element={<Create />} />
          <Route path="/danhsach" element={<List />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
