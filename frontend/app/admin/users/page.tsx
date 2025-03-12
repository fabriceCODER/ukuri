"use client";

import { useState, useEffect } from 'react';
import { api } from '@/utils/api';
import DataTable from '@/components/dashboard/DataTable';

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
}

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await api.users.getAll();
            if (response.data) {
                setUsers(response.data as User[]);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch users');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await api.users.delete(id);
            setUsers(users.filter(user => user.id !== id));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to delete user');
        }
    };

    const handleEdit = async (id: string, data: Partial<User>) => {
        try {
            const response = await api.users.update(id, data);
            if (response.data) {
                setUsers(users.map(user =>
                    user.id === id ? { ...user, ...data } : user
                ));
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to update user');
        }
    };

    const columns = [
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role' },
        { key: 'createdAt', label: 'Created At' },
    ];

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Users Management</h1>
            <DataTable
                data={users}
                columns={columns}
                onDelete={handleDelete}
                onEdit={handleEdit}
            />
        </div>
    );
}
