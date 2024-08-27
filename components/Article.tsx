import React from 'react';
import Image from 'next/image';
import Images from "../public/images.png";
import ReadMoreButton from './ReadMoreButton';

interface ArticleProps {
    article: {
        title: string;
        description: string;
        url: string;
        urlToImage: string;
    };
}

const Article: React.FC<ArticleProps> = ({ article }) => {
    return (
        <div className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative w-full h-48">
                <Image
                    src={article.urlToImage || Images}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    quality={75}
                />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-400 mb-4">{article.description}</p>
            </div>
            <ReadMoreButton article={article} />
        </div>
    );
};

export default Article;
