// src/app/else/SavePage/page.tsx
"use client";
import React from "react";
import styles from "@/styles/savePage.module.scss";
import TableOfContents from "@/components/TableOfContents";
import Image from "next/image";

export default function SavePage() {
  return (
    <div className={styles.wrapper}>
      <TableOfContents />
      <h1>保存</h1>
      <div className={styles.profile}>
        <p>プロフィールシート</p>
      </div>
      <div className={styles.saves}>
        <Image
          className={styles.img}
          src="/img/bbb2.png"
          alt="投稿画像"
          width={500}
          height={500}
        />
        <Image
          className={styles.img}
          src="/img/bbb2.png"
          alt="投稿画像"
          width={500}
          height={500}
        />
        <Image
          className={styles.img}
          src="/img/bbb2.png"
          alt="投稿画像"
          width={500}
          height={500}
        />
        <Image
          className={styles.img}
          src="/img/bbb2.png"
          alt="投稿画像"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
