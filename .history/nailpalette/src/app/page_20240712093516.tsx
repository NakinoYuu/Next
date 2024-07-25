import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
// コンポーネント
import Header from "@/components/Header";
import Post_assessment from "@/components/Post_assessment";

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
