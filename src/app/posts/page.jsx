import PostCardComponent from "@/component/PostCard/PostCard";
import { getPosts } from "@/getPost";
import React from "react";

const PostsPage = async () => {
  const posts = await getPosts();
  console.log(posts.slice(0, 10));
  return (
    <div>
      <h2 className="text-2xl text-center text-[#6803b6] font-bold py-5">
        All Posts {posts.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.slice(0, 10).map((post) => (
          <PostCardComponent key={post?.id} post={post}></PostCardComponent>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
