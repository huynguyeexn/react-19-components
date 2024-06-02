import { css } from "styled-components";
import { ButtonProps } from "./Button.interface";

const disabledStyle = css`
  cursor: not-allowed;
  color: rgba(0, 0, 0, 0.25);
`;

const disabledWithBackgroundStyle = css`
  ${disabledStyle}
  border-color: #d9d9d9;
  background: rgba(0, 0, 0, 0.04);
  box-shadow: none;
`;

const typeDefaultStyle = ({ disabled }: ButtonProps) => {
  if (disabled) {
    return disabledWithBackgroundStyle;
  }

  return css`
    background: #ffffff;
    border-color: #d9d9d9;
    color: rgba(0, 0, 0, 0.88);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);

    &:hover {
      color: #4096ff;
      border-color: #4096ff;
      background: #ffffff;
    }
  `;
};

const typeDashStyle = ({ disabled }: ButtonProps) => {
  if (disabled) {
    return css`
      ${disabledWithBackgroundStyle}
      border-style: dashed;
    `;
  }

  return css`
    background: #ffffff;
    border-color: #d9d9d9;
    color: rgba(0, 0, 0, 0.88);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
    border-style: dashed;

    &:hover {
      color: #4096ff;
      border-color: #4096ff;
      background: #ffffff;
    }
  `;
};

const typeTextStyle = ({ disabled }: ButtonProps) => {
  if (disabled) {
    return disabledStyle;
  }

  return css`
    &:hover {
      color: rgba(0, 0, 0, 0.88);
      background: rgba(0, 0, 0, 0.06);
    }
  `;
};

const typeLinkStyle = ({ disabled }: ButtonProps) => {
  if (disabled) {
    return disabledStyle;
  }

  return css`
    color: #1677ff;

    &:hover {
      color: #69b1ff;
      background: transparent;
    }
  `;
};

const typePrimaryStyle = ({ disabled }: ButtonProps) => {
  if (disabled) {
    return disabledWithBackgroundStyle;
  }

  return css`
    color: #ffffff;
    background: #1677ff;
    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);

    &:hover {
      color: #ffffff;
      background: #4096ff;
    }
  `;
};

const sizeSmallStyle = () => css`
  font-size: 14px;
  line-height: 1.5714285714285714;
  height: 24px;
  padding: 0px 7px;
  border-radius: 4px;
`;

const sizeLagerStyle = () => css`
  font-size: 16px;
  line-height: 1.5;
  height: 40px;
  padding: 7px 15px;
  border-radius: 8px;
`;

const sizeDefaultStyle = () => css`
  font-size: 14px;
  line-height: 1.5714285714285714;
  height: 32px;
  padding: 4px 15px;
  border-radius: 6px;
`;

const baseStyle = () => css`
  outline: none;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background: none;
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  transition: all 200ms ease-in-out;
  color: rgb(0 0 0 / 88%);
`;

export {
  baseStyle,
  sizeLagerStyle,
  sizeSmallStyle,
  sizeDefaultStyle,
  typeDashStyle,
  typeDefaultStyle,
  typeLinkStyle,
  typePrimaryStyle,
  typeTextStyle,
};
