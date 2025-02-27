import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 container mx-auto px-6">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
