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
            <li className={styles.card} key={uri}>
              <Image src={img} alt={title} width="75" height="75" />
              <Link
                key={uri}
                href={url}
                rel="noreferrer nofollower"
                className={styles.card}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
