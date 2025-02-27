const CreatorDashboard = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Creator Dashboard</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 shadow rounded-md">
                    <h3 className="text-lg font-semibold">Create New Article</h3>
                    <p>Write and publish new articles for your audience.</p>
                    <a href="/articles" className="text-blue-600 hover:underline">Start Writing</a>
                </div>
                <div className="bg-white p-4 shadow rounded-md">
                    <h3 className="text-lg font-semibold">My Articles</h3>
                    <p>View and manage your previously published articles.</p>
                </div>
            </div>
        </div>
    );
};

export default CreatorDashboard;
