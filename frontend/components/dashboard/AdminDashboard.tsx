const AdminDashboard = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 shadow rounded-md">
                    <h3 className="text-lg font-semibold">Manage Articles</h3>
                    <p>View, edit, or delete articles created by users.</p>
                </div>
                <div className="bg-white p-4 shadow rounded-md">
                    <h3 className="text-lg font-semibold">Manage Users</h3>
                    <p>View and manage user accounts.</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
