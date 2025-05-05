"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Flag } from "lucide-react";

export default function ReportsPage() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    api.reports.getAll().then((res) => setReports(res.data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User Reports</h1>
      {reports.length ? (
        <ul className="space-y-4">
          {reports.map((report) => (
            <li key={report.id} className="bg-white p-4 border-l-4 border-red-500 shadow">
              <p className="text-sm font-medium text-gray-800">Reason: {report.reason}</p>
              <p className="text-sm text-gray-600">Reported by: {report.reportedBy}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No reports submitted.</p>
      )}
    </div>
  );
}
