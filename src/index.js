import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Blogs from "./components/Contact/contact";
import Contact from "./components/About/About";
import NoPage from "./components/Nopage/noPage";
import "./index.css";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <div className="routes"> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        {/* </div> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
