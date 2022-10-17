import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import Header from "./Component/Layouts/Header";
import Footer from "./Component/Layouts/Footer";
import Home from "./Pages/Home";

function App() {
  return <div>
    <Header/>
    <Home/>
    <Footer/>
    
  </div>;
}

export default App;
