import { ReactNode } from "react"
import { StyledButton } from "./styles";

interface ButtonProps {
  size?: "small" | "medium" | "large",
  icon?: JSX.Element;
  color?: 'primary' | 'secondary' | 'default';
  title?: string,
}

export function Button({ size, icon, color, title }: ButtonProps) {
  return (
    <StyledButton>
      {icon}
      {title}
    </StyledButton>
  )
}