import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import PhotoDetails from "./pages/PhotoDetails";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<PhotoDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
