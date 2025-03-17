"use client";

const Accessibility = () => {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-16 py-20">
            <div className="max-w-4xl w-full">
                <h1 className="text-4xl font-extrabold text-black text-center mb-6">Accessibility Statement</h1>
                <p className="text-lg text-gray-700 text-center mb-10">
                    We are committed to making our website accessible to everyone, including individuals with disabilities.
                </p>

                <section className="space-y-6">
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-black mb-2">Our Commitment</h2>
                        <p className="text-gray-700">
                            We strive to follow Web Content Accessibility Guidelines (WCAG) 2.1 to ensure an inclusive experience for all users.
                        </p>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-black mb-2">Features</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Keyboard navigation support</li>
                            <li>High contrast mode for better visibility</li>
                            <li>Alt text for images</li>
                            <li>ARIA attributes for screen readers</li>
                        </ul>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-black mb-2">Feedback</h2>
                        <p className="text-gray-700">
                            If you experience any accessibility barriers, please 
                            <a href="/contact" className="text-indigo-600 hover:underline"> contact us</a>.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Accessibility;
