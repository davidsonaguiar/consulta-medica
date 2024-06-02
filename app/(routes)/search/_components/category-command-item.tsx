import { getCategories } from '@/app/_utils/axios';
import { CommandGroup, CommandItem } from '@/components/ui/command'
import { Category } from '@/definitions/category';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

async function CategoryCommandItem() {
  const categories: Category[] = await getCategories();
  return (
    <CommandGroup heading="Suggestions">
      {
        categories?.map(item => (
          <CommandItem className="rounded-md">
            <Link href={"/search/" + item.attributes.name} className="w-full p-2 text-primary flex gap-2">
              <Image
                src={item.attributes.icon.data.attributes.url}
                alt="icon"
                width={24}
                height={24}
              />
              {item.attributes.name}
            </Link>
          </CommandItem>
        ))
      }
    </CommandGroup>
  )
}

export default CategoryCommandItem
