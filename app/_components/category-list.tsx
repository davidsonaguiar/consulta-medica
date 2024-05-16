import React from 'react'
import { getCategories } from '../_utils/axios';
import Image from 'next/image';
import { Category } from '@/definitions/category';
import Link from 'next/link';

async function CategoryList() {
  const categories: Category[] = await getCategories();
  return (
    <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
      {
        categories.map((category, index) => index < 6 && (
          <Link
            key={category.id}
            href={"/search/" + category.attributes.Name}
            className="p-5 bg-primary/15 dark:bg-white/10 rounded-lg text-center flex flex-col justify-center items-center gap-3 hover:scale-110 transition-all ease-in-out cursor-pointer"
          >
            <Image
              src={category.attributes.Icon.data.attributes.url}
              alt={category.attributes.Name}
              width={40}
              height={40}
            />
            <p className="text-sm text-primary">
              {category.attributes.Name}
            </p>
          </Link>
        ))
      }
    </div>
  )
}

export default CategoryList
