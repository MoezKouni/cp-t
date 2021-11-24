import { Button } from "react-bootstrap";

interface ButtonT {
  children: string | React.ReactNode;
  type: string;
  className?: string;
  size?: string;
  onClick?: () => void;
}

export default function ReusableBtn({
  type,
  className,
  size = "small",
  children,
  onClick,
}: ButtonT) {
  return (
    <Button
      onClick={onClick}
      variant={type === "outlined" ? "outline-primary" : "primary"}
      className={`${className} ${type}`}
      style={size === "large" ? { padding: "13px 27px" } : {}}
    >
      {children}
    </Button>
  );
}
