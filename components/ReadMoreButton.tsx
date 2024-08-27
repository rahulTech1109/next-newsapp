'use client';
import { useRouter } from "next/navigation";

type Props = {
    article: any;
};

function ReadMoreButton({ article }: Props) {
    const router = useRouter();

    const handleClickbutton = () => {
        const queryString = Object.entries(article)
            .map(([key, value]) => `${key}=${value}`)
            .join("&");
        const url = `/article?${queryString}`;
        console.log(url);
        router.push(url);
    };

    return (
        <button
            onClick={handleClickbutton}
            className="w-full bg-orange-500 h-12 rounded-b-lg text-gray-900 font-semibold hover:bg-orange-300 transition-colors"
        >
            Read More
        </button>
    );
}

export default ReadMoreButton;
