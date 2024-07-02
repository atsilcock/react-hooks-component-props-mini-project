import React from "react";
import Article from "./Article.js"


function ArticleList({ posts }) {
  return (
    <main>
        {posts.map(post => {
            return <Article title={post.title} date={post.date} preview={post.preview}/>
        })}
    </main>
  );
}

export default ArticleList;
