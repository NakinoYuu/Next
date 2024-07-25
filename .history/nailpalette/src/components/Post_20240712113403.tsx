"use client";
import style from "@/styles/components/post.module.scss";
export default function Post() {
  return (
    <>
      <div className={style.post}>
        <div className={style.post-header}>
          <div className={style.user-icon}>
            <img src="/" alt="ユーザー画像" />
          </div>
          <div className={style.username}>ユーザー名</div>
        </div>
        <div className={style.post-content}>
          <img src="/" alt="投稿画像" />
        </div>
        <div className={style.post-footer}>
          <div className={style.buttons-left}>
            <div className={style.like}>
              <i className={style.far fa-heart}> </i>
            </div>
            <div className={style.comment}>
              <i className={style.far fa-comment}></i>
            </div>
            <div className={style.share}>
              <i className={style.fas fa-arrow-up-from-bracket}></i>
            </div>
          </div>
          <div className={style.buttons-right}>
            <div className={style.profile}>
              <i className={style.far fa-user}></i>
            </div>
            <div className={style.recommend}>
              <i className={style.far fa-star}></i>
            </div>
          </div>
        </div>
        <div className={style.comment-text}>コメント内容</div>
      </div>
    </>
  );
}
