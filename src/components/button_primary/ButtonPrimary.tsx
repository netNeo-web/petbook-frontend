import './ButtonPrimary.css';

type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
  label: string;
  onClick: () => void;
};

const ButtonPrimary = ({
  size = 'medium',
  color = 'primary',
  label,
  onClick,
}: ButtonProps) => {
  return (
    <button className={`button ${size} ${color}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default ButtonPrimary;
