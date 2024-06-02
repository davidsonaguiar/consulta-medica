import { getDoctorById } from "@/app/_utils/axios";
import { Doctor } from "@/definitions/doctor";
import DoctorDetails from "./_components/doctor-details";
import DoctorSuggestionList from "./_components/doctor-suggestion-list";

interface Props {
  params: {
    id: string;
  }
}


async function Page({ params }: Props) {

  const {
    id,
    attributes: {
      name,
      avatar,
      yearExperience,
      category,
      phone,
      email,
      about,
      patients,
    }
  }: Doctor = await getDoctorById(params.id);

  return (
    <div className="py-6">
      <h1 className="mb-6 text-3xl font-bold">Detalhes</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <DoctorDetails
          name={name}
          image={avatar.data.attributes.url}
          experience={yearExperience}
          category={category.data.attributes.name}
          phone={phone}
          email={email}
          about={about}
          patients={patients}
        />
        <DoctorSuggestionList id={id}/>
      </div>
    </div>
  )
}

export default Page
