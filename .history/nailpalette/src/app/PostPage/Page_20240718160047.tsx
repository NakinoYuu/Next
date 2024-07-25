// src/app/else/PostPage/page.tsx
"use client";
import React from "react";
import styles from "@/styles/postPage.module.scss";
import NextBtn from "@/components/NextBtn";

export default function PostPage() {
  return (
    <div className={styles.wrapper}>
      <h1>写真選択</h1>
      <NextBtn />
    </div>
  );
}
