import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

//pages & components
import Main from "./pages/main";
import Header from "./components/header";
import Footer from "./components/footer";
import Archive from "./pages/archive";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/archive" element={<Archive/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
