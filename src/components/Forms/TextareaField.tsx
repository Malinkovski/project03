import { ErrorMessage, Field } from 'formik';
import React from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  fieldClassName?: string;
  required?: boolean;
  rows?: number;
}

const TextareaField = ({
  id,
  name,
  label,
  fieldClassName,
  required,
  rows = 6,
}: FormFieldProps) => {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        {required && <span> *</span>}
      </label>
      <div className="field">
        <Field
          as="textarea" // Use "textarea" as the value for the "as" prop
          id={id}
          name={name}
          className={fieldClassName}
          rows={rows}
        />
        <ErrorMessage className="error-message" name={name} component="span" />
      </div>
    </div>
  );
};

export default TextareaField;