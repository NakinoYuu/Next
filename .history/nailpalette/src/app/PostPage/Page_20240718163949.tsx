"use client";
import React from "react";
import styles from "@/styles/postPage.module.scss";
import NextBtn from "@/components/NextBtn";

import Link from "next/link";

export default function PostPage() {
  return (
    <div className={styles.wrapper}>
      <h1>写真選択</h1>
      <Link href="/">
        <NextBtn />
      </Link>
    </div>
  );
}
