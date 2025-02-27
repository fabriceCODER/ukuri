import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
    return (
        <button onClick={onClick} className={`px-4 py-2 rounded-lg ${className}`}>
            {children}
        </button>
    );
};

export default Button;
