// import Image from "next/image";
// リンク
// import Link from "next/link";
// コンポーネント
import PostFooter from "@/components/Footer";
// import css from "styled-jsx/css";
// css
import styles from "../styles/page.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.Wrapper}>
        <PostFooter />
      </div>
    </>
  );
}
