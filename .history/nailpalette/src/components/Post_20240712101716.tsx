"use client";

import style from "@/styles/components/post.module.scss";

export default function Post() {
  return (
    <>
      <div className="post">
        <div className="post-header">
          <div className="user-icon">
            <img src="/" alt="ユーザー画像" />
          </div>
          <div className="username">ユーザー名</div>
        </div>
        <div className="post-content">
          <img src="/" alt="投稿画像" />
        </div>
        <div className="post-footer">
          <div className="buttons-left">
            <div className="like">
              <i className="far fa-heart"> </i>
            </div>
            <div className="comment">
              <i className="far fa-comment"></i>
            </div>
            <div className="share">
              <i className="fas fa-arrow-up-from-bracket"></i>
            </div>
          </div>
          <div className="buttons-right">
            <div className="profile">
              <i className="far fa-user"></i>
            </div>
            <div className="recommend">
              <i className="far fa-star"></i>
            </div>
          </div>
        </div>
        <div className="comment-text">コメント内容</div>
      </div>
    </>
  );
}
