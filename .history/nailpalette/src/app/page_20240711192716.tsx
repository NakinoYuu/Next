import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Link from "next/link";

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
