import Image from "next/image";
// リンク
import Link from "next/link";
// コンポーネント
import Header from "@/components/Header";
// import css from "styled-jsx/css";
// css
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <h1>Nail Palette</h1>
      <div>
        <Post />
        <Link href={"/"}></Link>
        <Link href={"./sample/01"}>あああ</Link>
        <a href="/"></a>
      </div>
    </>
  );
}
