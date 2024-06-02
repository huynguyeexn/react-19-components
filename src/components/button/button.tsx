import styled from "styled-components";
import { ButtonProps } from "./Button.interface";
import {
  baseStyle,
  sizeDefaultStyle,
  sizeLagerStyle,
  sizeSmallStyle,
  typeDashStyle,
  typeDefaultStyle,
  typeLinkStyle,
  typePrimaryStyle,
  typeTextStyle,
} from "./Button.style";

const genTypeStyle = ({ type, ...props }: ButtonProps) => {
  switch (type) {
    case "primary":
      return typePrimaryStyle(props);
    case "dashed":
      return typeDashStyle(props);
    case "text":
      return typeTextStyle(props);
    case "link":
      return typeLinkStyle(props);
  }

  return typeDefaultStyle(props);
};

const genSizeStyle = ({ size }: ButtonProps) => {
  switch (size) {
    case "small":
      return sizeSmallStyle();
    case "large":
      return sizeLagerStyle();
  }

  return sizeDefaultStyle();
};

const ButtonStyled = styled.button<ButtonProps>`
  ${baseStyle()}
  ${(props) => genTypeStyle(props)}
  ${(props) => genSizeStyle(props)}
  ${(props) => props.block && `width: 100%;`}
`;

const Button = ({
  type = "default",
  size = "middle",
  disabled = false,
  block = false,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled
      type={type}
      size={size}
      disabled={disabled}
      block={block}
      {...props}
    >
      {props.label ?? props.children}
    </ButtonStyled>
  );
};

Button.displayName = "Button";
export default Button;
