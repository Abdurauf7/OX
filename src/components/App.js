// Third Part
import { Route, Routes } from "react-router-dom";

// Routes
import LoginPage from "../routes/LoginPage/";
import Main from "../components/layouts/main/";

function App() {
  return (
    <Routes>
      <Route path="/app/*" element={<Main />} />
      <Route path="/" element={<LoginPage />} />
      {/* <Route path="/notfound" element={NotFound} /> */}
    </Routes>
  );
}

export default App;
