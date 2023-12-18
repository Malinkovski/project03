import { ErrorMessage, Field } from "formik";
import React from "react";

interface FormFieldProps {
  label: string;
  type?: string;
  id: string;
  name: string;
  fieldClassName?: string;
  required?: boolean;
}

const FormField = ({
  type,
  id,
  name,
  label,
  fieldClassName,
  required,
}: FormFieldProps) => {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        {required && <span> *</span>}
      </label>
      <div className="field">
        <Field
          type={type ? type : "text"}
          id={id}
          name={name}
          className={fieldClassName}
        />
        <ErrorMessage className="error-message" name={name} component="span" />
      </div>
    </div>
  );
};

export default FormField;
