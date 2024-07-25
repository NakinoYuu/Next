"use client";
import style from "@/styles/components/Research.module.scss";
import Circle from "@/components/Circle";
export default function Research() {
  return (
    <>
      <div className={style.research}>
        <Circle />
        <FontAwesomeIcon icon={faCoffee} />{" "}
      </div>
    </>
  );
}
