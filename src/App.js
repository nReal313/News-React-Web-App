import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./components/NavBar";
import News from "./components/News";
import New from "./components/New";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

//business entertainment general health science sports technology
function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/US/General" replace />} />
          <Route path="/:country/:category" element={<New />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
