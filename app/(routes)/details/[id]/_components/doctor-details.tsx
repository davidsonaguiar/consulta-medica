import { Button } from "@/components/ui/button";
import { GraduationCapIcon, MailIcon, PhoneCallIcon } from "lucide-react";
import Markdown from "markdown-to-jsx";

import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  image: string;
  experience: string;
  category: string;
  phone: string;
  email: string;
  about: string;
  patients: string;
}

function DoctorDetails(props: Props) {
  const { name, image, experience, category, phone, email, about, patients } = props;
  return (
    <div className="col-span-1 lg:col-span-3">
      <section className="p-6 rounded-lg border border-border grid grid-cols-1 md:grid-cols-3 md:gap-4">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="w-full h-[280px] mx-auto object-cover rounded-lg block"
        />
        <div className="p-2 col-span-2">
          <h2 className="mb-3 text-2xl font-bold line-clamp-1">{name}</h2>
          <p className="mb-2 text-foreground/65 flex items-center gap-2">
            <span>
              <GraduationCapIcon size={20} />
            </span>
            {experience} years of experience
          </p>
          <p className="mb-2 text-foreground/65 flex items-center gap-2">
            <PhoneCallIcon size={20} />
            {phone}
          </p>
          <p className="mb-2 text-foreground/65 flex items-center gap-2">
            <MailIcon size={20} />
            {email}
          </p>
          <p className="mb-2 text-foreground/65">+{patients} Pacientes</p>
          <span className="px-2 py-1 bg-primary/15 rounded-full text-sm text-primary">
            {category}
          </span>
          <Button asChild className="w-fit mt-4 block">
            <Link href="#">
              Agendar consulta
            </Link>
          </Button>
        </div>
      </section>
      <section className="mt-6 p-6 border border-border rounded-lg">
        <h2 className="mb-3 text-2xl font-bold">Sobre</h2>
        <Markdown className="text-foreground/65 tracking-wide">
          { about }
        </Markdown>
      </section>
    </div>
  )
}

export default DoctorDetails
