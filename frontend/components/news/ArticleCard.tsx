import Link from "next/link";

interface ArticleCardProps {
    title: string;
    category: string;
    id: string;
}

const ArticleCard = ({ title, category, id }: ArticleCardProps) => {
    return (
        <Link href={`/articles/${id}`}>
            <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm text-gray-500">{category}</p>
            </div>
        </Link>
    );
};

export default ArticleCard;
