import React from 'react';
import Article from './Article';

interface NewsListProps {
    news: {
        title: string;
        description: string;
        url: string;
        urlToImage: string;
    }[];
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
    return (
        <main className="p-4 mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {news.map((article, index) => (
                    <Article key={index} article={article} />
                ))}
            </div>
        </main>
    );
};

export default NewsList;
