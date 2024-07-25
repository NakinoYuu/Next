import Image from "next/image";
// リンク
import Link from "next/link";
// コンポーネント
import Header from "@/components/Header";
import Post_assessment from "@/components/Post_assessment.";
import css from "styled-jsx/css";
// css
import styles from "./page.module.css";
import post_assessment from "./post_assessment.module.scss";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Link href={"/"}></Link>
        <Link href={"./sample/01"}>あああ</Link>
        <a href="/"></a>
      </div>
    </>
  );
}
