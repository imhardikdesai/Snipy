// React Imports
import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

const DeleteAlert = ({
  trigger,
  dialogTitle,
  dialogContent,
  onAgree,
  onDisagree,
}: {
  trigger: React.ReactElement;
  dialogTitle: string;
  dialogContent: string;
  onAgree?: () => void;
  onDisagree?: () => void;
}) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const handleAgree = () => {
    onAgree && onAgree();
    onClose();
  };

  const handleDisagree = () => {
    onDisagree && onDisagree();
    onClose();
  };

  return (
    <>
      {React.cloneElement(trigger, { onClick: onOpen })}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {dialogTitle}
          </ModalHeader>
          <ModalBody>{dialogContent}</ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={handleDisagree}>
              No
            </Button>
            <Button color="primary" onPress={handleAgree}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteAlert;
