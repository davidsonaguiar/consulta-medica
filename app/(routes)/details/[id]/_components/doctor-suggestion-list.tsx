import { getDoctors } from '@/app/_utils/axios'
import { Doctor } from '@/definitions/doctor'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from 'next/link';

interface Props {
  id: number;
}

async function DoctorSuggestionList({ id }: Props) {
  const doctors: Doctor[] = await getDoctors(`?filters[id][$nei]=${id}&pagination[pageSize]=8&populate=*`);

  const suggestionsDoctors = doctors.map((doctor) => {

    const {
      id,
      attributes: {
        Name,
        Avatar: {
          data: {
            attributes: {
              url
            }
          }
        },
        category
      }
    } = doctor;

    const nameSplitted = Name.split(' ');

    return (
      <li className='list-none' key={doctor.id} >
        <Link 
          href={`/details/${id}`} 
          
          className="p-3 hover:bg-secondary rounded-lg shadow flex gap-3 items-center"
        >
          <Avatar>
            <AvatarImage src={url} alt={Name} className="object-cover"/>
            <AvatarFallback>
              {nameSplitted[1][0]}{nameSplitted[nameSplitted.length - 1][0]}
            </AvatarFallback>
          </Avatar>
          <div className="leading-6">
            <h3 className="font-bold line-clamp-1">
              {Name}
            </h3>
            <span className="py-1 px-2 bg-primary/15 rounded-full text-primary text-xs">{category.data.attributes.Name}</span>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <aside className="p-6 rounded-lg border border-border">
      <h2 className="mb-3 text-2xl font-bold line-clamp-1">Sugestão</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-3">
        {suggestionsDoctors}
      </ul>
    </aside>
  )
}

export default DoctorSuggestionList
