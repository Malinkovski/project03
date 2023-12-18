import { Field } from "formik";
import React from "react";

interface CheckboxFieldProps {
  label: string;
  id: string;
  name: string;
  onClick?: (value: boolean) => void;
}

const CheckboxField = ({ id, name, label }: CheckboxFieldProps) => {
  return (
    <div className="checkbox-form">
      <Field
        type="checkbox"
        id={id}
        name={name}
        className="checkbox-input"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckboxField;