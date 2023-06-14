import Link from "next/link";
import styles from "../styles/List.module.css";
import Image from "next/image";

export default function List({ results, title }) {
  return (
    <main>
      <h1>{title}</h1>
      <ul className={styles.list}>
        {results?.map(({ title, url, uri, img }) => {
          return (
            <Link key={uri} href={url} rel="noreferrer nofollower">
              {/* {Image} */}
              {title}
            </Link>
          );
        })}
      </ul>
    </main>
  );
}
