import Link from "next/link";
import Layout from "../../components/Layout";
import { search } from "../api/index";
import List from "@/components/List";

export default function Search_News(props) {
  return (
    <Layout>
      {/* <h1>Search: {searchQuery}</h1>
      <ul>
        {results.map((result) => {
          return (
            <li key={result.url}>
              <Link href={result.url} target="_blank" rel="noopener noreferrer">
                {result.title}
              </Link>
            </li>
          );
        })}
      </ul> */}
      <List {...props} />
    </Layout>
  );
}

//NY times API for fetching data
const API_KEY = "plbCTSLsncuKnvXzlc8Cf02XQkGGVuz6";

//Prerender data on request time based on user input
export async function getServerSideProps({ params }) {
  const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.searchQuery}&api-key=${API_KEY}`;
  const results = await search(URL);

  return {
    props: {
      results,
      searchQuery: params.searchQuery,
    },
  };
}
