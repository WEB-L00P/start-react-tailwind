import { BrowserRouter, Route, Routes } from "react-router-dom"

// page imports 
import Home from "./Home"

// components imports 


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
