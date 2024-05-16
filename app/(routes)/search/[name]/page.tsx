import { Suspense } from "react";
import DoctorList from "@/app/_components/doctor-list";
import DoctorCardSkeleton from "@/app/_components/doctor-card-skeleton";

interface Props {
  params: {
    name: string;
  }
}

function Page({ params: { name } }: Props) {
  return (
    <div className="w-full p-6 grid grid-cols-2 md:grid-cols-3 gap-6">
      <Suspense fallback={<DoctorCardSkeleton repeat={3} />}>
        <DoctorList query={"doctors?filters[category][Name][$eq]=" + name + "&populate=*"} />
      </Suspense>
    </div>
  )
}

export default Page