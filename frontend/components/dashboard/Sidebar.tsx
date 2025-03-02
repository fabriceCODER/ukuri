const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white p-4">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <ul>
                <li>
                    <a href="/dashboard" className="block py-2 hover:bg-gray-700">Dashboard</a>
                </li>
                <li>
                    <a href="/profile" className="block py-2 hover:bg-gray-700">Profile</a>
                </li>
                <li>
                    <a href="/settings" className="block py-2 hover:bg-gray-700">Settings</a>
                </li>
                {/* Additional links for Admin or Creator */}
                <li>
                    <a href="/submit" className="block py-2 hover:bg-gray-700">Create Article</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
