"use client";
import style from "@/styles/components/Research.module.scss";
import Circle from "./Circle";
export default function Research() {
  return (
    <>
      <div className={style.research}>
        <Circle />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </>
  );
}
