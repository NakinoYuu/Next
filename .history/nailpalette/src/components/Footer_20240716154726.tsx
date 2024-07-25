"use client";
import React from "react";
import styles from "../styles/components/footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHouseRegular,
  faStar as faStarRegular,
  faUser as faUserRegular,
} from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.home}>
          <FontAwesomeIcon className={styles.fontIcon} icon={faHouseRegular} />
        </div>
        <div className={styles.save}>
          <FontAwesomeIcon className={styles.fontIcon} icon={faStarRegular} />
        </div>
        <div className={styles.post}>
          <FontAwesomeIcon className={styles.fontIcon} icon={faPlus} />
        </div>
        <div className={styles.profile}>
          <FontAwesomeIcon className={styles.fontIcon} icon={faUserRegular} />
        </div>
      </div>
    </div>
  );
}
