const CreatorPanel = () => {
    return (
        <div className="bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Creator Panel</h2>
            <p className="text-lg mb-4">Creator can create and manage their articles.</p>
            <div className="flex justify-between">
                <div className="bg-gray-200 p-4 rounded-lg w-1/3">
                    <h3 className="font-semibold">Create New Article</h3>
                    <p>Write and publish new articles for your audience.</p>
                    {/* Link to article creation page */}
                    <a href="/articles" className="text-blue-600 hover:underline">Start Writing</a>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg w-1/3">
                <h3 className="font-semibold">My Articles</h3>
                    {/* List creator's articles */}
                </div>
            </div>
        </div>
    );
};

export default CreatorPanel;
