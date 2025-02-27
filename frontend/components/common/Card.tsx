import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card = ({ children, className }: CardProps) => {
    return <div className={`border rounded-lg p-4 shadow-md ${className}`}>{children}</div>;
};

export default Card;
