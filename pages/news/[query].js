//Dynamic route

import Layout from "../../components/Layout";
import { search } from "../api/index";

export default function News({ results, query }) {
  return (
    <Layout>
      <h1>Search: {query}</h1>
      <ul>
        {results.map((result) => {
          return (
            <li key={result.url}>
              <a href={result.url} target="_blank" rel="noopener noreferrer">
                {result.title}
              </a>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

//NY times API for fetching data
const API_KEY = "plbCTSLsncuKnvXzlc8Cf02XQkGGVuz6";

//Prerender data based on user input
export async function getServerSideProps({ params }) {
  const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${API_KEY}`;
  const results = await search(URL);

  return {
    props: {
      results,
      query: params.query,
    },
  };
}
