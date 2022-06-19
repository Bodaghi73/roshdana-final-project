import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

//pages & components
import Main from "./pages/main";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </Router>
  );
}

export default App;
