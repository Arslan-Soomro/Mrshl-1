import Layout from "./components/Layout";
import Csidebar from "./components/Csidebar";
import Header from "./components/Header";
import useStore from "./utils/store";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import SmartCardsList from "./components/SmartCardsList";

//TODO make layout of cardslist responsive

function App() {
  const boards = useStore((state) => state.boards);

  return (
    <div className="App">
      <Routes>
        {/*boards.map((item) => {
          return (
            <Route
              path={item.name}
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
                      <SmartCardsList boardId={item.id} catName="popular" />
                    </>
                  }
                />
              }
            />
          );
        })*/}

        

        <Route
          path="*"
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
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h1>404 Not Found</h1>
                </div>
              }
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
