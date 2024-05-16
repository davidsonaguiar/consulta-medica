import { Button } from "@/components/ui/button";
import Image from "next/image"
import Link from "next/link";

interface Props {
  id: number;
  name: string;
  url: string;
  category: string;
  experience: string;
}

function DoctorCard(props: Props) {
  const { id, name, url, category, experience } = props;
  return (
    <div className="w-full max-w-sm mx-auto p-3 border rounded-lg hover:border-primary">
      <div className="rounded-lg overflow-hidden transition-all ease-in-out">
        <Image
          src={url}
          alt={"Foto do(a) " + name}
          width={500}
          height={200}
          className="object-cover rounded-lg hover:scale-125 transition-all ease-in-out"
        />
      </div>
      <div className="mt-3 items-baseline flex flex-col gap-1">
        <span className="px-2 py-1 bg-primary/15 rounded-full text-sm text-primary">
          {category}
        </span>
        <h3 className="font-bold">
          {name}
        </h3>
        <p className="text-primary text-sm">
          {experience} de experiência
        </p>
        <Button
          variant="outline"
          asChild
          className="mt-2 border-primary  hover:bg-primary text-xs text-primary dark:text-white hover:text-white "
        >
          <Link
            href={`/doctor/${id}`}
            className="py-2 px-3 w-full"
          >
            Agende agora
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default DoctorCard
