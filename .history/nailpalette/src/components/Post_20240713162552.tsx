"use client";

import style from "@/styles/components/post.module.scss";

export default function Post() {
  return (
    <>
      <div className={style.post}>
        <div className={style.postHeader}>
          <div className={style.userIcon}>
            <img src="/" alt="ユーザー画像" />
          </div>
          <div className={style.username}>ユーザー名</div>
        </div>
        <div className={style.postContent}>
          <img src="/" alt="投稿画像" />
        </div>
        <div className={style.postFooter}>
          <div className={style.buttonsLeft}>
            <div className={style.like}>
              <i className={style.far faHeart}> </i>
            </div>
            <div className={style.comment}>
              <i className={style.far faComment}></i>
            </div>
            <div className={style.share}>
              <i className={style.fas faArrowUpFromBracket}></i>
            </div>
          </div>
          <div className={style.buttonsRight}>
            <div className={style.profile}>
              <i className={style.far faUser}></i>
            </div>
            <div className={style.recommend}>
              <i className={style.far faStar}></i>
            </div>
          </div>
        </div>
        <div className={style.commentText}>コメント内容</div>
      </div>
    </>
  );
}
