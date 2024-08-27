import { gql } from 'graphql-request';

// Define the GraphQL query
const query =  gql`
query MyQuery   {
  myQuery(country: "us", apiKey: "YOUR_API_KEY") {
    status
    totalResults
    articles {
      author
      content
      description
      title
      url
      urlToImage
    }
  }
}
`;


// Define your API endpoint and API key
const endpoint = 'https://santamariaii.us-east-a.ibm.stepzen.net/api/illocutionary-anteater/__graphql';
const STEPZEN_API_KEY = 'santamariaii::local.net+1000::010f7b4d6483cc733a972774f641af5e0620285faae265a214b7f530ab54dd14'; 
const NEWS_DATA_API_KEY = '64a80c3d10914887b605496d4746ee53'; 

// Function to fetch news
const fetchNews = async (
  category?: string,
  keywords?: string,
  isDynamic?: boolean
) => {
  try {
    // Make the fetch request
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Apikey ${STEPZEN_API_KEY}`, // Use the correct API key here
      },
      body: JSON.stringify({
        query, // Access the query string
        variables: {
          apikey: NEWS_DATA_API_KEY,
        },
      }),
    });

    // Check if the response is OK
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }

    // Parse the JSON response
    const newsResponse = await res.json();

    // Return the data
    return newsResponse.data.myQuery.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw new Error('Failed to fetch news');
  }
};

export default fetchNews;
