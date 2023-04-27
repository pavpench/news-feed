//Headless CMS example
import Layout from "../../components/Layout";
import { handler } from "../api";

export default function News({ results }) {
  return (
    <Layout>
      <h1>Top Stories</h1>
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

export async function getStaticProps() {
  const results = await handler(
    `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
  );

  //The value of the `props` key will be passed to the `Home` component
  return {
    props: {
      results,
    },
  };
}
