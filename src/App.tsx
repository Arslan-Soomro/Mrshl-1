import Layout from "./components/Layout";
import Csidebar from "./components/Csidebar";
import Header from "./components/Header";
import Cardslist from "./components/Cardslist";
import { sideItems } from "./utils/dumData";

function App() {
  return (
    <div className="App">
      <Layout side={<Csidebar sideItems={sideItems} />} content={<><Header /><Cardslist /></>} />
    </div>
  )
}

export default App
