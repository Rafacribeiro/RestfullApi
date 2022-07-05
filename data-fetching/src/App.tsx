import { Repo } from "./pages/Repo";
import { Repos } from "./pages/Repos";
import { Route, Routes } from "react-router-dom";


export function App() {
  return (
    <Routes>
      <Route path="/" element={<Repos />} />
      <Route path="/repos/*" element={<Repo />} />
    </Routes>
  )
}