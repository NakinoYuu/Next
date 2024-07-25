"use client";

import Post_assessment from "./Post_assessment";

export default function Home() {
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
