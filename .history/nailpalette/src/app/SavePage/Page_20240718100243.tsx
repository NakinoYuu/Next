// src/app/else/SavePage/page.tsx
"use client";
import React from "react";
import styles from "@/styles/savePage.module.scss";
import Footer from "@/components/Footer";

export default function SavePage() {
  return (
    <div className={styles.wrapper}>
      <h1>保存</h1>
      <Footer />
    </div>
  );
}
