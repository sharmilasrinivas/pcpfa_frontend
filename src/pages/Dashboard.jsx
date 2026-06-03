
import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {

  const [analytics, setAnalytics] =
    useState({});

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics =
    async () => {

      const res =
        await api.get(
          "/analytics/issues"
        );

      setAnalytics(
        res.data.data
      );
    };

  return (
    <div>
      <h1>Dashboard</h1>

      <h3>
        Total Issues:
        {analytics.totalIssues}
      </h3>

      <h3>
        Open:
        {analytics.openIssues}
      </h3>

      <h3>
        Resolved:
        {analytics.resolvedIssues}
      </h3>

      <h3>
        Closed:
        {analytics.closedIssues}
      </h3>
    </div>
  );
}

export default Dashboard;