import React from "react";
import PostView from "@/view/post-view/PostView";
import { DUMMY_POST_DATA } from "@/constant/dummyData";

const PostDetail = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  return (
    <div className="w-full">
      <PostView editData={DUMMY_POST_DATA} />
    </div>
  );
};

export default PostDetail;
