import { ButtonProps } from "./Button.interface";

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  return (
    <button
      type="button"
      style={{
        backgroundColor,
      }}
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " ",
      )}
      {...props}
    >
      {label}
    </button>
  );
};
