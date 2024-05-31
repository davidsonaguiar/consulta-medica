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
      Name,
      Avatar,
      YearExperience,
      category,
      Phone,
      Email,
      About,
      Patients,
    }
  }: Doctor = await getDoctorById(params.id);

  return (
    <div className="py-6">
      <h1 className="mb-6 text-3xl font-bold">Detalhes</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <DoctorDetails
          name={Name}
          image={Avatar.data.attributes.url}
          experience={YearExperience}
          category={category.data.attributes.Name}
          phone={Phone}
          email={Email}
          about={About}
          patients={Patients}
        />
        <DoctorSuggestionList id={id}/>
      </div>
    </div>
  )
}

export default Page
