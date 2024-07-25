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
        <div class="post-footer">
                <div class="buttons-left">
                    <div class="like"><i class="far fa-heart"> </i></div>
                    <div class="comment"><i class="far fa-comment"></i></div>
                    <div class="share"><i class="fas fa-arrow-up-from-bracket"></i></div>
                </div>
                <div class="buttons-right">
                    <div class="profile"> <i class="far fa-user"></i></div>
                    <div class="recommend"> <i class="far fa-star"></i></div>
                </div>
            </div>
        <div className="comment-text">コメント内容</div>
      </div>{" "}
    </>
  );
}
