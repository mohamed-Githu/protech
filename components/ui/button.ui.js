import Typography from "./typography.ui";

const styles = {
  fill: "bg-primary",
  outline: "bg-opacity-20 bg-primary ring-inset ring-1 ring-primary",
};

const radiuses = {
  normal: "rounded-5",
  full: "rounded-full",
};

const Button = ({
  variant,
  style,
  color,
  radius,
  children,
  className,
  onClick,
}) => (
  <button
    className={`px-7 xs:px-5 py-2 box-border transition duration-500 ${styles[style]} ${radiuses[radius]} ${className}`}
    onClick={onClick}
  >
    <Typography
      variant={variant}
      className={`text-center ${
        color === "blue" ? "text-primary" : "text-white"
      }`}
    >
      {children}
    </Typography>
  </button>
);

export default Button;

Button.defaultProps = {
  variant: "button",
  style: "fill",
  color: "white",
  radius: "normal",
  className: "",
};
