"use client";

import style from "@/styles/components/post.module.scss";
// Font Awesomeのインポート
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// 画像
import Image from "next/img";

export default function Post() {
  return (
    <>
      <div className={style.container}>
        <div className={style.post}>
          <div className={style.postHeader}>
            <div className={style.userIcon}>
              <img
                src="/img/aaa1.png"
                alt="ユーザー画像"
                width={500}
                height={500}
              />
            </div>
            <div className={style.username}>ユーザー名</div>
          </div>
          <div className={style.postContent}>
            <img src="/" alt="投稿画像" />
          </div>
          <div className={style.postFooter}>
            <div className={style.buttonsLeft}>
              <div className={style.like}>
                <FontAwesomeIcon className={style.heartIcon} icon={faHeart} />
              </div>

              <div className={style.comment}>
                <FontAwesomeIcon
                  className={style.commentIcon}
                  icon={faComment}
                />
              </div>
              <div className={style.share}>
                <FontAwesomeIcon
                  className={style.shareIcon}
                  icon={faArrowUpFromBracket}
                />
              </div>
            </div>
            <div className={style.buttonsRight}>
              <div className={style.profile}>
                <FontAwesomeIcon className={style.userIcon} icon={faUser} />
              </div>
              <div className={style.recommend}>
                <FontAwesomeIcon className={style.userIcon} icon={faStar} />
              </div>
            </div>
          </div>
          <div className={style.commentText}>コメント内容</div>
        </div>
      </div>
    </>
  );
}
