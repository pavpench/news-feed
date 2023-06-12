import Link from "next/link";

export default function List({ results, title }) {
  return (
    <main>
      <h1>{title}</h1>
      <ul>
        {results?.map(({ title, url, uri, img }) => {
          return (
            <Link key={uri} href={url} rel="noreferrer nofollower">
              {title}
            </Link>
          );
        })}
      </ul>
    </main>
  );
}
