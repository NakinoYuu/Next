"use client";
import style from "@/styles/components/Research.module.scss";
import Circle from "./Circle";
// Font Awesomeのインポート
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Research() {
  return (
    <div className={style.research}>
      <Circle />
      {/* FontAwesomeIconコンポーネントを使用してアイコンを表示 */}
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
}
