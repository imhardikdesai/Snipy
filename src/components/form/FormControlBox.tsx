import React from "react";
import { Input } from "@nextui-org/react";
import { FormControl } from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface FormControlBoxProps {
  label: string;
  name: string;
  control: Control<any>;
  errors: any;
  placeholder?: string;
  isDisabled?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isClearable?: boolean;
  size?: "sm" | "md" | "lg";
}

const FormControlBox: React.FC<FormControlBoxProps> = ({
  label,
  name,
  control,
  errors,
  placeholder,
  isDisabled,
  startContent,
  endContent,
  isClearable,
  size,
}) => {
  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange, onBlur } }) => (
          <Input
            isClearable={isClearable}
            onClear={() => onChange(null)}
            disabled={isDisabled}
            label={label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            isInvalid={Boolean(errors[name]?.message)}
            errorMessage={errors[name]?.message}
            placeholder={placeholder}
            startContent={startContent}
            endContent={endContent}
            size={size}
          />
        )}
      />
    </FormControl>
  );
};

export default FormControlBox;
