import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Base from "./Component/Layouts/Base";
function App() {
  return (
    <div>

      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
