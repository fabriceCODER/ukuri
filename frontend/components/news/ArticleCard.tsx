import Link from "next/link";
import Image from "next/image";

interface ArticleCardProps {
    title: string;
    category: string;
    image: string;
}

const ArticleCard = ({ title, category, image }: ArticleCardProps) => {
    return (
        <Link href="/articles">
            <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
                {image ? (
                    <div className="relative h-64 w-full">
                        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                ) : (
                    <div className="h-64 w-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No Image Available</span>
                    </div>
                )}
                <div className="p-4">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-sm text-gray-500">{category}</p>
                </div>
            </div>
        </Link>
    );
};

export default ArticleCard;
