import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "20px" }}>
      <Link to="/">Dashboard</Link> |{" "}
      <Link to="/users">Users</Link> |{" "}
      <Link to="/projects">Projects</Link> |{" "}
      <Link to="/issues">Issues</Link> |{" "}
      <Link to="/comments">Comments</Link>
    </nav>
  );
}

export default Navbar;