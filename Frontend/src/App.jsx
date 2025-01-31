import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";  // Corrected typo in the import (Singup -> Signup)
import Login from "./components/Login";

const App = () => {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {/* Redirect to Main if the user is logged in */}
      {user ? (
        <Route path="/" element={<Main />} />
      ) : (
        <Route path="/" element={<Navigate to="/login" />} />
      )}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
