import { Icon } from "@iconify/react/dist/iconify.js";
import { VisuallyHidden, cn, useRadio } from "@nextui-org/react";

const CustomRadio = (props: any) => {
  const {
    Component,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getControlProps,
  } = useRadio(props);
  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group items-center hover:opacity-70 active:opacity-50 justify-between tap-highlight-transparent cursor-pointer border-2 p-[6px] border-default rounded-lg gap-4 data-[selected=true]:border-primary flex-row w-12 h-12 flex"
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
        <span {...getWrapperProps()}>
          <span {...getControlProps()} />
        </span>
      </VisuallyHidden>
      {props.icon && <Icon icon={props.icon} fontSize={36} />}
    </Component>
  );
};

export default CustomRadio;
