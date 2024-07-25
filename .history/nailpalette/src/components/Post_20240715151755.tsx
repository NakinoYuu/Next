"use client";

import style from "@/styles/components/post.module.scss";
// Font Awesomeのインポート
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHeart,
//   faComment,
//   faArrowUpFromBracket,
//   faUser,
//   faStar,
// } from "@fortawesome/free-solid-svg-icons";
// 追加のインポート
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faComment as faCommentRegular } from "@fortawesome/free-regular-svg-icons";
import { fafaArrowUpFromBracket as faArrowUpFromBracketRegular } from "@fortawesome/free-regular-svg-icons";
import { faUser as faUserRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

// 画像
import Image from "next/image";

export default function Post() {
  return (
    <>
      <div className={style.container}>
        <div className={style.post}>
          <div className={style.postHeader}>
            <div className={style.userIcon}>
              <Image
                src="/img/aaa1.png"
                alt="ユーザー画像"
                width={50}
                height={50}
              />
            </div>
            <div className={style.username}>ユーザー名</div>
          </div>
          <div className={style.postContent}>
            <Image
              src="/img/bbb2.png"
              alt="投稿画像"
              width={500}
              height={500}
            />
          </div>
          <div className={style.postFooter}>
            <div className={style.buttonsLeft}>
              <div className={style.like}>
                <FontAwesomeIcon
                  className={style.fontIcon}
                  icon={faHeartRegular}
                />
              </div>
              <div className={style.comment}>
                <FontAwesomeIcon
                  className={style.fontIcon}
                  icon={faCommentRegular}
                />
              </div>
              <div className={style.share}>
                <FontAwesomeIcon
                  className={style.fontIcon}
                  icon={faArrowUpFromBracketRegular}
                />
              </div>
            </div>
            <div className={style.buttonsRight}>
              <div className={style.profile}>
                <FontAwesomeIcon
                  className={style.fontIcon}
                  icon={faUserRegular}
                />
              </div>
              <div className={style.recommend}>
                <FontAwesomeIcon
                  className={style.fontIcon}
                  icon={faStarRegular}
                />
              </div>
            </div>
          </div>
          <div className={style.commentText}>コメント内容</div>
        </div>
      </div>
    </>
  );
}
