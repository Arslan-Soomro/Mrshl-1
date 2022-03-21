import Layout from "./components/Layout";
import Csidebar from "./components/Csidebar";
import Header from "./components/Header";
import Cardslist from "./components/Cardslist";
import useStore from "./utils/store";
import {Routes, Route} from "react-router-dom";

function App() {

  const sideItems = useStore((state) => state.sideItems);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<p>Hello World</p>} />
        <Route path="/general" element={<Layout side={<Csidebar sidebarItems={sideItems} />} content={<><Header /><Cardslist /></>} />} />
      </Routes>
    </div>
  )
}

export default App
