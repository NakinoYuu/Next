// import Image from "next/image";
// リンク
// import Link from "next/link";
// コンポーネント
import Header from "@/components/Header";
import Post from "@/components/Post";
// import css from "styled-jsx/css";
// css
import styles from "../styles/page.module.scss";

export default function Home() {
  return (
    <>
      <body>
        <Header />
        <h1 className={styles.title}>Nail Palette</h1>
        <div className={styles.scroll}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </body>
    </>
  );
}