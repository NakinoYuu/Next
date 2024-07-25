"use client";

import style from `@/styles/components/post.module.scss`;

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
        <Post_assessment />
        <div className="comment-text">コメント内容</div>
      </div>{" "}
    </>
  );
}
