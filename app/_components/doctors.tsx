import React, { Suspense } from 'react'
import DoctorList from './doctor-list'
import DoctorCardSkeleton from './doctor-card-skeleton'

function Doctors() {
  return (
    <section className="mb-10">
      <h2 className="w-full font-bold text-xl text-center sm:text-left">Especialistas Populares</h2>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        <Suspense fallback={<DoctorCardSkeleton repeat={4}/>}>
          <DoctorList query="doctors?populate=*"/>
        </Suspense>
      </div>
    </section>
  )
}

export default Doctors
