let categories = [
  "General",
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

import NewsList from "../../components/NewsList";
import fetchNews from "../../lib/fetchNews";

async function HomePage() {
  const news = await fetchNews();
  return (
    <div>
      <NewsList news={news} />
    </div>
  )
}

export default HomePage



