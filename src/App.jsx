import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BodyContainer from "./components/outlet/BodyContainer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Education from "./components/education/Education";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BodyContainer />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
