import { useEffect, useState } from "react";
import api from "../services/api";
import Table from "../components/Table";

function Projects() {

  const [projects, setProjects] =
    useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects =
    async () => {

      const res =
        await api.get("/projects");

      setProjects(
        res.data.data
      );
    };

  return (
    <div>
      <h1>Projects</h1>
      <Table data={projects} />
    </div>
  );
}

export default Projects;