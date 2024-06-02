import "styled-components";
import { SizeType } from "../common/type";

type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
  "type"
>;

export type ButtonType = "default" | "primary" | "dashed" | "link" | "text";

export type ButtonSize = SizeType;

export interface ButtonProps extends MergedHTMLAttributes {
  type?: ButtonType;
  label?: string;
  size?: ButtonSize;
  disabled?: boolean;
  block?: boolean;
  // shape
  // loading
  // icon
  // iconPosition
  // ghost
  // danger
}
