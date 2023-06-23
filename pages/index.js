import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  //Get static path related example data
  const links = [
    {
      title: "Top Stories",
      desc: "Read articles currently on the homepage of the New York times",
      path: "news/top-stories",
    },
    {
      title: "Popular",
      desc: "Read the most popular articles on the New York Times",
      path: "news/popular",
    },
  ];

  const [searchQuery, getSearchQuery] = useState();
  const router = useRouter();
  const handleOnChange = (e) => getSearchQuery(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${searchQuery}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>News Feed</h1>

        {/* Search form  */}
        <form onSubmit={handleOnSubmit}>
          <input type="text" onChange={handleOnChange} />
        </form>

        {/* Navigation Cards */}
        <div className={styles.grid}>
          {links.map((link) => {
            return (
              <Link key={link.path} href={link.path} className={styles.card}>
                <h2>{link.title} &rarr;</h2>
                <p>{link.desc}</p>
              </Link>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
