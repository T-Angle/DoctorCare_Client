import "./App.scss";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/Login";
import Homepage from "../pages/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
