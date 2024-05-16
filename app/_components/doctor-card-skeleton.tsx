import { Skeleton } from '@/components/ui/skeleton'

interface Props {
  repeat: number;
}

function DoctorCardSkeleton({repeat}: Props) {
  return (
    <>
      {Array(repeat).fill(
        <div className="w-full max-w-sm mx-auto p-3 border rounded-lg">
          <Skeleton className="w-full h-[160px] rounded-lg" />
          <div className="mt-3 items-baseline flex flex-col gap-1">
            <Skeleton className="w-20 h-[28px] rounded-full" />
            <Skeleton className='w-full h-6' />
            <Skeleton className="w-full h-5" />
            <Skeleton className="w-full h-10" />
          </div>
        </div>
      )}
    </>
  )
}

export default DoctorCardSkeleton
