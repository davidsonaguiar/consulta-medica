import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { Suspense } from 'react'
import CategoryList from './category-list'
import CategoryListSkeleton from './category-list-skeleton'

function CategorySearch() {
  return (
    <section className="mb-10 flex flex-col items-center gap-4">
      <h2 className='font-bold text-4xl tracking-wide text-center'>
        Encontre um{" "}
        <span className="text-primary">
          Especialista
        </span>
      </h2>
      <p className="text-foreground/65 text-xl text-center">
        Procure aqui um especialista médico para agendar uma consulta.
      </p>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="busque aqui" />
        <Button type="submit">
          <Search className="w-4 h-4 mr-3" />
          Buscar
        </Button>
      </div>
      <Suspense fallback={<CategoryListSkeleton />}>
        <CategoryList />
      </Suspense>
    </section>
  )
}

export default CategorySearch
