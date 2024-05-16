import {
  Command,
  CommandInput,
  CommandList,
} from "@/components/ui/command"
import { Suspense } from "react";
import CategoryCommandItem from "./category-command-item";
import CategoryCommandItemSkeleton from "./category-command-item-skeleton";
import { usePathname } from "next/navigation";


function CategoryCommand() {
  return (
    <div className="h-screen flex flex-col">
      <Command className="border-x border-border">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible">
          <Suspense fallback={<CategoryCommandItemSkeleton />}>
            <CategoryCommandItem />
          </Suspense>
        </CommandList>
      </Command>
    </div>
  )
}

export default CategoryCommand
