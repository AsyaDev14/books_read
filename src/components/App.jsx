import { Routes, Route } from "react-router-dom";
import { Register } from "../pages/register/Register";
import Login from "../pages/login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
