import { getSinglePost } from "@/getPost";
import React from "react";

const PostDetailsPage = async ({ params }) => {
  const id = await params?.id;
  const post = await getSinglePost(id);
  console.log("inside Details", post);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">
        Post Details of {post?.title}
      </h2>
    </div>
  );
};

export default PostDetailsPage;
