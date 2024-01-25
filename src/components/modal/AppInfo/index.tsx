import React, { cloneElement } from "react";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";

export default function AppInfo({ trigger }: { trigger: React.ReactElement }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <React.Fragment>
      {cloneElement(trigger, {
        onClick: onOpen,
      })}
      <Modal size="5xl" backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {() => (
            <video width="100%" height="900" controls>
              <source src="/assets/info.mp4" type="video/mp4" />
            </video>
          )}
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
}
