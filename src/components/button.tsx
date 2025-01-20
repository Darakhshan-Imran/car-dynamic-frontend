
import { Button } from "./ui/button"
import { ReactNode } from "react"


interface ButtonComponentProps {
  children: ReactNode;
  href?: string;
  className?:string;
  onClick:()=>void
  
}

const ButtonComponent = ({ children, className }: ButtonComponentProps) => {
  return (
    <Button className={className}>
     {children}
    </Button>
  )
}

export default ButtonComponent
