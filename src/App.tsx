import { Routes, Route, Link } from "react-router-dom"

function App() {
  

  return (
    <>
     <div>
      <header>

      </header>
    <Routes>
      <Route path="/" element={<h1>You are loved and blessed</h1>} />
      <Route path="/about" element={<h1>About pages</h1>} />
      <Route path="/products" element={<h1>Products</h1>} />
      <Route path="/team" element={<h1>Team</h1>} />
    </Routes>
    <footer>
      &copy proffesionally designed by De-scientist
    </footer>
     </div>
    </>
  );
}

export default App
