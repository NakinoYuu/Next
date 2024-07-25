// src/app/else/PostPage/page.tsx
"use client";
import React from "react";
import styles from "@/styles/postPage.module.scss";
import Footer from "@/components/Footer";

export default function PostPage() {
  return (
    <div className={styles.wrapper}>
      <p>Post Page</p>
      <Footer />
    </div>
  );
}
