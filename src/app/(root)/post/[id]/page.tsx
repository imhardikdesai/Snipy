import React from "react";

const PostDetail = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  return (
    <div>
      <h1>Post Detail {id}</h1>
    </div>
  );
};

export default PostDetail;
