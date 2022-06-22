import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

//pages & components
import Main from "./pages/main";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
