import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./components/NavBar";
import News from "./components/News";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//business entertainment general health science sports technology
function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<News category="general" key="general" />} />
          <Route path="/general" element={<News category="general" key="general" />} />
          <Route path="/business" element={<News category="business" key="business" />} />
          <Route path="/entertainment" element={<News category="entertainment" key="entertainment" />} />
          <Route path="/health" element={<News category="health" key="health" />} />
          <Route path="/science" element={<News category="science" key="science" />} />
          <Route path="/sports" element={<News category="sports" key="sports" />} />
          <Route path="/technology" element={<News category="technology" key="technology" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
