import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Link href="/">Home</Link>
      {children}
    </>
  );
}
