import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoInformationCircleOutline } from "react-icons/io5";
import Tooltip from "./Tooltip";
import { formData } from "./FlatFoundationForm";

type FormInputProps = {
  id: string;
  label: string;
  tooltip: ReactNode;
  register: UseFormRegister<formData>;
  errors: FieldErrors<formData>; // replace with the appropriate type for your errors
  placeholder: string;
  defaultValue?: number;
};

export function FormInput({
  id,
  label,
  tooltip,
  register,
  errors,
  placeholder,
  defaultValue,
}: FormInputProps) {
  return (
    <div className="flex border-b mt-4 border-slate-200 pb-4 justify-between items-center">
      <div className="flex justify-start items-center gap-1 w-1/2">
        <Tooltip tooltip={tooltip}>
          <IoInformationCircleOutline className="w-6 h-6 cursor-pointer text-yellow-600 hover:text-yellow-700 transition-all" />
        </Tooltip>
        <Label className="text-[15px]" htmlFor={id}>
          {label}
        </Label>
      </div>
      <Input
        defaultValue={defaultValue}
        id={id}
        className={`${
          errors[id as keyof formData] ? " border-red-400" : ""
        } w-1/2`}
        type="number"
        placeholder={placeholder}
        {...register(id as keyof formData, {
          required: "Šis laukas yra privalomas",
        })}
      />
    </div>
  );
}
