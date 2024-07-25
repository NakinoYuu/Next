"use client";
import style from "@/styles/components/post.module.scss";
export default function Post() {
  return (
    <>
      <div className={style.post}>
        <div className={style.post_header}>
          <div className={style.user_icon}>
            <img src="/" alt="ユーザー画像" />
          </div>
          <div className={style.username}>ユーザー名</div>
        </div>
        <div className={style.post_content}>
          <img src="/" alt="投稿画像" />
        </div>
        <div className={style.post_footer}>
          <div className={style.buttons_left}>
            <div className={style.like}>
              <i className={style.far_fa_heart}> </i>
            </div>
            <div className={style.comment}>
              <i className={style.far_fa_comment}></i>
            </div>
            <div className={style.share}>
              <i className={style.fas_fa_arrow_up_from_bracket}></i>
            </div>
          </div>
          <div className={style.buttons_right}>
            <div className={style.profile}>
              <i className={style.far_fa_user}></i>
            </div>
            <div className={style.recommend}>
              <i className={style.far_fa_star}></i>
            </div>
          </div>
        </div>
        <div className={style.comment_text}>コメント内容</div>
      </div>
    </>
  );
}
