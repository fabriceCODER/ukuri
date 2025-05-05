"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Bell } from "lucide-react";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    api.notifications.getAll().then((res) => setNotifications(res.data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <ul className="space-y-4">
        {notifications.map((note) => (
          <li key={note.id} className="bg-white shadow p-4 rounded">
            <p className="text-sm">{note.message}</p>
            <span className="text-xs text-gray-500">{new Date(note.createdAt).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
