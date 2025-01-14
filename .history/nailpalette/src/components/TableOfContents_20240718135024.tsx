"use client";
import style from "@/styles/components/tableOfContents.module.scss";
import Circle from "./Circle";
// Font Awesomeのインポート
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function TableOfContents() {
  return (
    <div className={style.TableOfContents}>
      <Circle />
      <FontAwesomeIcon
        className={style.researchIcon}
        icon={faMagnifyingGlass}
      />
    </div>
  );
}
