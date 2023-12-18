import React from "react";

interface ButtonTogglePassVisProps {
  showPassword: boolean;
  togglePasswordVisibility: () => void;
}

const ButtonTogglePassVis = ({
  showPassword,
  togglePasswordVisibility,
}: ButtonTogglePassVisProps) => {
  return (
    <button
      type="button"
      className="toggle-password-visibility"
      onClick={togglePasswordVisibility}
    >
      {showPassword ? "Hide" : "Show"}
    </button>
  );
};

export default ButtonTogglePassVis;
