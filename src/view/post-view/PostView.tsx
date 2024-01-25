"use client";
import React from "react";
import ContentEditor from "./components/ContentEditor";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import FormControlBox from "@/components/form/FormControlBox";
import { postSchema } from "@/validation/post";
import { FormTypes } from "@/types/post";
import PostFormActions from "./components/PostFormAction";
import { Files } from "lucide-react";
import { Button } from "@nextui-org/react";

const PostView = ({ editData }: { editData?: FormTypes }) => {
  const defaultValue: FormTypes = {
    content: editData?.content || "",
    title: editData?.title || "",
  };
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FormTypes | any>({
    defaultValues: defaultValue,
    mode: "onSubmit",
    resolver: yupResolver(postSchema),
  });

  const onSubmit = (data: FormTypes) => {
    if (Object.keys(data.content).length === 0) {
      toast.error("Content Cannot Be Empty");
      return;
    }
    if (editData) {
      toast.success("Saved Successfully");
      return;
    }
    toast.success("Post Created");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between items-baseline pe-5 py-2 gap-3">
        <FormControlBox
          isClearable={false}
          errors={errors}
          control={control}
          label="Post Title"
          name="title"
          size="sm"
        />
        <PostFormActions editData={editData} isDirty={isDirty} />
      </div>
      <div className="max-h-[85vh] overflow-y-auto">
        <ContentEditor control={control} name="content" />
      </div>
    </form>
  );
};

export default PostView;
