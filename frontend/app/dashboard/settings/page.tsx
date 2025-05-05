"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
    api.user.getProfile().then((res) => setForm(res.data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.user.updateProfile(form);
    alert("Settings updated successfully.");
  };

  return (
    <div className="p-8 max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full mt-1 border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full mt-1 border px-3 py-2 rounded" />
        </div>
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          Save Changes
        </button>
      </form>
    </div>
  );
}
