import Link from "next/link";

export default function Home() {
  return (<>
    <h1>view Home</h1>
    <Link href="/page-two">page 2</Link>
    <Link href="/page-three">page 3</Link>
  </>
  );
}
