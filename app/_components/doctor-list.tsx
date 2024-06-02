import { getDoctors } from '../_utils/axios';
import { Doctor } from '@/definitions/doctor';
import DoctorCard from './doctor-card';

interface Props {
  query: string;  
}

async function DoctorList({ query }: Props) {
  const doctors: Doctor[] = await getDoctors(query);
  return (
    <>
      {
        doctors?.map(doctor => (
          <DoctorCard
            key={doctor.id}
            id={doctor.id}
            name={doctor.attributes.name}
            category={doctor.attributes.category?.data.attributes.name}
            url={doctor.attributes.avatar?.data.attributes.url}
            experience={doctor.attributes.yearExperience}
          />
        ))
      }
    </>
  )
}

export default DoctorList;
