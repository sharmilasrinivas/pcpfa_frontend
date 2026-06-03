import { useEffect, useState } from "react";
import api from "../services/api";
import Table from "../components/Table";

function Users() {

  const [users, setUsers] =
    useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers =
    async () => {

      const res =
        await api.get("/users");

      setUsers(
        res.data.data
      );
    };

  return (
    <div>
      <h1>Users</h1>
      <Table data={users} />
    </div>
  );
}

export default Users;