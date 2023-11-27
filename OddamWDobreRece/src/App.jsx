import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/LogIn";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Form from "./components/Form";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logowanie" element={<Login />} />
        <Route path="/rejestracja" element={<Register />} />
        <Route path="/wylogowano" element={<Logout />} />
        <Route path="/oddaj-rzeczy" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}