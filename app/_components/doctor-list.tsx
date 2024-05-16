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
            name={doctor.attributes.Name}
            category={doctor.attributes.category?.data.attributes.Name}
            url={doctor.attributes.Avatar?.data.attributes.url}
            experience={doctor.attributes.YearExperience}
          />
        ))
      }
    </>
  )
}

export default DoctorList;
