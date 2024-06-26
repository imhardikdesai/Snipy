import React, { cloneElement } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
} from "@nextui-org/react";
import FormControlBox from "@/components/form/FormControlBox";
import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "@iconify/react/dist/iconify.js";
import { HandleSetTechStackData, handleSetTechStack } from "@/queries/post";
import { useAuth } from "@/hooks/useAuth";
import { SNIPPET } from "@/queries/query-keys";
import { queryClient } from "@/utils/client";
import { uuid } from "@/utils/utility";
import { useMutation } from "@tanstack/react-query";

const techStackSchema = yup.object().shape({
  name: yup.string().required("Name is required").max(255, "Name is too long"),
  icon: yup.string().required("Icon is required").max(255, "Icon is too long"),
});

type FormTypes = {
  name: string;
  icon: string;
  id?: string | null;
};
const TechStackModal = ({
  trigger,
  modalData,
}: {
  trigger: React.ReactElement;
  modalData?: any;
}) => {
  const auth = useAuth();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const defaultValue: FormTypes = {
    name: modalData?.name || "",
    icon: modalData?.icon || "",
    id: modalData?.id || null,
  };
  const {
    control,
    formState: { errors },
    watch,
    handleSubmit,
    reset,
  } = useForm<FormTypes>({
    resolver: yupResolver(techStackSchema),
    defaultValues: defaultValue,
  });

  // const { mutate } = useMutation<any>(handleSetTechStack, {
  //   onSuccess: () => {},
  //   onError: () => {},
  //   onSettled: () => {
  //     queryClient.invalidateQueries({ queryKey: [SNIPPET.TECH_STACK] });
  //   },
  // });

  const onSubmit = async (data: FormTypes) => {
    const isEdited = modalData ? true : false;
    const mutateData = {
      user: auth.user,
      data: {
        name: data?.name,
        icon: data?.icon,
        id: isEdited ? modalData?.id : uuid(),
      },
      isEdit: isEdited,
    };
    // mutate(mutateData as any);
    await handleSetTechStack(mutateData)
      .then(() => {
        queryClient.invalidateQueries({ queryKey: [SNIPPET.TECH_STACK] });
      })
      .finally(() => {
        onOpenChange();
      });
  };
  return (
    <React.Fragment>
      {cloneElement(trigger, {
        onClick: onOpen,
      })}
      <Modal
        onClose={() => reset(defaultValue)}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {modalData ? "Edit" : "Create"} Tech Stack
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
                  {/* Icon */}
                  <div className="flex justify-between items-center gap-1">
                    <FormControlBox
                      control={control}
                      errors={errors}
                      label="Icon"
                      name="icon"
                      size="sm"
                      placeholder="Ex:- mdi:react"
                      endContent={<Icon fontSize={30} icon={watch().icon} />}
                    />
                    <Tooltip
                      size="sm"
                      placement="right"
                      color="primary"
                      content="Select custom icon"
                    >
                      <a
                        target="_blank"
                        href={`https://icon-sets.iconify.design/?query=${
                          watch().name
                        }`}
                      >
                        <Button
                          isIconOnly
                          color="primary"
                          variant="faded"
                          size="sm"
                        >
                          <Plus />
                        </Button>
                      </a>
                    </Tooltip>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
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

export default TechStackModal;
