import Link from "next/link";
import Image from "next/image";

interface ArticleProps {
    title: string;
    category: string;
    image: string;
}

const ArticleCard = ({ title, category, image }: ArticleProps) => {
    return (
        <Link href="/articles">
            <div className="border rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
                <Image src={image} alt={title} width={400} height={250} className="w-full h-40 object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-sm text-gray-500">{category}</p>
                </div>
            </div>
        </Link>
    );
};

export default ArticleCard;
