import { useEffect, useState } from "react";
import api from "../services/api";
import Table from "../components/Table";

function Comments() {

  const [comments, setComments] =
    useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments =
    async () => {

      const res =
        await api.get("/comments");

      setComments(
        res.data.data
      );
    };

  return (
    <div>
      <h1>Comments</h1>
      <Table data={comments} />
    </div>
  );
}

export default Comments;