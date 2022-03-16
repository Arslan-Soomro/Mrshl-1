import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout side={<p>Sidebar</p>} content={<p>Content</p>} />
    </div>
  )
}

export default App
