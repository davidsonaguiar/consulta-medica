import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt=""
              src="/hero-image.jpg"
              className="absolute inset-0 h-full w-full rounded-xl object-cover"
              width={800}
              height={800}
            />
          </div>

          <div className="lg:py-24 flex flex-col items-center text-center sm:block sm:text-left">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Encontre um <span className="text-primary">Especialista</span>  e <span className="text-primary">Agende</span> uma consuta!
            </h2>

            <p className="mt-4 text-foreground/65">
              Na sua busca por uma vida mais saudável e feliz, estamosaqui para guiá-lo.
              Com acesso fácil aos melhores especialistas médicos,
              estamos prontos para ajudá-lo a encontrar o cuidado que você merece.
              Não deixe que preocupações com agendamento atrapalhem o seu bem-estar.
            </p>

            <Button asChild>
              <Link
                href="#"
                className="mt-8"
              >
                Expore agora
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
