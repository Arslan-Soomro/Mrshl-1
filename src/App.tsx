import Layout from "./components/Layout";
import Csidebar from "./components/Csidebar";
import Header from "./components/Header";
import useStore from "./utils/store";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import SmartCardsList from "./components/SmartCardsList";

function App() {
  const boards = useStore((state) => state.boards);

  useEffect(() => {
    console.log(boards.map((item) => ({ id: item.id, name: item.name })));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="general" element={<p>Hello World</p>} />
        <Route
          path="/"
          element={
            <Layout
              side={
                <Csidebar
                  sidebarItems={boards.map((item) => ({
                    id: item.id,
                    name: item.name,
                  }))}
                />
              }
              content={
                <>
                  <Header />
                  <SmartCardsList boardId={0} />
                </>
              }
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
