import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import ShowPasswordSvg from "/public/images/icons/show-password.svg";

interface PasswordFieldProps {
  label: string;
  id: string;
  name: string;
  fieldClassName?: string;
  required?: boolean;
}

const PasswordField = ({
  id,
  name,
  label,
  fieldClassName,
  required,
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label htmlFor={id}>
        {label}
        {required && <span> *</span>}
      </label>
      <div className="field">
        <Field
          type={showPassword ? "text" : "password"}
          id={id}
          name={name}
          className={fieldClassName}
        />
        <ErrorMessage className="error-message" name={name} component="span" />
        <button
          type="button"
          className="toggle-password-visibility"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <ShowPasswordSvg />
          ) : (
            <ShowPasswordSvg style={{ opacity: 0.3 }} />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
