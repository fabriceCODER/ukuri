const NewsletterForm = () => {
    return (
        <form className="mt-4">
            <input type="email" placeholder="Enter your email" className="border p-2 rounded-md w-full" />
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg w-full">
                Subscribe
            </button>
        </form>
    );
};

export default NewsletterForm;
