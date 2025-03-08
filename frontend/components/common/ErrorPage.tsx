import Link from "next/link";

interface ErrorPageProps {
    statusCode?: number;
    message?: string;
}

const ErrorPage = ({ statusCode, message }: ErrorPageProps) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 text-center">
            <div className="max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-red-600">
                    {statusCode || "Error"}
                </h1>
                <p className="text-lg text-gray-700 mt-4">
                    {message || "Something went wrong. Please try again later."}
                </p>
                <div className="mt-6">
                    <Link href="/" className="text-blue-600 hover:underline">
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
