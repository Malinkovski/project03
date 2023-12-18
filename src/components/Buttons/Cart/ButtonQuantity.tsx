interface QuantityButtonProps {
  onClick: () => void;
  disabled: boolean;
  icon: string;
}

const ButtonQuantity = ({ onClick, disabled, icon }: QuantityButtonProps) => {
  return (
    <div onClick={onClick} className={`q-button ${disabled ? "disabled" : ""}`}>
      <i className={`fas ${icon}`}></i>
    </div>
  );
};

export default ButtonQuantity;
