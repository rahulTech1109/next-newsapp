import { notFound } from "next/navigation";
import Image from "next/image";
import Images from "/public/images.png";

type Props = {
    searchParams?: any;
};

function ArticlePage({ searchParams }: Props) {
    if ((searchParams && Object.entries(searchParams).length === 0) || !searchParams) {
        return notFound();
    }

    const article: Article = searchParams;

    return (
        <article className="min-h-screen p-6">
            <section className="max-w-3xl mx-auto shadow-lg rounded-lg overflow-hidden">
                <div className="relative w-full h-64">
                    <Image
                        src={Images}
                        alt={article.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                        quality={75}
                    />
                </div>
                <div className="p-6">
                    <p className="text-white-600"> Published By {article.author}</p>
                    <h1 className="text-2xl font-bold text-white-800 mb-4">{article.title}</h1>
                    <p className="text-gray-600">{article.description}</p>
                </div>
            </section>
        </article>
    );
}

export default ArticlePage;
