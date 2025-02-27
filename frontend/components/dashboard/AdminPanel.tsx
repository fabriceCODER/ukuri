const AdminPanel = () => {
    return (
        <div className="bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
            <p className="text-lg mb-4">Admin can manage all content and users.</p>
            <div className="flex justify-between">
                {/* You can add more widgets or cards here */}
                <div className="bg-gray-200 p-4 rounded-lg w-1/3">
                    <h3 className="font-semibold">Recent Articles</h3>
                    {/* List recent articles */}
                </div>
                <div className="bg-gray-200 p-4 rounded-lg w-1/3">
                    <h3 className="font-semibold">User Management</h3>
                    {/* Manage users */}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
