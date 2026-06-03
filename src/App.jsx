import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Projects from "./pages/Projects";
import Issues from "./pages/Issues";
import Comments from "./pages/Comments";

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/users"
          element={<Users />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/issues"
          element={<Issues />}
        />

        <Route
          path="/comments"
          element={<Comments />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;