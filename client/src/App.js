import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DeveloperApp from "./components/developer/DeveloperApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<DeveloperApp />} />
      </Routes>
    </Router>
  );
}

export default App;
