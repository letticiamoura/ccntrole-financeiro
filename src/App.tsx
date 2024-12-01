import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

export default function App() {

  return (
    <BrowserRouter basename="controle-financeiro">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dash" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  )
}