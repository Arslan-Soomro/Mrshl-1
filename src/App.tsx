import Layout from "./components/Layout";
import Header from "./components/Header";
import useStore from "./utils/store";
import { Routes, Route } from "react-router-dom";
import SmartSidebar from "./components/SmartSidebar";
import RouteCardsList from "./components/RouteCardsList";

//TODO Connect the app with firebase
//TODO fetch data from firebase
//TODO Write data to firebase

function App() {
  const boards = useStore((state) => state.boards);

  return (
    <div className="App">
      <Routes>

        <Route path="/boards/:boardId/:catName" 
          element={
            <Layout 
              side={
                <SmartSidebar />
              }
              content={
                <>
                  <Header />
                  <RouteCardsList />
                </>
              }
            />
          } 
        />

        <Route
          path="*"
          element={
            <Layout
              side={<SmartSidebar />}
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
/*
                <Csidebar
                  sidebarItems={boards.map((item) => ({
                    id: item.id,
                    name: item.name,
                  }))}
                />*/

                        /*boards.map((item) => {
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
        })*/