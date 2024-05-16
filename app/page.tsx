import Hero from "./_components/hero";
import CategorySearch from "./_components/category-search";
import DoctorList from "./_components/doctor-list";
import { Suspense } from "react";
import DoctorCardSkeleton from "./_components/doctor-card-skeleton";
import Doctors from "./_components/doctors";
import Footer from "./_components/footer";
import Container from "./_components/container";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategorySearch />
      <Doctors />
      <Footer />
    </main>
  );
}
