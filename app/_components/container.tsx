import { ReactNode } from "react"
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
}

function Container({children, className}: Props) {

  const defaulClass = "w-full max-w-7xl mx-auto px-6"

  return (
    <div className={twMerge(defaulClass, className)}>
      {children}
    </div>
  )
}

export default Container
