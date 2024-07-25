"use client";
import React from "react";
// css
import styles from "../styles/footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// FontAwesomeIcon
import {
  faHeart as faHouseRegular,
  faStar as faStarRegular,
  faUser as faUserRegular,
} from "@fortawesome/free-Regular-svg-icons";
import { faPlusSolid } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <div className={styles.footerWrapper}>
        <div className={styles.home}>
          <FontAwesomeIcon className={styles.fontIcon} icon={faHouseRegular} />
        </div>
        <div className={styles.save}></div>
        <div className={styles.post}></div>
        <div className={styles.profile}></div>
      </div>
    </>
  );
}
