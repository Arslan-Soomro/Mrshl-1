import Layout from "./components/Layout";
import Csidebar from "./components/Csidebar";
import Header from "./components/Header";
import Cardslist from "./components/Cardslist";
import useStore from "./utils/store";

function App() {

  const sideItems = useStore((state) => state.sideItems);

  return (
    <div className="App">
      <Layout side={<Csidebar sidebarItems={sideItems} />} content={<><Header /><Cardslist /></>} />
    </div>
  )
}

export default App
