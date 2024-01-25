import React from "react";
import { FormTypes } from "@/types/post";
import { Badge, Button } from "@nextui-org/react";
import { Dot, Save, Trash2, UploadCloud } from "lucide-react";
import DeleteAlert from "@/components/alert/DeleteAlert";

const PostFormActions = ({
  editData,
  isDirty,
}: {
  editData?: FormTypes;
  isDirty: boolean;
}) => {
  return (
    <React.Fragment>
      {Boolean(editData) ? (
        <>
          {isDirty ? (
            <Badge
              isOneChar
              content={<Dot />}
              size="sm"
              color="warning"
              shape="circle"
              placement="top-right"
            >
              <Button
                type="submit"
                variant="ghost"
                color="warning"
                size="sm"
                radius="sm"
                isDisabled={!isDirty}
                startContent={<Save size={20} />}
              >
                Save
              </Button>
            </Badge>
          ) : (
            <Button
              type="submit"
              variant="ghost"
              color="warning"
              size="sm"
              radius="sm"
              isDisabled={!isDirty}
              startContent={<Save size={20} />}
            >
              Save
            </Button>
          )}
          <DeleteAlert
            dialogContent="Are you sure you want to delete this snippet?"
            dialogTitle="Delete Snippet"
            trigger={
              <Button
                size="sm"
                variant="shadow"
                className="!bg-red-500"
                isIconOnly
                color="danger"
              >
                <Trash2 size={18} />
              </Button>
            }
          />
        </>
      ) : (
        <Button
          type="submit"
          variant="ghost"
          color="success"
          size="sm"
          radius="sm"
          startContent={<UploadCloud size={25} />}
        >
          Upload
        </Button>
      )}
    </React.Fragment>
  );
};

export default PostFormActions;
