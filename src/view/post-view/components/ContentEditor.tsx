import React from "react";
import { Editor } from "novel";
import { Control, Controller } from "react-hook-form";

const ContentEditor = ({
  control,
  name,
}: {
  control: Control<any>;
  name: string;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Editor
          defaultValue={value}
          onUpdate={(e: any) => onChange(e.getJSON())}
          completionApi="/api/generate"
          className="border-none bg-black"
          // storageKey="content"
          disableLocalStorage
        />
      )}
    />
  );
};

export default ContentEditor;
