import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import FormControlBox from "@/components/form/FormControlBox";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  handleSetFolderModalData,
  handleUpdateFolderModal,
} from "@/redux/slices/folder";
import { handleSetFolderInsideTechStack } from "@/queries/post";
import { useAuth } from "@/hooks/useAuth";
import { queryClient } from "@/utils/client";
import { SNIPPET } from "@/queries/query-keys";
import { uuid } from "@/utils/utility";
import useQueryParams from "@/hooks/useQueryParams";

const techStackSchema = yup.object().shape({
  name: yup.string().required("Name is required").max(255, "Name is too long"),
});

type FormTypes = {
  name: string;
};
const AddFolderModal = () => {
  const { modalOpen, modalData } = useSelector(
    (state: RootState) => state.folder
  );
  const dispatch = useDispatch();
  const auth = useAuth();
  const defaultValue: FormTypes = { name: modalData?.name || "" };
  const onOpenChange = () => dispatch(handleUpdateFolderModal(!modalOpen));
  const activeTech = useQueryParams("active-tech");
  const key = modalData ? modalData.id : null;
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
    setValue,
  } = useForm<FormTypes>({
    resolver: yupResolver(techStackSchema),
    defaultValues: defaultValue,
  });
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  const onSubmit = async (data: FormTypes) => {
    const isEdited = modalData ? true : false;
    await handleSetFolderInsideTechStack(
      auth.user,
      {
        name: data?.name,
        id: isEdited ? (modalData?.id as string) : uuid(),
        for: activeTech as string,
      },
      isEdited
    )
      .then(() => {
        queryClient.invalidateQueries({ queryKey: [SNIPPET.FOLDER] });
      })
      .finally(() => {
        onOpenChange();
      });
  };

  useEffect(() => {
    setValue("name", modalData?.name || "");
  }, [modalData, setValue]);
  return (
    <React.Fragment>
      <Modal
        onClose={() => {
          reset(defaultValue);
          dispatch(handleSetFolderModalData(null));
        }}
        isOpen={modalOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
      >
        <form onSubmit={handleSubmit(onSubmit)} onKeyDown={onKeyDown}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {modalData ? "Edit" : "Create"} Folder
                </ModalHeader>
                <ModalBody>
                  {/* Name */}
                  <FormControlBox
                    control={control}
                    errors={errors}
                    label="Name"
                    name="name"
                    size="sm"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button
                    isLoading={isSubmitting}
                    type="submit"
                    color="primary"
                  >
                    {modalData ? "Update" : "Create"}
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default AddFolderModal;
