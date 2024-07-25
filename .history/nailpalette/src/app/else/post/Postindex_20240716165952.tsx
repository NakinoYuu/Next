// import Image from "next/image";
// リンク
// import Link from "next/link";
// コンポーネント
import PostFooter from "@/components/PostFooter";
// import css from "styled-jsx/css";
// css
import styles from "../styles/postFooter.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.Wrapper}>
        <PostFooter />
      </div>
    </>
  );
}
