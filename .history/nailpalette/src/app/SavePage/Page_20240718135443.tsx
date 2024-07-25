// src/app/else/SavePage/page.tsx
"use client";
import React from "react";
import styles from "@/styles/savePage.module.scss";
import TableOfContents from "@/components/TableOfContents";

export default function SavePage() {
  return (
    <div className={styles.wrapper}>
      <TableOfContents />
      <h1>保存</h1>
    </div>
  );
}
