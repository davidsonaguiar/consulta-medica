import { CommandGroup, CommandItem } from '@/components/ui/command'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

function CategoryCommandItemSkeleton() {
  return (
    <CommandGroup heading="Suggestions" >
      {
        Array(8).fill(
          <CommandItem className="h-[52px] rounded-md flex items-center gap-2">
            <Skeleton className="h-8 w-8"/>
            <Skeleton className="h-8 w-full"/>
          </CommandItem>
        )
      }
    </CommandGroup>
  )
}

export default CategoryCommandItemSkeleton
