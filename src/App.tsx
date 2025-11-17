import { Routes,Route } from "react-router-dom"

function App() {
  

  return (
    <>
     <div>
    <Routes>
      <Route path="/about" element={<h1>About pages</h1>} />
      <Route path="/products" element={<h1>Products</h1>} />
      <Route path="/team" element={<h1>Team</h1>} />
    </Routes>
     </div>
    </>
  )
}

export default App
