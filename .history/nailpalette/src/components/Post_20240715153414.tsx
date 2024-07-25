// Post.tsx

"use client";

import style from "@/styles/components/post.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeartSolid,
  faComment as faCommentSolid,
  faArrowUpFromBracket,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as faHeartRegular,
  faComment as faCommentRegular,
  faUser as faUserRegular,
  faStar as faStarRegular,
} from "@fortawesome/free-regular-svg-icons"; // 画像
import Image from "next/image";

export default function Post() {
  const [liked, setLiked] = useState(false);
  const [starred, setStarred] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleStar = () => {
    setStarred(!starred);
  };

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
                  className={`${style.fontIcon} ${liked ? style.active : ""}`}
                  icon={liked ? faHeartSolid : faHeartRegular}
                  onClick={toggleLike}
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
                  icon={faArrowUpFromBracket}
                />
              </div>
            </div>
            <div className={style.buttonsRight}>
              <div className={style.profile}>
                <FontAwesomeIcon
                  className={`${style.fontIcon} ${starred ? style.active : ""}`}
                  icon={starred ? faStarSolid : faStarRegular}
                  onClick={toggleStar}
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
