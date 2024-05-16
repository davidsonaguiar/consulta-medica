import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

function CategoryListSkeleton() {
  return (
    <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
      {Array(6).fill(
        <div className="p-5 border border-border rounded-lg flex flex-col justify-center items-center gap-3">
          <Skeleton className="w-12 h-12"/>
          <Skeleton className="w-full min-w-24 h-5"/>
        </div>
      )}
    </div>
  )
}

export default CategoryListSkeleton
