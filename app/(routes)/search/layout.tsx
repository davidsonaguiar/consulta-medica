import { ReactNode, Suspense } from "react"
import CategoryCommand from "./_components/category-command";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="h-screen grid grid-cols-3 md:grid-cols-4">
      <div className="hidden md:block">
        <CategoryCommand />
      </div>
      <div className="col-span-2 md:col-span-3">
        {children}
      </div>
    </div>
  )
}

export default Layout
