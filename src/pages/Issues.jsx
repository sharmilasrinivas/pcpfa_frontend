import { useEffect, useState } from "react";
import api from "../services/api";
import Table from "../components/Table";

function Issues() {

  const [issues, setIssues] =
    useState([]);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues =
    async () => {

      const res =
        await api.get("/issues");

      setIssues(
        res.data.data
      );
    };

  return (
    <div>
      <h1>Issues</h1>
      <Table data={issues} />
    </div>
  );
}

export default Issues;